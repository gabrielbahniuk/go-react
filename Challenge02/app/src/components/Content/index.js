import React from 'react';
import Repository from '../Repository';
import Issue from '../Issue';
import { Container, Header, Loading, ListIssue } from './styles';
const Content = ({ repository, loading, issues, loadIssues, select }) => (
    <Container>
        <Header>
            {Object.keys(repository).length > 0 ? (
                <div className="repository">
                    <Repository repository={repository} />
                </div>
            ) : null}

            <div className="state">
                <select
                    value={select}
                    onChange={e => loadIssues(e, repository, e.target.value)}
                >
                    <option value="all">All</option>
                    <option value="open">Opened</option>
                    <option value="closed">Closed</option>
                </select>
            </div>
        </Header>
        {loading ? (
            <Loading>
                <div>
                    <i className="fa fa-spinner fa-pulse" />
                </div>
            </Loading>
        ) : (
            <ListIssue>
                {issues.map(issue => <Issue issue={issue} key={issue.id} />)}
            </ListIssue>
        )}
    </Container>
);
export default Content;
