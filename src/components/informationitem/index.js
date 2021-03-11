import React from 'react'
import styled from 'styled-components'
import Text from '../../styles/text'

const Content = styled.div`
    width: 330px;
    height: 342px;
`;
const Title = styled(Text.Title)`  
    padding-top: 32px;
    padding-bottom: 16px;
    font-family: "Open Sans";
`;

export default function InformationItem({ image, title, text }) {
    return(
        <Content>
            <img className="img-fluid" src={`images/icons/${image}`}/>
            <Title weight="700" size="20px" line="28px">{title}</Title>
            <Text weight="400" size="14px" font="Open Sans" line="26px">{text}</Text>
        </Content>
    )
}