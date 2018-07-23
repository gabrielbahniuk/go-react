import React, { Component, Fragment } from 'react';
import Header from './Header';
import Content from './Content';

export default class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author: 'RocketSeat',
        time: 'há 2min',
        text:
          'Hoje enviamos pelo SEDEX uma xicara especial pro nosso aluno Gabriel Dias Bahniuk. Vestibulum ac neque sit amet sem condimentum lobortis vel quis tortor. Sed tristique cursus metus, ac ornare ex vestibulum eu. Donec in viverra diam. Ut eget cursus mi. Suspendisse quis justo molestie, ornare lacus sit amet, egestas lectus. Donec iaculis, quam at finibus accumsan, felis purus sodales mi, mollis maximus lectus odio at urna. Ut ultrices nibh a odio volutpat, sed dictum nisl dapibus. Etiam posuere nunc finibus porttitor auctor. Nulla sit amet magna congue ex hendrerit gravida. Nulla scelerisque vehicula urna. Phasellus tempor velit sit amet iaculis sollicitudin. Duis dolor enim, imperdiet id nisi vel, sagittis ullamcorper velit. Nulla pharetra vulputate leo. Vivamus hendrerit felis purus, id feugiat lacus porta sodales.',
      },
      {
        id: 2,
        avatar: 'https://avatars2.githubusercontent.com/u/7410668?s=400&v=4',
        author: 'Gabriel',
        time: 'há 10min',
        text:
          'Hoje recebi a xicara da Rocketseat, e posso afirmar: meus códigos se autoindentam...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero erat, eleifend a laoreet et, ultrices imperdiet sem. Mauris non mauris nulla. Vestibulum ac neque sit amet sem condimentum lobortis vel quis tortor. Sed tristique cursus metus, ac ornare ex vestibulum eu. Donec in viverra diam. Ut eget cursus mi. Suspendisse quis justo molestie, ornare lacus sit amet, egestas lectus. Donec iaculis, quam at finibus accumsan, felis purus sodales mi, mollis maximus lectus odio at urna. Ut ultrices nibh a odio volutpat, sed dictum nisl dapibus. Etiam posuere nunc finibus porttitor auctor. Nulla sit amet magna congue ex hendrerit gravida. Nulla scelerisque vehicula urna. Phasellus tempor velit sit amet iaculis sollicitudin. Duis dolor enim, imperdiet id nisi vel, sagittis ullamcorper velit. Nulla pharetra vulputate leo. Vivamus hendrerit felis purus, id feugiat lacus porta sodales.',
      },
      {
        id: 3,
        avatar: 'https://avatars0.githubusercontent.com/u/28929274?s=200&v=4',
        author: 'Damn IT',
        time: 'há 20min',
        text:
          'lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur libero erat, eleifend a laoreet et, ultrices imperdiet sem. Mauris non mauris nulla. Vestibulum ac neque sit amet sem condimentum lobortis vel quis tortor. Sed tristique cursus metus, ac ornare ex vestibulum eu. Donec in viverra diam. Ut eget cursus mi. Suspendisse quis justo molestie, ornare lacus sit amet, egestas lectus. Donec iaculis, quam at finibus accumsan, felis purus sodales mi, mollis maximus lectus odio at urna. Ut ultrices nibh a odio volutpat, sed dictum nisl dapibus. Etiam posuere nunc finibus porttitor auctor. Nulla sit amet magna congue ex hendrerit gravida. Nulla scelerisque vehicula urna. Phasellus tempor velit sit amet iaculis sollicitudin. Duis dolor enim, imperdiet id nisi vel, sagittis ullamcorper velit. Nulla pharetra vulputate leo. Vivamus hendrerit felis purus, id feugiat lacus porta sodales.',
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Content data={posts} />
      </Fragment>
    );
  }
}
