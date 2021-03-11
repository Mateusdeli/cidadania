import styled from 'styled-components'
import Button from '../../../styles/button/'

export const Wrapper = styled.div`
    position: relative;
    width: 1920px;
    height: auto;
`;

export const BackgroundBar = styled.div`
    background-color: ${({ color, theme }) => color ? theme.colors.primary : 'initial'};
    * {
        color: ${({ color, theme }) => color ? theme.colors.white : 'inhert'};
        p {
            color: ${({ color, theme }) => color ? theme.colors.white : `rgba(23,23,23, .5);`};
        }
    }
    height: 562px;
`;

export const Content = styled.div`
    position: relative;
    left: 390px;
    width: 1138px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box {
        background-color: #EACA40;
        border-radius: 24px;
        padding: 35px;
        width: 367px;
        height: 326px;
        filter: drop-shadow(0 4px 0 0 4px black);
    }
`;

export const ButtonProposta = styled(Button)`
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
`;