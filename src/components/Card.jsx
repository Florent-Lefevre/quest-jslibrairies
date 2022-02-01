import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 550px;
    height: 270px;
    color: #444;
    border: 2px solid #C6C6C6;
    border-radius: 6px;
    -webkit-box-shadow: 5px 5px 8px -2px #D1D1D1; 
    box-shadow: 5px 5px 8px -2px #D1D1D1;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #FAF7FF;
    font-family: "Lucida Console", Monaco, monospace;
`;

const AlbumContainer = styled.div`
    display: flex;
    width: 100%;
    height : 200px;
    border-bottom: 1px solid #C6C6C6;
`;

const ImgContainer = styled.img`
    width : 200px;
    border-radius: 4px 0px 0px 0px;
    padding: 0;
    margin:0;
    border-right 1px solid #C6C6C6;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 40px;
    padding-left: 15px;
`;

const Title = styled.h1` 
    font-size: 22px;
    padding-bottom: 20px;
`;

const SubTitle = styled.h2` 
font-size: 17px;
font-weight: 200;
padding-bottom: 5px;
`;

const Year = styled.h3` 
font-family: Monaco, monospace;
font-size: 15px;
font-weight: 200;
`;

const RateContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

`;

const Rate = styled.h2`
    font-size: 19px;
    padding-top: 20px;
    margin-left: 30px;
    margin-right: 50px;

`;

const StarsContainer = styled.div`
    display: flex;
    width: 150px;
    padding-top: 20px;

`;

const Stars = styled.h2`
    font-size: 19px;
    color: grey;
    &:hover {
        Color: black;
    }
`;


export const Card = () => {

    
    return <div>
        <Container>
            <AlbumContainer>
                <ImgContainer src="https://lecanalauditif.ca/wp-content/uploads/2020/11/Emma-Ruth-Rundle-and-Thou-May-Our-Chambers-Be-Full-1604069139-640x640-1.jpg" alt="album cover" />
                <DescriptionContainer>
                    <Title>Emma Ruth Rundle & Thou</Title>  
                    <SubTitle>May Our Chambers Be Full</SubTitle>
                    <Year>(2020)</Year>
                </DescriptionContainer>
            </AlbumContainer>
            <RateContainer>
                <Rate>Rate this album</Rate>
                <StarsContainer>
                    <Stars><span class="material-icons">star</span></Stars>
                    <Stars><span class="material-icons">star</span></Stars>
                    <Stars><span class="material-icons">star</span></Stars>
                    <Stars><span class="material-icons">star</span></Stars>
                    <Stars><span class="material-icons">star</span></Stars>
                </StarsContainer>
            </RateContainer>
        </Container>
    </div>;
};
