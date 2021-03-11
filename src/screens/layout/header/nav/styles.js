import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    width: 1920px;
`;

export const Content = styled.div`
    position: absolute;
    left: 435px;

    .dropdown-toggle::after {
        display: none;
        border: none;
    }

    .navbar-nav {
        display: flex;
        align-items: center;
        .nav-link {
            color: white !important;
            padding: 0 24px;      
            height: 60px;
            &:hover,
            &:focus {
                &::after {
                    animation: BottomBarAnimation .5s;
                    content: "";
                    display: block;
                    background-color: ${({ theme }) => theme.colors.primary};
                    height: 3px;
                    margin-top: 10px;
                    width: 100%;
                } 
            }
            & > a {
                color: white;
                &:hover {
                    color: white;
                }
            }
        }

        @keyframes BottomBarAnimation {
            0% {
                width: 0%
            }
            100% {
                width: 100%
            }
        }
    }
`;

export const Nav = styled.nav``;

export const Logo = styled.img`
    height: 120px; 
    width: 158px;
    margin: 0 56px;
`;

Nav.List = styled.ul`
    list-style: none;
`;
Nav.Item = styled.li`
    position: absolute;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    left: ${({ left }) => left}px;
    top: ${({ top }) => top}px;

    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
    }
    
`;
