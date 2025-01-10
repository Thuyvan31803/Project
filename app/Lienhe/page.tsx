"use client";
import React, { useState } from 'react';
import { useEffect } from "react";
import './lienhe.css';
import Image from 'next/image'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name:'', email:'', message:'' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClick, setisClick]= useState(false);
    const toggleNavbar = () => {
    setisClick(!isClick)
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/sendmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name:'', email:'', message:'' });
      } else {
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {/*Thanh menu*/}
      <nav className=''>
          <div className='menu'>
            <div className='menu1'>
              <div className='menu-bar'>
                <div className='menu-bar1'>
                  <a href='/customer' className=''>Trang chủ</a>
                  <a href='' className=''>Dịch vụ</a>
                  <a href='' className=''>Sự kiện</a>
                  <a href='/Lienhe' className=''>Liên hệ</a>
                </div>
              </div>
              <div className='bar'>
                <button className='' onClick={toggleNavbar}>
                {isClick ? (
                    <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor" >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                ) : (
                    <svg  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"/>
                    </svg>
                )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className='menu2'>
              <div className='menu-bar2'>
                <a href='/customer' className=''>Trang chủ</a>
                <a href='' className=''>Dịch vụ</a>
                <a href='' className=''>Sự kiện</a>
                <a href='/Lienhe' className=''>Liên hệ</a>
              </div>
            </div>
          )}
      </nav>
      {/*Slideshow*/}
      <div id="carouselExampleCaptions" className="relative" data-twe-carousel-init data-twe-ride="carousel">
        <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none 
        justify-center p-0" data-twe-carousel-indicators>
          <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="0" 
          data-twe-carousel-active className="mx-[3px] box-content h-[3px] w-[30px] 
          flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent
          bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity 
          duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none" aria-current="true"
         aria-label="Slide 1"></button>
          <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] 
          border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 
          transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"></button>
          <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="2" 
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] 
          border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 
          transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"></button>
          <button type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide-to="3" 
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] 
          border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 
          transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 4"></button>
        </div>

        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          <div className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] 
          ease-in-out motion-reduce:transition-none" data-twe-carousel-active data-twe-carousel-item 
          style={{backfaceVisibility: 'hidden'}}>
            <Image src='/images/home1.jpg' className="block" width={1300} height={100} alt="..." />
          </div>

          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] 
          ease-in-out motion-reduce:transition-none" data-twe-carousel-item style={{backfaceVisibility: 'hidden'}}>
            <Image src='/images/home2.jpg' className="block" width={1300} height={100} alt="..." />
          </div>

          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] 
          ease-in-out motion-reduce:transition-none" data-twe-carousel-item style={{backfaceVisibility: 'hidden'}}>
            <Image src='/images/home3.jpg' className="block" width={1300} height={100} alt="..." />
          </div>

          <div className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] 
          ease-in-out motion-reduce:transition-none" data-twe-carousel-item style={{backfaceVisibility: 'hidden'}}>
            <Image src='/images/home4.jpg' className="block" width={1300} height={100} alt="..." />
          </div>
        </div>
        <button className="absolute bottom-0 left-0 top-0 z-[1] hidden w-[5%] items-center justify-center 
        border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-10 
        ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 
        hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none 
        motion-reduce:transition-none" type="button" data-twe-target="#carouselExampleCaptions" data-twe-slide="prev">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap 
          !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <button className="absolute bottom-0 right-0 top-0 z-[1] hidden w-[5%] items-center 
        justify-center border-0 bg-none p-0 text-center text-white opacity-50 
        transition-opacity duration-10 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]
        hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white 
        focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none" type="button"
        data-twe-target="#carouselExampleCaptions" data-twe-slide="next">
          <span className="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap 
          !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
      </div>
      {/*Liên hệ*/}
      <div className="header" >
      <h1>Liên hệ với chúng tôi</h1>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor="name">Họ & tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor="message">Lời nhắn:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Bạn cần hỗ trợ gì?'
              required
            ></textarea>
          </div>
          <div>
            <button type="submit">Gửi</button>
          </div>
        </form>
      ) : (
        <p>Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi sớm nhất có thể!</p>
      )}
      </div>
      {/*Footer*/}
      <div className="footer">
        <div className="footer-container">
            <div className="footer-column">
                <h3>DỊCH VỤ</h3>
                <ul>
                    <li><a href="#">Wedding Planning</a></li>
                    <li><a href="#">Destination Wedding</a></li>
                    <li><a href="#">Styling & Decoration</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>SỰ KIỆN</h3>
                <ul>
                  <li><a href="#">Sinh Nhật</a></li>
                  <li><a href="#">Đám Cưới</a></li>
                  <li><a href="#">Sự Kiện Khai Mạc</a></li>
                  <li><a href="#">Tiệc Theo Chủ Đề</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>LIÊN HỆ</h3>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
