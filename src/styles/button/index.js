import styled from 'styled-components';

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 11px 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    border-radius: 112px;
    border: none;
    outline: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
`;

Button.Link = styled.a`
    background-color: ${({ theme }) => theme.colors.primary};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    padding: 11px 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    border-radius: 112px;
    border: none;
    outline: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`;

Button.Outline = styled.a`
    background-color: ${({ theme }) => `rgba(${theme.colors.primary}, .8)`};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 11px 32px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 18px;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border-radius: 112px;
    border: none;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`;

export default Button