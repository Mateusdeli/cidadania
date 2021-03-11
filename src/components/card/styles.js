import styled from 'styled-components'

const CardTemplate = styled.div`
    width: 386px;
    height: 544px;
    background: ${({ image }) => `url("images/${image}")`} no-repeat;
    background-position: center;
    border-radius: 16px;
    filter: drop-shadow(0px 16px 32px rgba(0, 0, 0, 0.08));
`;

CardTemplate.Content = styled.div`
    display: flex;
    width: 387px;
    height: 258px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 145px 8px 8px 8px;
    position: absolute;
    bottom: 0;
`;

CardTemplate.Infomation = styled.div`
    margin: 75px 65px;
    text-align: left;
    width: 235px;
    height: 144px;
`;

CardTemplate.Arrow = styled.div`
    position: absolute;
    right: 0;
    bottom: 40px;
`;

export const Arrow = styled.a`
    background: url('images/arrowBig.png') no-repeat;
    padding-right: 45px;
    padding-bottom: 40px;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const Flag = styled.img`
    margin-bottom: ${({ marginzero }) => marginzero ? marginzero : 16}px;
`;
export const Title = styled.p`
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
`;

export const Text = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 0;
`;

export const Redirect = styled.a`
    cursor: pointer;
    color: inherit;
    &:hover {
        color: inherit;
    }
`;

export default CardTemplate