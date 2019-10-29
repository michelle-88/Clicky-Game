import React, { Component } from 'react';
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
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
        document.getElementById("answer-text").innerText = "You guessed correctly!";
        this.setState({ score: this.state.score + 1 });
      }

      // Still need to determine how to reset all image obj 'clicked' properties to false again
      else if(image.id === id && image.clicked === true){
        this.setState({ score: 0 });
        document.getElementById("answer-text").innerText = "You guessed incorrectly!";
      }
      return image
    })

    this.setState({ images: images })
  }

  render() {
    return (
      <div>
      <Navbar score={this.state.score}/>
      <Wrapper>
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
      </div>
    )
  }
}

export default App;
