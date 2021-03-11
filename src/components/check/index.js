import React from 'react'
import Text from '../../styles/text/'
import styled from 'styled-components'

const Item = styled.li`
    display: flex;
    /* align-items: center; */
    padding-top: 16px;
    
    p {
        padding-left: 27px;
        margin-bottom: 0;
    }
    
    /* &::before {
        width: 40px;
        height: 40px;
        content: '';
        display: inline-block;
        background: url('images/checkIcon.png') no-repeat;
        background-position: center;
    } */
`;

const Image = styled.img`
    padding-top: 3px;
`

export const CheckItem = ({ text, weight }) => {
    return (<Item>
                <div>
                    <Image src="images/checkIcon.png" />
                </div>
                <Text weight={weight ? weight : '600'} line="32px" size="16px">{text}</Text>            
            </Item>)
}