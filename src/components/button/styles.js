import styled from 'styled-components'

const ButtonTemplate = styled.button`
    border: none;
    outline: 0;
    background-color: rgba(219, 183, 29, 0.16);
    width: ${({ width }) => width ? width : 41}px;
    border-radius: 100%;
    height: ${({ height }) => height ? height : 41}px;
    cursor: pointer;
    &::after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: ${({ image }) => `url(images/${image})`};
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export default ButtonTemplate