import React, { Fragment } from 'react';
import {
    Container,
    SidebarContainer,
    SidebarHeader,
    ReposList
} from './styles';
import Header from '../Header';

const Sidebar = ({
    repositories,
    repositoryInput,
    handleAddRepository,
    onChange,
    issues,
    loadIssues
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

        <Fragment>
            <Header />
            <ul>{issues.map(issue => <li>{issue.url}</li>)}</ul>
        </Fragment>
    </Container>
);
export default Sidebar;
