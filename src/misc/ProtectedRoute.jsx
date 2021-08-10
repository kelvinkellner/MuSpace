import React from "react";
import Styled from "styled-components";
import { Route, Redirect } from "react-router-dom";

import { SearchBar } from "@molecules";
import { Sidebar } from "@organisms";

const LeftDiv = Styled.div`
    width: 18vw;
    height: 100vh;
    position: fixed;
`;

const RightDiv = Styled.div`
    width: 79vw;
    height: 100%;

    left: 20vw;
    position: sticky;

    display: flex;
    flex-direction: column;
`;

const PageContainer = Styled.div`
    display: flex;
    flex-grow: 1;
    
    transition: all 0.25s ease;
`;

function ProtectedRoute({ component, isLoading, isLoggedIn, isVerified, ...rest }) {
    if(isLoading)
        return (<div>Loading...</div>);

    else {
        const Component = component; // react sucks....
        if (isLoggedIn && isVerified) {
            return (<Route {...rest}>
                <LeftDiv>
                    <Sidebar />
                </LeftDiv>
                <RightDiv>
                    <SearchBar />
                    <PageContainer>
                        <Component />
                    </PageContainer>
                </RightDiv>
            </Route>);
                
        } else if(isLoggedIn) {
            return (
                <Route {...rest}>
                    <Redirect to="/verify"/>
                </Route>
            );
            
        } else {
            return (
                <Route {...rest}>
                    <Redirect to="/login"/>
                </Route>
            );
        }
    }
}

export default ProtectedRoute;