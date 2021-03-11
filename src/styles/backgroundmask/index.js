import styled from 'styled-components'

const BackgroundMask = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${({ rgba }) => rgba ? rgba : `rgba(35,35,35,.85)`};
    border-radius: ${({ border }) => border ? border : 0};
`;

BackgroundMask.Image = styled.div`
    width: 100%;
    height: 100%;
    background: ${({ image }) => image ? `url('images/${image}');` : ''} no-repeat;
    border-radius: ${({ border }) => border ? border : 0};
`;


export default BackgroundMask