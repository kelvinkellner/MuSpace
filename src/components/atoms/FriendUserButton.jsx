import React from "react";
import Styled from "styled-components";
import SpaceFillerDiv from "@misc/SpaceFillerDiv";

import { FaCog } from "react-icons/fa"; /* cog button fill icon*/

const StyledDiv = Styled.div`
  color: ${(props) => props.theme.colors.grey};
  align-items: center;
  transition: all 0.25s ease;
  margin: 0.2rem 0;
  display: flex;
  flex-direction: row;
  width: 100%;

  @media (max-width: 900){
    flex-direction: column;
  }
`;

const StyledLink = Styled.a`
    border: none;
    padding: 0;
    size: 0;
    display: block;
    text-decoration: none;
`;

const StyledText = Styled.p`
    font-family: "Roboto";
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: normal;
    color: ${(props) => props.theme.colors.mediumGrey};
    
    text-align: center;
    margin: 0;

    :hover{
      color: ${(props) => props.theme.colors.muSpacePurple};
      transition: all 0.1s ease-in-out;
    }
`;

const UserProfPic = Styled.img`
    max-width: 20%; 
    height: auto;
    border-radius: 100%;
    padding: 0.2em;
    margin-left: 0.8em;
`;

function UserButton({ text, icon, location, profileImage }) {
    return (
        <StyledDiv>
            <UserProfPic src={profileImage} alt="Default Profile image" />
            <StyledLink href="/profile">
                <StyledText>{text}</StyledText>
            </StyledLink>
            <div style={{margin: "0 auto"}} />
        </StyledDiv>
    );
}

export default UserButton;