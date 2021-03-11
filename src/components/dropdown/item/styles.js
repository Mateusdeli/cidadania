import styled from 'styled-components'
import { NavDropdown } from 'react-bootstrap'

export const Item = styled(NavDropdown.Item)`
    font-weight: 400;
    font-family: 'Open Sans';
    font-size: 13px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.black};
    margin-bottom: 10px;

    &:focus {
        background-color: inherit;
        color: ${({ theme }) => theme.colors.black};
    }

    &.active{
        background-color: ${({ theme }) => theme.colors.lightgrey};
        color: ${({ theme }) => theme.colors.black};
    }

    &:nth-child(1) {
        margin-top: 10px;
    }
`;