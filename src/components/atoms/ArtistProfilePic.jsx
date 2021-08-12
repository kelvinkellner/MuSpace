import React from "react";
import Styled from "styled-components";
import { DefaultCover } from "@assets";

const StyledImage = Styled.img`

    margin: 10px 10px 10px 10px;
    transition: all 0.25s ease;
    width: ${(props) => props.width};

    border-radius: 20px;
    border-style: hidden;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 4px 12px 0 rgba(0, 0, 0, 0.19);

    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
    }
`;
/*
    border-style: hidden; 
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
*/

const StyledLink = Styled.a`
`;

function ArtistProfilePic({ width, artist_pic_url}) {
    return (
        <StyledLink href="/">
            <StyledImage src={artist_pic_url} width={width} height="auto"></StyledImage>
        </StyledLink>
    );
}

export default ArtistProfilePic;