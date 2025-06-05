"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const CoverflowCarousel = () => {
  const images = [
    {
      src: "/images/coke.jpg",
      alt: "Mountain landscape",
      title: "Mountain Peak",
      description: "Beautiful sunrise over the mountains",
    },
    {
      src: "/images/crosswalk.jpg",
      alt: "Ocean view",
      title: "Ocean Waves",
      description: "Peaceful ocean at sunset",
    },
    {
      src: "/images/downtown.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
    {
      src: "/images/ocean_city.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
    {
      src: "/images/sidewalk_fisheye.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
    {
      src: "/images/skate_fisheye.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
    {
      src: "/images/streetsign.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
    {
      src: "/images/tv_fisheye.jpg",
      alt: "Forest path",
      title: "Forest Trail",
      description: "A winding path through the woods",
    },
  ];

  return (
     <div className="w-full py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Quality You Can See</h2>
        <p className="text-gray-600">Examples of our professional development and printing work</p>
      </div>
      
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} // Changed from 'auto' to 3 to show only 1 on each side
        spaceBetween={120} // Add space between slides
        coverflowEffect={{
          rotate: 25, // Reduced rotation for less dramatic effect
          stretch: 0,
          depth: 150, // Reduced depth
          modifier: .5, // Slightly reduced modifier
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="w-full max-w-7xl mx-auto" // Increased max width for bigger images
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="!w-80 !h-80 sm:!w-96 sm:!h-96 lg:!w-[500px] lg:!h-[500px]">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 640px, (max-width: 768px) 768px, 1000px" // Increased sizes for higher resolution
                quality={95} // Increased quality from default 75 to 95
                priority={index < 3}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoverflowCarousel;
