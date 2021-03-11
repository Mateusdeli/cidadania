import styled from 'styled-components'

export const Wrapper = styled.div`
    position: absolute;
    width: 1250px;
    height: 800px;
    left: 390px;
    top: 2997px;
    text-align: center;
    margin: 0 auto;
`;

Wrapper.Content = styled.div`
    width: 100%;
`;

Wrapper.Cards = styled(Wrapper.Content)`
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
`;
