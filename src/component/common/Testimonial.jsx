import Slider from "react-slick";
import slide_1 from "./../../assets/testimonial/testimonial-1.jpg"
function Testimonial() {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="mb-16">
      <h4 className="text-center text-4xl text-primary my-24">Testimonial</h4>
      <Slider {...settings}>
<div >    
  <div className="flex justify-between  bg-primary rounder-sm p-10 rounded-md
  ">
    <div className="mx-10 w-52">
    <img src={slide_1} className="w-28 h-28 rounded-full object-fill"/>
    </div>
      <div className="">
    <h4 className="text-white font-bold my-2">
    ADAM KHAN
      </h4>
      <span className="text-slate-300 mb-4">FINANCE BUSINESS PARTNER -FLETCHERS GROUP</span>
      <p className="my-2 text-white">
      Working with Iman has been a truly transformative experience for me, her personalities approach to coaching and ability to understand the requirements quickly and efficiently has empowered me and helped me become more confident in overcoming my challenges and achieving my goals. 
      </p>
      <p className="text-white">
      I would recommend Iman to anyone who is not just looking for an expert in the field but a coach who puts her clients first and provides a judgement free space and unwavering support to unlock their potentials. 
      </p>

      </div>

  </div>
     
  

    
   
        
      </div>
      <div>
      </div>
  
     
    </Slider>
    </div>
  )
}

export default Testimonial