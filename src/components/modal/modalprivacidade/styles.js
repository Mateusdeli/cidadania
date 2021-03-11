import styled from 'styled-components'

export const List = styled.ul`
    list-style: none;
    padding-left: ${({ paddingLeft}) => paddingLeft ? '0' : '40px'};
`;