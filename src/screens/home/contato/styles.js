import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 1920px;
    height: 749px;
`;

export const Background = styled.div`
    position: absolute;
    left: 0px;
    top: 2620px;
    background: url("images/view-lisbon-cityscape-saint-jorge-castle.png");
    &::after {
        content: '';
        display: block;
        width: 1920px;
        height: 749px;
        background: url("images/backgroundyellow.png");
    }
`;

export const Map = styled.div``;

export const List = styled.ul`
    list-style: none;
    padding-left: 0;
`;

List.Divisor = styled.hr`
    width: 100%;
    padding: 0;
`;

List.Item = styled.li`
    padding-left: 35px;
    padding-top: 14px;
    padding-bottom: 14px;
    &:nth-child(1) {
        padding-top: 58px;
    }
`;

export const Icon = styled.div`
    display: flex;
    align-items: flex-start;
    &::before {
        padding-top: ${({ paddingTop}) => paddingTop ? paddingTop : 4}px;
        padding-right: ${({ paddingRight}) => paddingRight ? paddingRight : 18}px;
        content: ${({ image }) => `url("images/${image}")`};
        display: block;
    }
`;