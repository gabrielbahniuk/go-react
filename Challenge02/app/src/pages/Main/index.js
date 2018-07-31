import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import Content from '../../components/Content';
import { Container } from './styles';
import api from '../../services/api';
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            select: 'all',
            repository: {},
            issues: []
        };
    }

    loadIssues = async (e, repository, select = 'all') => {
        this.setState({
            loading: true,
            select,
            repository: {}
        });
        try {
            const { data: issues } = await api.get(
                `/repos/${repository.full_name}/issues?state=${select}`
            );

            this.setState({
                repository,
                issues
            });
        } catch (err) {
            console.log(err);
        } finally {
            this.setState({ loading: false });
        }
    };

    render() {
        const { repository, loading, issues, select } = this.state;
        return (
            <Container>
                <Sidebar loadIssues={this.loadIssues} />
                <Content
                    repository={repository}
                    loading={loading}
                    issues={issues}
                    select={select}
                    loadIssues={this.loadIssues}
                />
            </Container>
        );
    }
}
