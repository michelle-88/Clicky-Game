import React, { Component } from 'react';
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import images from "./images.json";
import './App.css';

class App extends Component {
  state = {
    score: 0,
    images
  };

  handleClick = id => {
    const images = this.state.images.map(image => {
      if(image.id === id && image.clicked === false){
        image.clicked=true;
        this.setState({ score: this.state.score + 1 })
      }

      else if(image.id === id && image.clicked === true){
        this.setState({ score: 0 })
        alert("You lose!")
      }
      return image
    })

    this.setState({ images: images })
  }

  render() {
    return (
      <Wrapper>
        Score: {this.state.score}

        {this.state.images.map(image => (
          <ImageDiv 
          image={image.image}
          name={image.name}
          clicked={image.clicked}
          id={image.id}
          key={image.id}
          handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    )
  }
}

export default App;
