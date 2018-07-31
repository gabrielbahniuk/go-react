import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import { Container } from './styles';
import api from '../../services/api';
export default class Main extends Component {
    state = {
        repositories: [],
        repositoryInput: '',
        issues: []
    };

    loadIssues = async e => {
        e.preventDefault();
        const { repositoryInput } = this.state;
        try {
            const { data: issues } = await api.get(
                `/repos/${repositoryInput}/issues?state=all`
            );
            this.setState({
                issues: [issues]
            });
            console.log(issues);
        } catch (err) {
            console.log(err);
        }
    };

    handleAddRepository = async e => {
        e.preventDefault();
        const { repositories, repositoryInput } = this.state;
        try {
            const { data: repository } = await api.get(
                `/repos/${repositoryInput}`
            );
            this.setState({
                repositories: [...repositories, repository]
            });
        } catch (err) {
            console.log(err);
        }
    };

    onChange = e => {
        e.preventDefault();
        this.setState({ repositoryInput: e.target.value });
    };

    render() {
        return (
            <Container>
                <Sidebar
                    issues={this.state.issues}
                    loadIssues={this.loadIssues.bind(this)}
                    onChange={this.onChange.bind(this)}
                    repositoryInput={this.state.repositoryInput}
                    repositories={this.state.repositories}
                    handleAddRepository={this.handleAddRepository.bind(this)}
                />
            </Container>
        );
    }
}
