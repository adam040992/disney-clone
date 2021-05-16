import React from 'react';
import styled from 'styled-components';

function Login() {
    return (
        <Container>
            <ContentBox>
                <ContentBoxLogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>
                <Description>
                    Log In is available to subscribers in European regions where Disney+ is currently available. This Log In screen is for portability access.
                </Description>
                <ContentBoxLogoTwo src="/images/cta-logo-two.png" />
            </ContentBox>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    
    &:before {
       position: absolute;
       content: "";
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       background-position: top;
       background-size: cover;
       background-repeat: no-repeat;
       background-image: url("/images/login-background.jpg");
       opacity: 0.7;
       z-index: -1;
    }
`;

const ContentBox = styled.div`
    margin-top: 100px;
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContentBoxLogoOne = styled.img``;

const SignUp = styled.a`
    text-align: center;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }
`;

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const ContentBoxLogoTwo = styled.img`
    margin-top: 12px;
    width: 90%;
`;
