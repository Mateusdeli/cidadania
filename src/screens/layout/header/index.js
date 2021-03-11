import React  from 'react';
import NavigationBar from './nav/';
import { HeaderBase } from './styles'

export default function Header() {
    return(
        <HeaderBase>
            <NavigationBar />
        </HeaderBase>
    )
}