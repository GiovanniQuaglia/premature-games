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
  padding: 32px;
  width: 100%;
  background-color: black;
  color: white;
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-weight: 600;
  font-size: 36px;
`;

export default Navbar;