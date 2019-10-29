import React, { Component } from 'react';
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    images
  };

  render() {
    return (
      <Wrapper>
        {this.state.images.map(image => (
          <ImageDiv 
          image={image.image}
          name={image.name}
          id={image.id}
          key={image.id}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
