import styled from 'styled-components'

const Flex = styled.div`
    display: flex;
    align-items: ${({ align }) => align ? align : 'initial'};
    justify-content: ${({ justify }) => justify ? justify : 'initial'};
`;

export const FlexRow = styled(Flex)`
    flex-direction: column;
`;

export const FlexColumn = styled(Flex)`
    flex-direction: row;
`;