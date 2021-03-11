import { Wrapper, Image, CarouselContent } from './styles'

export default function Carousel() {
    return (
        <Wrapper>
            <CarouselContent fade={true} indicators={false}>
                <CarouselContent.Item>
                    <Image image="carousel-quemsomo2.jpg" />
                </CarouselContent.Item>
                <CarouselContent.Item>
                    <Image image="carousel-quemsomo3.jpg" />
                </CarouselContent.Item>
            </CarouselContent>
        </Wrapper>
    )
}