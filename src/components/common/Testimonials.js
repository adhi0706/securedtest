import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../../components/common/SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = ({ reviews }) => {
  const [active, setActiveSlide] = useState(2);
  let sliderRef = useRef(null);

  function moveLeft() {
    if (active === 0) return;
    setActiveSlide((prev) => prev - 1);
  }

  function moveRight() {
    if (active === reviews.length - 1) return;
    setActiveSlide((prev) => prev + 1);
  }

  const Testimonial = ({ id, reviewer, designation, reviewText }) => {
    return (
      <div className={`testimonial-card ${active === id && "selected-card"}`}>
        <div className="testimonial-card-text">{reviewText}</div>
        <div
          className={`testimonial-card-content ${
            active === id && "selected-card-content"
          }`}>
          <div className="">
            <div
              className={`testimonial-card-reviwer ${active === id && "pb-2"}`}>
              {reviewer}
            </div>
            <div className="testimonial-card-designation">{designation}</div>
          </div>
          <div className="testimonial-card-quote">“</div>
        </div>
      </div>
    );
  };

  const slickSettings = {
    centerMode: true,
    arrows: false,
    slidesToShow: 3,
    infinite: true,
    cssEase: "linear",
    slidesToScroll: 1,
    speed: 500,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerMode: true,
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(active);
    }
  }, [active]);

  return (
    <div className="testimonials">
      <SectionTitle
        name="What clients say"
        title="Client Experiences"
        description="Explore a wide range of topics, including innovative business  strategies, technological advancements, and best practices."
      />
      <div className="testimonial-cards">
        <Slider ref={sliderRef} className="w-full" {...slickSettings}>
          {reviews.map((review) => {
            return (
              <Testimonial
                id={review.id}
                reviewText={review.testimonial}
                reviewer={review.name}
                designation={review.designation}
              />
            );
          })}
        </Slider>
      </div>
      <div className="testimonial-arrows">
        <div
          onClick={moveLeft}
          className={`testimonial-arrow ${
            active === 0 && "testimonial-arrow-first"
          } hover:cursor-pointer`}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div
          onClick={moveRight}
          className={`testimonial-arrow ${
            active === reviews.length - 1 && "testimonial-arrow-last"
          } hover:cursor-pointer`}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
