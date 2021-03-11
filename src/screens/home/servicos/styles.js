import styled from 'styled-components'
import Text from '../../../styles/text/'

export const Wrapper = styled.div`
    /* position: absolute; */
    width: 1760px;
    height: 926px;
`;

export const Title = styled(Text.Title)`
    position: absolute;
    width: 581px;
    height: 96px;
    left: 950px;
    top: 1413px;
`;

export const Paragraph = styled(Text)`
   position: absolute;
    width: 562px;
    height: 32px;
    left: 950px;
    top: 1525px;
`;

Wrapper.ImageLeft = styled.div``;

Wrapper.BoxServices = styled.div`
    position: absolute;
    width: 1332px;
    height: 672px;
    left: 591px;
    top: 1593px;
    background-color: ${({ theme }) => theme.colors.white};
`;

Wrapper.Cards = styled.div`
    display: flex;
    margin-top: 64px;
    margin-left: 58px;
`;

Wrapper.CardContent = styled.div`
    margin-right: 41px;
`;

export const ImageLeft = styled.div`
    position: absolute;
    width: 709px;
    height: 926px;
    left: 163px;
    top: 1413px;
    background: url("images/happy-couple-tourist-having-fun-taking-selfie-front-colosseum-rome.jpg");
    border-radius: 40px 40px 40px 200px;
`;