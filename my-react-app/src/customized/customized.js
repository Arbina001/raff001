import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Container,
  Section,
  CostomizedSlider,
  CustomizeSlider,
  SliderWrapper,
  CostomizedSliderName,
  Headingwrapper,
  Headingtitle,
  CostomizedSliderImage,
  SliderNameWrapper,
} from './customized.styled';
import { Costomdata } from './customizeddata';
const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const handleBeforeChange = (current, next) => {
    setCenterIndex(next);
  };
  const Imagefunction = (currentIndex, slideIndex) => {
    return currentIndex === slideIndex ? 1 : 0.2;
  };
  const settings = {
    dots: false,
    arrows: true,
    centerMode: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: handleBeforeChange,
  };
  useEffect(() => {
    setCenterIndex(settings.initialSlide);
  }, [settings.initialSlide]);
  return (
    <div>
      <Container>
        <Section>
          <Headingwrapper>
            <Headingtitle>„ customized “</Headingtitle>
          </Headingwrapper>
          <Slider {...settings}>
            {Costomdata.map((c, index) => (
              <CustomizeSlider key={c.Charectorname}>
                <SliderWrapper>
                  <CostomizedSlider isActive={index === centerIndex}>
                    <CostomizedSliderImage
                      style={{
                        opacity: Imagefunction(centerIndex, index),
                      }}
                    >
                      <img src={c.Customimage} alt="" />
                    </CostomizedSliderImage>
                    {index === centerIndex && (
                      <SliderNameWrapper>
                        <CostomizedSliderName>
                          {c.Charectorname}
                        </CostomizedSliderName>
                      </SliderNameWrapper>
                    )}
                  </CostomizedSlider>
                </SliderWrapper>
              </CustomizeSlider>
            ))}
          </Slider>
        </Section>
      </Container>
    </div>
  );
};
export default Customized;
