//much of this code is borrowed from FriendCard Activity
import React, { Component } from "react";
import Clicky from "./components/Clicky.js";
import Images from "./components/Images";
import Scores from "./components/Scores";
import Wrapper from "./components/Wrapper";
import friends from "./images.json";
import Characters from "./components/Images";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    friends
  };

  clickyCard = id => {
    console.log("hi");
  };

  render() {
    return (
      <Wrapper>
        {this.state.friends.map(friends => (
          <Characters
            id={friends.id}
            name={friends.name}
            image={friends.image}
          />
        ))}
      </Wrapper>
    )
  }
}


export default App;