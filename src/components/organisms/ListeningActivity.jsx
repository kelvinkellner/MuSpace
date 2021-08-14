import React from "react";
import Styled from "styled-components";

import { Card, TextButton } from "@atoms"; 
import { ListeningActivityCard } from "@molecules";

const StyledInnerDiv = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    width: 100%;
`;

const StyledTitle = Styled.p`
    font-size: ${props => props.theme.fontSizes.mediumLarge};
    color: ${props => props.theme.colors.black};
    margin: 0 auto;
    font-weight: bold;
`;

function ListeningActivity({ friends }){
    return (
        <Card style={{ minWidth: "max-content", maxWidth: "100%" }}>
            <StyledTitle>Friend Listening Activity</StyledTitle>
            <StyledInnerDiv>
                {/* {
                    friends.map(({ username, title, artist }, i) => {
                        return <ListeningActivityCard key={i} username={username} title={title} artist={artist} />
                    })
                } */}
                <TextButton text="See More" style={{ width: "100%", marginTop: "0.4rem" }} onClick={notImplemented}/>
            </StyledInnerDiv>
        </Card>
    );
}

function notImplemented(){
    alert("This feature has not been implemented yet!");
}

export default ListeningActivity;