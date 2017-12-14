import React, { Component } from 'react';

class Album extends Component {
  render() {
    return (
      <section className="album">
        <h1>{this.props.match.params.slug} Album will go here</h1>
      </section>
    );
  }
}

export default Album;
