import styled from 'styled-components'
import { Container } from 'react-bootstrap'
import Text from '../../../styles/text/'

export const Background = styled.div`
    position: relative;
    width: 1920px;
    height: 560px;
    background: url("images/banner-cidadania-italiana.png") no-repeat;
`;

export const Content = styled.div`
    position: absolute;
    left: 390px;
    display: flex;
    align-items: center;
    height: 100%;
`;

Content.Flag = styled.div`
    position: absolute;
    top: 494px;
`;

Content.Title = styled(Text.Title)`
    color: ${({ theme }) => theme.colors.white};
    padding-bottom: 24px;
`;

Content.Text = styled(Text)`
    color: ${({ theme }) => theme.colors.white};
    font-family: "Open Sans" sans-serif;
`;

Content.Wrapper = styled.div`
    width: 793px;
    height: 221px;
    padding: 75px 0;
`;