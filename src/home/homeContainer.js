import React from "react";
import styled from 'styled-components';

import Navbar from './navbar';
import GameBox from './gameBox';

class Home extends React.Component {
  render(){
    return(
      <div>
        <Navbar />
        <BodyWrapper>
          <GameBox gameTitle='The Wolf In The Wood' underTitle='Live the life of a Wolf in the forest'/>
          <GameBox gameTitle='Laika' underTitle='Space is beautiful from here'/>
          <GameBox gameTitle='Napoleon' underTitle='Live the last days of Napoleon in St. Helen'/>
        </BodyWrapper>
      </div>
    )
  }
}

const BodyWrapper = styled.div`
  padding: 0 45px 0 45px;
`;

export default Home;