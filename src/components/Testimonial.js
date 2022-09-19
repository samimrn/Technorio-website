import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

const data = [
    {
        id: 1,
        username: 'Anna',
        testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: "images/test1.jpg",
        profession: 'Web Designer'
    },
    {
        id: 2,
        username: 'banna',
        testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: "images/test2.jpg",
        profession: 'Web Developer'
    },
    {
        id: 3,
        username: 'Caan',
        testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: "images/test3.jpg",
        profession: 'Full Stack'
    },
    {
        id: 4,
        username: 'Daan',
        testimonial:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        image: "images/test4.jpg",
        profession: 'Data Analyst'
    }

];

function testimonial() {
    return (
        <>
    <div className='testimonials text-center'>
        <h2 className='display-4 my-5'>Testimonial</h2>
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <div className='swiper-container'>
            <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                    {data.map(user =>(
                        <SwiperSlide key={user.id} className="testimonial-box">
                                    
                                   <div className='user-image'>
                                      <img src={user.image} className='user-photo'alt='userimage'/>
                                  </div>
                                  <p className='user-testimonial'>
                                       "{user.testimonial}"
                                   </p>
                                  <h3 className='user-name'>{user.username}<br/>
                                  <span>{user.profession}</span></h3>
                            </SwiperSlide>
                        ))}
                </div>
            </div>
        </div>  

      </Swiper>

      </div>
      </>
  );
}

export default testimonial