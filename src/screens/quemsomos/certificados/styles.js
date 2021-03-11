import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    width: 1140px;
    height: 515px;
    left: 390px;
    top: 2495px;
    text-align: center;
    margin: 0 auto;
    span {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

Wrapper.Content = styled.div`
    width: 1140px;
`;

export const SelosContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Image = styled.img``;