import React from 'react'
import Slider from 'react-slick'

function Swiper1() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  var settings2 = {
    dots: true,
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
    
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
   <>
    <section className="photosSection m80">
      <h2>Photos Section</h2>
      <div className="allPhoto container">
        <div className="responsive">
        <Slider {...settings}>
        <div className="item">
            <img src="/images/instructorScreen/photo1.webp" alt="photosSection" />
          </div>
          <div className="item">
            <img src="/images/instructorScreen/photo2.webp" alt="photosSection" />
          </div>
          <div className="item">
            <img src="/images/instructorScreen/photo3.webp" alt="photosSection" />
          </div>
          <div className="item">
            <img src="/images/instructorScreen/photo2.webp" alt="photosSection" />
          </div>
          <div className="item">
            <img src="/images/instructorScreen/photo1.webp" alt="photosSection" />
          </div>
        </Slider>
        
        </div>
      </div>
    </section>
    <section className="testimonials container m80">
      <h2>Photos Section</h2>
      <div className="testimonialsSlide">
      <Slider {...settings2}>
      <div className="item">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="info_user">
              <img src="/images/instructorScreen/user1.webp" alt="user" />
              <h3>Maria James</h3>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
            <div className="info_user">
              <img src="/images/instructorScreen/user1.webp" alt="user" />
              <h3>Maria James</h3>
            </div>
          </div>
        </div>
      </Slider>
        
      </div>
    </section>
   </>
  )
}

export default Swiper1