import React from 'react'
import { Wrapper, Info } from './styles'
import Text from '../../../styles/text/'
import Button from '../../../styles/button/'
import Link from 'next/link'

export default function Agendamento() {
    return (
        <Wrapper>
            <Wrapper.Content>
                <Info>
                    <Text.Title weight="700" size="40px" line="56px">Agende já a sua consultoria!</Text.Title>
                    <Text className="pt-3" weight="400" size="16px" line="32px">3RICIAS CIDADANIA PORTUGUESA é uma empresa de assessoria completa para que você possa realizar seus objetivos em ser um cidadão europeu.</Text>
                    <Link href="#">
                        {<a><Button className="mt-4">Fazer agendamento</Button></a>}
                    </Link>
                </Info>
                <div>
                    <img width="559" height="560" src="/images/business-people-colleagues-shaking-hands-meting-planning-strategy-analysis.png" />
                </div>
            </Wrapper.Content>
        </Wrapper>
    )
}