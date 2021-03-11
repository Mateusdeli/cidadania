import styled from 'styled-components'
import Text from '../../../styles/text/'

export const Wrapper = styled.div`
    position: relative;
    left: 390px;
    width: 1183px;
    height: 652px;
`;

export const Title = styled(Text.Title)`
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const IconContent = styled.div`
    padding-right: 20px;
`;

export const Content = styled.div`
    margin-top: 70px;
`;