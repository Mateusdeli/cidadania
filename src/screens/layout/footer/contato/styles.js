import styled from 'styled-components'
import { Container, Row, Col } from 'react-bootstrap'
import { FlexRow, FlexColumn } from '../../../../styles/flex/'

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 100px;
    padding-bottom: 64px;
`;

export const List = styled.ul`
    list-style: none;
`;

Wrapper.Row = styled(Row)`
    height: 410px;
`;

Wrapper.Column = styled(Col)`
    width: 80%;
`;

List.Item = styled.li`
    a {
        color: ${({ theme }) => theme.colors.black};
        text-decoration: none;
    }
`;

export const FlexRowContent = styled(FlexRow)`
    span {
        margin-bottom: 4px;
    }
`;

export const FlexColumnContent = styled(FlexColumn)`
    padding-top: 18px;
    span {
        &:nth-child(1) {
            padding-top: 3px;
            padding-right: 28px;
        }
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