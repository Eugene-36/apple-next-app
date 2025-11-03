'use client';
import useStore from '@/lib/store.js';
import { slides } from '@data/hero-slider';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const HeroSlider = () => {
	const swiperRef = useRef(null);
	const isPaused = useStore((s) => s.isPaused);
	useEffect(() => {
		const swiper = swiperRef.current;
		if (!swiper) return;
		if (isPaused) swiper.autoplay.stop();
		else swiper.autoplay.start();
	}, [isPaused]);

	return (
		<Swiper
			onSwiper={(instance) => (swiperRef.current = instance)}
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
