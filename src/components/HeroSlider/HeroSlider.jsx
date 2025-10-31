'use client';
import useStore from '@/lib/store.js';
import { slides } from '@data/hero-slider';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlider = () => {
	const [swiperRef, setSwiperRef] = useState(null);
	const { isPaused } = useStore();
	swiperRef?.autoplay.start();
	if (isPaused) {
		swiperRef?.autoplay.stop();
	}

	return (
		<Swiper
			onSwiper={setSwiperRef}
			id="hero-slider"
			spaceBetween={30}
			slidesPerView={'auto'}
			centeredSlides={true}
			autoplay={{ delay: 2500, disableOnInteraction: false }}
			modules={[Autoplay, Pagination]}
			pagination={{
				clickable: true,
			}}
			speed={1000}
			loop={true}
		>
			{slides.map(({ id, srcImg, alt }) => (
				<SwiperSlide>
					<Image
						key={id}
						src={srcImg}
						width={1250}
						height={668}
						sizes="(max-width: 1200px) 100vw, 1250px"
						priority
						alt={alt}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default HeroSlider;
