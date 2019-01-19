import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";




class App extends Component {

  state = {
    characters,
    counter: 0,
    highScore: 0
  };


chooseCharacter=(id,selectedState)=>{
    const characters = this.state.characters;
    characters.sort(function(){return 0.5 - Math.random()});

    if (selectedState){
        characters.forEach(character=> character.selected = false);
        this.setState({characters: characters, counter: 0, highScore: this.state.counter})
        {console.log(this.state.counter)}


    } else {
        characters.forEach((character) => {
            if (character.id === id && character.selected === false) {
                character.selected = true;
                this.setState({characters, counter: this.state.counter + 1})
                {console.log(this.state.counter)}
            }
        });
    }
};

  render() {
    return (
      <Wrapper>
        <Title>Hanna Barbera Characters
           <br/>
          Score ={this.state.counter}
           <br/>
          High score = {this.state.highScore}
        </Title>
        
        {this.state.characters.map(character => (
          <CharacterCard
          id={character.id}
          key={character.id}
          image={character.image}
          selected={character.selected}
          chooseCharacter={this.chooseCharacter}
          character={character.name}
          counterCheck={this.counterCheck}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;