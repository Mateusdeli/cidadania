import styled from 'styled-components'
import Button from '../../../styles/button/'
import {
    Carousel,
    CarouselItem
} from 'react-bootstrap'

export const CarouselWrapper = styled(Carousel)`

    .carousel-indicators {
        margin-bottom: 64px;

        .active {
            background-color: ${({ theme }) => theme.colors.primary};
        }

        li {
            margin: 0 9px;
            height: 12px;
            width: 12px;
            background-color: rgba(219, 183, 29, 0.16);
            border-radius: 100%;
        }
    }
`;

CarouselWrapper.Item = styled(CarouselItem)`
    width: 1920px;
    height: 700px;
`;

export const InfoContent = styled.div`
    position: absolute;
    left: 390px;
    top: 231px;
    width: 600px;
    height: 359px;
    a {
        text-decoration: none;
        &:hover{
            color: ${({ theme }) => theme.colors.white};
            text-decoration: none;
        }
    }
`;

// InfoContent.LinkTop = styled(Link)`

// `;

InfoContent.Button = styled.button`
    background: rgba(219, 183, 29, 0.08);
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 51px;
    padding: 7px 23px;
`;

InfoContent.Image = styled.img`
    position: absolute;
    left: 1175px;
    top: 193px;
`;

export const Background = styled.div`
    width: 100%;
    height: 700px;
    background: ${({ img }) => `url("images/${img}") no-repeat`};
`;

export const Elipse = styled.div`
    position: absolute;
    width: 48px;
    height: 48px;
    left: 936px;
    top: 676px;
    background-color: #ffffff;
    border-radius: 100%;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.06);
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background: url("images/arrowdown.png") no-repeat;
        background-position: center;
    }
`;

export const ButtonItaly = styled.button`
    position: absolute;
    width: 109px;
    height: 32px;
    left: 390px;
    top: 231px;
    z-index: 9999;
    background: black;
    /* Yellow */

    border: 1px solid #DBB71D;
    box-sizing: border-box;
    border-radius: 51px;
`;
