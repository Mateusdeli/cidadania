import styled from 'styled-components'

const Text = styled.p`
    color: ${({ theme, color }) => color ? color : theme.colors.black};
    font-weight: ${props => props.weight};
    font-size: ${({ size }) => size ? size : 16}px;
    line-height: ${props => props.line};
    font-family: ${({ font }) => font} ;
`;

Text.Title = styled.h1`
    color: ${({ color, theme }) => color ? color : theme.colors.black};
    font-weight: ${props => props.weight};
    line-height: ${props => props.line};
    font-style: ${props => props.style};
    font-size: ${props => props.size};
`;

Text.Label = styled.label`
    font-family: "Assistant";
    font-weight: ${props => props.weight};
    line-height: ${props => props.line};
    font-style: ${props => props.style};
    font-size: ${props => props.size};
`;

Text.Span = styled.span`
    color: ${({ theme, color }) => color ? color : theme.colors.black};
    font-weight: ${props => props.weight};
    font-size: ${({ size }) => size ? size : 16}px;
    line-height: ${props => props.line};
    font-family: ${({ font }) => font};
`;

export default Text
