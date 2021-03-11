import styled from 'styled-components'
import Button from '../../../styles/button/'

export const Wrapper = styled.div`
    position: absolute;
    width: 1920px;
    height: 460px;
    top: 3877px;
`;

Wrapper.Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const InfoContent = styled.div`
    text-align: center;
    * {
        color: ${({ theme }) => theme.colors.white};
    }
    div {
        padding-top: 40px;
        width: 100%;
        margin: 0 auto;
    }
`;

InfoContent.Button = styled(Button.Link)`
    width: 128px;
`;

export const Background = styled.div`
    background: ${({ image }) => `url("images/${image}")`} no-repeat;
    height: 100%;
    width: 100%;
`;
