import styled from 'styled-components'

export const Item = styled.li`
    display: flex;

    div:nth-child(2) {
        padding-left: 24px;
        padding-bottom: 40px;
    }
`;

export const Circle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.lightyellow};
    width: 46px;
    height: 46px;
    padding: 25px;
    border-radius: 100%;

    span {
        margin: 0;
        color: ${({ theme }) => theme.colors.yellow};
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
`;