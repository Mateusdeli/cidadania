import styled from 'styled-components'
import Text from '../../../../styles/text/'

export const Wrapper = styled.div`
    width: 412px;
`;

export const TextName = styled(Text)`
    color: #325AE4; 
    font-family: ${({ theme}) => theme.fonts.primary};
    font-weight: 700;
`;