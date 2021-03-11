import styled from 'styled-components'
import { NavDropdown } from 'react-bootstrap'

export const DropdownTemplate = styled(NavDropdown)`
    border-radius: .75rem !important;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);
    background-color: ${({ theme }) => theme.colors.white};
    .dropdown-item {
        .active {
            &:active {
                background-color: red !important;
            }
        }
    }
`;