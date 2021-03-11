import React from 'react'
import ButtonTemplate from './styles'

export default function Button(props) {
    return (
        <ButtonTemplate {...props} width={props.width} height={props.height} image={props.image}></ButtonTemplate>
    )
}