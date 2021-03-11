import React from 'react'
import { Item, Circle } from './styles'
import Text from '../../../../styles/text/'

export default function ItemServico({ index, title, text }) {
    return (
        <Item count={index}>
            <Circle>
                <span>{index}</span>
            </Circle>
            <div>
                <Text.Title weight="700" size="20px" line="28px">{title}</Text.Title>
                <Text weight="400" size="14px" line="26px">{text}</Text>
            </div>
        </Item>
    )
}