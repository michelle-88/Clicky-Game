import React, { Component } from 'react';
import ImageDiv from "./components/ImageDiv";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import images from "./images.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  
  state = {
    score: 0,
    topScore: 0,
    shake: false,
    images: shuffleArray(images)
  };

  handleClick = id => {
    const newImages = this.state.images.map(image => {
      if(image.id === id && image.clicked === false){
        image.clicked=true;
        document.getElementById("answer-text").innerText = "You guessed correctly!";
        this.setState({ shake: false });
        this.setState({ score: this.state.score + 1 });
      }

      else if(image.id === id && image.clicked === true){
        this.setState({ score: 0 });
        this.setState({ shake: true });
        this.state.images.forEach(image => image.clicked=false);
        document.getElementById("answer-text").innerText = "Try Again!";
        if(this.state.score > this.state.topScore) {
          this.setState({ topScore: this.state.score }) 
        }
      }
      return image
    })

    this.setState({ images: shuffleArray(newImages) })
  }

  render() {
    return (
      <div>
      <Navbar score={this.state.score} topScore={this.state.topScore}/>
      <Jumbotron />
      <Wrapper shake={this.state.shake}>
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
      <Footer />
      </div>
    )
  }
}

export default App;
