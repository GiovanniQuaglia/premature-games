import React from 'react';
import styled from 'styled-components';

const GameBox = (props) => {
  return(
      <Box>
        <GameImage></GameImage>
        <TitleBox>
          <Title>{props.gameTitle}</Title>
          <UnderTitle>{props.underTitle}</UnderTitle>
        </TitleBox>
      </Box>
    )
}

const Box = styled.div`
  width: 300px;
  margin: 40px 24px 8px 24px;
  display: inline-block;
`;

const GameImage = styled.div`
  width: 100%;
  height: 185px;
  overflow: hidden;
  background-color: tomato;
`;

const TitleBox = styled.div`
  width: 100%;
`;

const Title = styled.p`
  font-size: 21px;
  font-weight: 600;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin: 18px 0 0 0;
`;

const UnderTitle = styled.p`
  font-size: 14px;
  font-weight: 200;
  color: #8c9192;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  margin: 8px 0 0 0;
`;

export default GameBox;
