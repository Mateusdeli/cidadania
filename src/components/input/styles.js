import styled from 'styled-components'

export const InputField = styled.input`
    border: ${props => props.$validation ? '1px solid #DB140C' : `1px solid ${props.theme.colors.light}`};
    background-color: ${props => props.$validation ? 'rgba(232, 19, 12, .15)' : `initial`};
    border-radius: 6px;
    color: ${props => props.$validation ? '#DB140C' : `initial`};
    width: ${({ width }) => width}px;
    padding-left: 10px;
    height: ${({ height }) => height ? height : 48}px;
    outline: transparent;
    &::placeholder {
        color: ${props => props.$validation ? '#DB140C' : `initial`};
    }
`;

export const InputCheckboxField = styled.input`
    all: unset;
    border: 1px solid ${({ theme }) => theme.colors.light};
    display: inline-block;
    color: ${({ theme }) => theme.colors.white};
    width: ${({ width }) => width ? width : 15}px;
    height: ${({ height }) => height ? height : 15}px;
    &:checked{
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        width: ${({ width }) => width ? width : 15}px;
        height: ${({ height }) => height ? height : 15}px;
        &::after {
            content: '';
            background: url("images/checkmark.png") no-repeat;
            background-position: center;
            width: 100%;
            height: 100%;
            display: block;
        }
    }
    
`;