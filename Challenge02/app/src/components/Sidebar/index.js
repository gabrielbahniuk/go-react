import React from 'react';
import {
    Container,
    SidebarContainer,
    SidebarHeader,
    ReposList,
    MainContent
} from './styles';
import Header from '../Header';

const Sidebar = ({
    repositories,
    repositoryInput,
    handleAddRepository,
    onChange,
    issues,
    loadIssues,
    currentRepository
}) => (
    <Container>
        <SidebarContainer>
            <SidebarHeader>
                <form onSubmit={handleAddRepository}>
                    <input
                        type="text"
                        placeholder="New repository"
                        value={repositoryInput}
                        onChange={onChange}
                    />
                    <button type="submit">
                        <i className="fa fa-plus-circle" />
                    </button>
                </form>
            </SidebarHeader>

            <ReposList>
                {repositories.map(repo => (
                    <li key={repo.id}>
                        <img src={repo.owner.avatar_url} alt={repo.login} />
                        <div>
                            <strong>{repo.name}</strong>
                            <small>{repo.owner.login}</small>
                        </div>
                        <i className="fa fa-angle-right" onClick={loadIssues} />
                    </li>
                ))}
            </ReposList>
        </SidebarContainer>

        <MainContent>
            <Header repo={currentRepository} />
            <ul>
                {issues.map(issue => (
                    <li>
                        <img src={issue.user.avatar_url} />
                        <span className="header-text">
                            <strong>{issue.title}</strong>
                            <small>{issue.user.login}</small>
                            <button>
                                <a target="_blank" href={issue.html_url}>
                                    ABRIR ISSUE
                                </a>
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </MainContent>
    </Container>
);
export default Sidebar;
