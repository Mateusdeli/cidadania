import styled from 'styled-components'
import { Carousel } from 'react-bootstrap'

export const Wrapper = styled.div`
    position: absolute;
    top: 1209px;
    left: 390px;
`;

export const CarouselContent = styled(Carousel)`

    a {
        width: 50px;
        height: auto;
        opacity: 1;
        &:hover {
            opacity: 1;
        }
    }

    .carousel-control-prev-icon {
        position: absolute;
        top: 46%;
        right: 50%;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #F9F4DB;
        background-image: none;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: url("images/arrowBig.png") no-repeat;
            background-position: center;
            transform: rotate(180deg);
        }
    }

    .carousel-control-next-icon {
        position: absolute;
        top: 46%;
        left: 50%;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: #F9F4DB;
        background-image: none;
        &::after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: url("images/arrowBig.png") no-repeat;
            background-position: center;
        }
    }
`;

export const Image = styled.div`
    width: 1140px;
    height: 600px;
    background: ${({ image }) => `url("images/${image}") no-repeat`};
    background-position: center;
    background-size: cover;
    border-radius: 24px;
`;