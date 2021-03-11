import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    width: ${({ theme }) => theme.root.home.width}px;
    height: ${({ theme }) => theme.root.home.height}px;
`;


export default Wrapper