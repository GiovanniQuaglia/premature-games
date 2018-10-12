import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
      <div>
        <NavbarBox>
          PREMATURE GAMES
        </NavbarBox>
      </div>
    )
}

const NavbarBox = styled.div`
  padding: 32px 0 32px 45px;
  background-color: black;
  color: white;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: 400;
  font-size: 36px;
  text-align: left;

  @media only screen and (max-width: 744px) {
    text-align: center;
    padding: 32px 0 32px 0;
    }
`;

export default Navbar;