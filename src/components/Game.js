//my tutor recommended all of the code going here then calling this whole thing in the App.js file
//some of this code was borrowed from the card activity from class
//setState was used to change the score: https://reactjs.org/docs/react-component.html#setstate
import React, { Component } from "react";
import Characters from "./Images";
import Wrapper from "./Wrapper";
import Footer from "./Footer";
import Header from "./Header";
import friends from "../images.json";
import Scores from "./Scores";

class Game extends Component {
    //friends is the image cards, score for score of the user, the goal of the game is 12, have a clickedFriendsIds to store the image IDs in an array, highScore reflects the highest amount of images the user clicked before losing (unless they get to 12 then they win)
    state = {
        friends,
        clickedFriendsIds: [],
        score: 0,
        highScore: 0,
        goal: 12,
    }
    //functions triggered by initial click of each image
    handleImageClick = id => {
        //ensuring clicked image correlated with the proper id
        console.log(id);
        let clickedFriendsIds = this.state.clickedFriendsIds;
        //shuffle the images when they get clicked
        if (clickedFriendsIds.includes(id)) {
            console.log(clickedFriendsIds)
            this.setState({ clickedFriendsIds: [], score: 0, highScore: clickedFriendsIds.length });
            return;
        } else {
            clickedFriendsIds.push(id)
            //how the user wins
            if (clickedFriendsIds.length === 12) {
                this.setState({ score: 12, clickedFriendsIds: [], highScore: 12 });
                console.log("winner");
                return;
            }
            //update highest score
            if (clickedFriendsIds.length > clickedFriendsIds) {
                this.setState({ score: 0, clickedFriendsIds: [], highScore: clickedFriendsIds })
            }
            this.setState({ friends, clickedFriendsIds, score: clickedFriendsIds.length });
            //for loop for the win! math.random to get the random placement of images
            for (let i = friends.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [friends[i], friends[j]] = [friends[j], friends[i]];
            }
        }

    };
    //show the contents on the page
    render() {
        return (
            <div>
                <Header />
                <Scores total={this.state.score}
                    goal={12}
                    highScore={this.state.highScore}
                />
                <Wrapper>
                    {this.state.friends.map(friend => (
                        <Characters
                            handleClick={this.handleImageClick}
                            id={friend.id}
                            name={friend.name}
                            image={friend.image}
                        />
                    ))}
                </Wrapper>
                <Footer />
            </div>
        )
    }






};

export default Game;