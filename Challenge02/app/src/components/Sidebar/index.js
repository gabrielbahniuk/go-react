import React from 'react';
import { SidebarContainer, SidebarHeader, ReposList } from './styles';
import Content from '../Content';
const Sidebar = ({ repositories }) => (
    <SidebarContainer>
        <SidebarHeader>
            <form>
                <input type="text" placeholder="New repository" />
                <button type="submit">
                    <i className="fa fa-plus-circle" />
                </button>
            </form>
        </SidebarHeader>

        <ReposList>
            {repositories.map(repo => (
                <li>
                    <img src={repo.owner.avatar_url} alt={repo.login} />
                    <div>
                        <strong>{repo.name}</strong>
                        <small>{repo.owner.login}</small>
                    </div>
                    <i
                        className="fa fa-angle-right"
                        onClick={() => <Content />}
                    />
                </li>
            ))}
        </ReposList>
    </SidebarContainer>
);
export default Sidebar;
