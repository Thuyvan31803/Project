"use client";
import React, {useState} from 'react';
import { useEffect } from "react";
import './style.css';
import Image from 'next/image'

const Header = () => {
  const [isClick, setisClick]= useState(false);
    const toggleNavbar = () => {
    setisClick(!isClick)
    }

  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);
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
      {/*Các sự kiện nổi bật */}
      <section className="vendor" id="vendor">
        <div className="heading">
          <h5>Cùng Nhau Khám Phá</h5>
          <span className="line gold"></span>
          <h1 className='heading1'>MỘT SỐ SỰ KIỆN
            <span className='text-red-500'> NỔI BẬT</span>
          </h1>
        </div>
        <div className="box-container">
          <div className="box">
            <Image src="/images/sinhnhat.jpg" width={500} height={200} alt="..."/>
            <div className="info">
                <h3>SINH NHẬT</h3>
                <a href="#" className="btn">Xem chi tiết</a>
            </div>
          </div>
          <div className="box">
            <Image src="/images/damcuoi.jpg" width={500} height={200} alt="..."/>
            <div className="info">
                <h3>ĐÁM CƯỚI</h3>
                <a href="#" className="btn">Xem chi tiết</a>
            </div>
          </div>
          <div className="box">
            <Image src="/images/themedparty.jpg" width={500} height={200} alt="..."/>
            <div className="info">
                <h3>THEMED PARTY</h3>
                <a href="#" className="btn">Xem chi tiết</a>
            </div>
          </div>
          <div className="box">
            <Image src="/images/opening.jpg" width={500} height={200} alt="..."/>
            <div className="info">
                <h3>OPENING EVENT</h3>
                <a href="#" className="btn">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </section>
      {/*Một số đám cưới*/}
      <section className="clients" id="clients">
        <div className="heading">
          <h1>ĐÁM CƯỚI</h1>
          <span className="line1 gold1"></span>
        </div>
        <div className="row">
          <div className="box-container">
            <div className="box">
              <Image src="/images/damcuoi1.jpg" width={500} height={200} alt="..."/>
              <div className="info">
                <h3 className='trai1'>01. Vy & Roy</h3>
                <p className='trai2'>Đám cưới theo chủ đề màu đỏ xa hoa. Là 1 trong những đám cưới lớn 
                nhất tại miền Tây Việt Nam trong năm 2024. Nhà máy sản xuất rộng rãi của gia đình cô dâu 
                đã được biến đổi hoàn toàn thành một sảnh cưới tráng lệ phủ đầy màu đỏ quyến rũ - màu sắc 
                phổ biến của tình yêu.</p>
              </div>
            </div>
            <div className="box">
              <Image src="/images/damcuoi2.jpg" width={500} height={200} alt="..."/>
              <div className="info">
                <h3 className='trai1'>02. Kiều Anh & Duy Tùng</h3>
                <p className='trai2'>Một đám cưới mang đầy màu sắc, là một bức tranh rực rỡ bước ra từ giấc 
                mơ. Sau một thời gian dài nhìn thấy nhau trên màn ảnh, cuối cùng Kiều Anh & Tùng đã đạt 
                được mục tiêu của mình là một đám cưới như mơ ước - một đám cưới tuyệt đẹp tại Nha Trang.</p>
              </div>
            </div>
          </div>

          <div className="box-container">
            <div className="box">                 
              <div className="info">
                <h3 className='phai1'>03. Long & Anna</h3>
                <p className='phai2'>Concept mộng mơ được làm nổi bật bởi những bông hoa rực rỡ và ánh nến 
                vui tươi đúng như những gì cặp đôi đã hình dung. Bối cảnh ngọt ngào này không chỉ gây 
                ấn tượng với khách mời bằng vẻ đẹp tổng thể quyến rũ mà còn là sự chú ý đến từng chi tiết.</p>
              </div>  
              <Image className='img1' src="/images/damcuoi3.jpg" width={500} height={200} alt="..."/>
            </div>
            <div className="box">                 
              <div className="info">
                <h3 className='phai1'>04. Minh & Linh</h3>
                <p className='phai2'>Một đám cưới xa hoa dưới ánh trăng xanh. Người ta nói rằng chỉ có thể 
                nhìn thấy Trăng xanh một lần trong một trăm năm, và câu chuyện tình yêu của Minh & Linh thực 
                sự giống như được vũ trụ viết nên.</p>
              </div>  
              <Image className="img1" src="/images/damcuoi4.jpg" width={500} height={200} alt="..."/>
            </div>
          </div>
        </div>
      </section>
      {/*Một số dịch vụ*/}
      <section className="blog" id="blog">
        <div className="heading">
          <h1>DỊCH VỤ</h1>
          <span className="line1 gold1"></span>
        </div>
        <div className="box-container">
          <div className="box">
            <Image className="img1" src="/images/weddingplanning.jpg" width={500} height={200} alt="..."/>
            <div className="info">
              <h3>Wedding Planning</h3>
              <p>Một đám cưới đáng nhớ không chỉ bởi những trang trí cầu kỳ, đó còn là không khí của buổi tiệc, và những cảm xúc mà cô dâu chú rể và các khách mời có được tại đám cưới. Chính vì vậy, một kế hoạch cụ thể và chi tiết là điều vô cùng quan trọng.</p>
              <a href="#" className="btn1">Xem chi tiết</a>
            </div>
          </div>
          <div className="box">
            <Image className="img1" src="/images/destinationwedding.jpg" width={500} height={200} alt="..."/>
            <div className="info">
              <h3>Destination Wedding</h3>
              <p>Mỹ, Pháp, Úc, Canada, Anh, Ấn Độ, Hồng Kong, Singapore,… Mỗi khách hàng đều có những nền tảng về văn hóa, nghề nghiệp, tôn giáo khác nhau với những yêu cầu rất riêng dành cho lễ cưới từ địa điểm, concept hay các hoạt động trong buổi tiệc.</p>
              <a href="#" className="btn1">Xem chi tiết</a>
            </div>
          </div>
          <div className="box">
            <Image className="img1" src="/images/styling&decoration.jpg" width={500} height={200} alt="..."/>
            <div className="info">
              <h3>Styling & Decoration</h3>
              <p>Một bữa tiệc sinh nhật, một buổi cầu hôn lãng mạn, một buổi khai trương sang trọng hay bất kỳ sự kiện nào khác luôn cần phản ánh đúng phong cách, tầm nhìn và khơi gợi được những khía cạnh thú vị mà bạn chưa biết tới.</p>
              <a href="#" className="btn1">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </section>
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

export default Header;