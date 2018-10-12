import React from "react";
import styled from 'styled-components';

import Navbar from './navbar';
import GameBox from './gameBox';
import gamesList from './gamesList';

class Home extends React.Component {

  displayGames(games) {
    const isOdd = games.length % 2 === 1 ? true : false;
    return (
      games.map((game, index) => {
        if (index === games.length - 1 && isOdd) {
          return (
            <React.Fragment key={index + 2}>
              <GameBox gameTitle={game.title} underTitle={game.subtitle} key={index}/>
              <GameBox gameTitle='cazzo' underTitle='culo' key={index + 1} odd/>
            </React.Fragment>
          )       
        }
        return <GameBox gameTitle={game.title} underTitle={game.subtitle} key={index}/>
      })
    )
  }
  
  render(){
    const games = gamesList
    return(
      <HomeWrapper>
        <Navbar />
        <BodyWrapper>
          <FlexBody>
            {this.displayGames(games)}
          </FlexBody>
        </BodyWrapper>
      </HomeWrapper>
    )
  }
}

const HomeWrapper = styled.div`
  text-align: center;
`;

const BodyWrapper = styled.div`
  display: inline-block;
`;

const FlexBody = styled.ul`
  padding: 0 24px 0 24px;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: flex-start;
`;

export default Home;
