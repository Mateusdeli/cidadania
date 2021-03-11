import styled from 'styled-components'
import { FlexColumn } from '../../../styles/flex'

export const Wrapper = styled.div`
    position: absolute;
    top: 844px;
    left: 390px;
    width: 1140px;
    height: 425px;
`;

export const Content = styled.div`
    width: 100%;
`;

export const Image = styled.img`
    width: 483px;
    height: 360px;
    border-radius: 24px;
`;

Content.Buttons = styled(FlexColumn)`
    padding-top: 24px;
    button {
        margin: 0 12px;
    }
`;