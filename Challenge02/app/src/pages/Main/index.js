import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import { Container } from './styles';
import api from '../../services/api';
export default class Main extends Component {
    state = {
        currentRepository: '',
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
            console.log(e.target);
            this.setState({
                issues,
                currentRepository: e.target
            });
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
                    currentRepository={this.state.currentRepository}
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
