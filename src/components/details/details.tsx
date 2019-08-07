import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import {Card, Container} from "@material-ui/core";
import './Details.css';

class Details extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            arrows: true,
            speed: 1600,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        return (
            <Container>
                <Slider {...settings}>
                    <div className={'Details-CardContainer'}>
                        <Card>
                            Contabilidade
                        </Card>
                    </div>
                    <div className={'Details-CardContainer'}>
                        <Card>
                            Escrita Fiscal
                        </Card>
                    </div>
                    <div className={'Details-CardContainer'}>
                        <Card>
                            Folha
                        </Card>
                    </div>
                    <div className={'Details-CardContainer'}>
                        <Card>
                            Regularização Empresa
                        </Card>
                    </div>
                    <div className={'Details-CardContainer'}>
                        <Card>
                            Pessoa Física
                        </Card>
                    </div>
                </Slider>
            </Container>
        );
    }
}

export default Details;