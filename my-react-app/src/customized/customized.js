import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  MainSection,
  Container,
  CostomizedSlider,
  CustomizeSlider,
  SliderWrapper,
  CostomizedSliderName,
  Headingwrapper,
  Headingtitle,
  CostomizedSliderImage,
  CostomizedSliderNameWrapper,
} from './customized.styled';
import { CustomizeData } from './customizeddata';
const Customized = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const handleBeforeChange = (current, next) => {
    setCenterIndex(next);
  };
  const ImageOpacity = (currentIndex, slideIndex) => {
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
      <MainSection>
        <Container>
          <Headingwrapper>
            <Headingtitle>„ customized “</Headingtitle>
          </Headingwrapper>
          <Slider {...settings}>
            {CustomizeData.map((c, index) => (
              <CustomizeSlider key={c.Cname}>
                <SliderWrapper>
                  <CostomizedSlider isActive={index === centerIndex}>
                    <CostomizedSliderImage
                      style={{
                        opacity: ImageOpacity(centerIndex, index),
                      }}
                    >
                      <img src={c.Cimg} alt="" />
                    </CostomizedSliderImage>
                    {index === centerIndex && (
                      <CostomizedSliderNameWrapper>
                        <CostomizedSliderName>{c.Cname}</CostomizedSliderName>
                      </CostomizedSliderNameWrapper>
                    )}
                  </CostomizedSlider>
                </SliderWrapper>
              </CustomizeSlider>
            ))}
          </Slider>
        </Container>
      </MainSection>
    </div>
  );
};
export default Customized;
