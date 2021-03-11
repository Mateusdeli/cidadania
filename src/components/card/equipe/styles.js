import styled from 'styled-components'

export const Wrapper = styled.div`
    position: relative;
    background: ${(props) => `url("images/${props.image}") no-repeat`};
    background-position: center;
    background-size: cover;
    width: 537.19px;
    height: 340px;
    border-radius: 16px;
`;

Wrapper.Content = styled.div`
    position: absolute;
    bottom: 36px;
    left: 36px;
    * {
        color: ${({ theme }) => theme.colors.white};
    }
`;

Wrapper.Icons = styled.div`
    display: flex;
`;

export const Icon = styled.img`
    padding-right: 19px;
    padding-bottom: 19px;
`;