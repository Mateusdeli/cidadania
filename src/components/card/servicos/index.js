import Link from 'next/link'
import styled from 'styled-components'

const CardTemplate = styled.div`
    width: 526px;
    height: 823px;
    filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.08));
`;

CardTemplate.Content = styled.div`
    display: flex;
    width: 526px;
    height: 527px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 145px 8px 8px 8px;
    position: absolute;
    bottom: 0;
`;

CardTemplate.Infomation = styled.div`
    margin: 50px 65px;
    text-align: left;
    width: 418px;
    height: auto;
`;

const Test = styled.div`
    width: 524px;
    height: 636px;
    background: ${({ image }) => `url("images/${image}")`} no-repeat;
    background-position: center;
    border-radius: 16px;
`

const Title = styled.p`
    font-weight: 700;
    font-size: 22px;
    line-height: 32px;
`;

export const CardServico = (props) => {
    return (
        <CardTemplate>
            <Test image={props.image} />
            <CardTemplate.Content>
                    <CardTemplate.Infomation>
                        <Title>{props.title}</Title>
                        <div>
                            {props.children}
                        </div>
                    </CardTemplate.Infomation>
                </CardTemplate.Content>
        </CardTemplate>
    )
}