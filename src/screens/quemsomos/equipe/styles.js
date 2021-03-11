import styled from 'styled-components'
import Text from '../../../styles/text/'

export const Wrapper = styled.div`
    position: absolute;
    height: 515px;
    left: 390px;
    width: 1140px;
    top: 1905px;
`;

Wrapper.Content = styled.div`
    display: flex;
    align-items: center;
    width: 1140px;
`;

Wrapper.Cards = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 64px;
    margin-bottom: 111px;
`;

export const Title = styled(Text.Title)`
    width: 50%;
`;

export const TextInfo = styled(Text)`
    margin-bottom: 0;
    font-family: "Open Sans" sans-serif;
`;

