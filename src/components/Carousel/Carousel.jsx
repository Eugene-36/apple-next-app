'use client';

import { carousel } from '@data/carousel';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import s from './style.module.css';

const Carousel = () => {
	return (
		<Swiper
			id="carousel-slider"
			spaceBetween={15}
			slidesPerView={'auto'}
			// centeredSlides={true}
			autoplay={{ delay: 2500, disableOnInteraction: false }}
			// modules={[Autoplay]}
			speed={1000}
			loop={true}
		>
			{carousel.map(({ id, srcImg, alt, type, styles }) => (
				<SwiperSlide>
					{type === 'content' && (
						<div className={s.slide} style={{ ...styles }}>
							<div className={s.img}>
								{' '}
								<Image
									key={id}
									src={srcImg}
									width={196}
									height={196}
									sizes="(max-width: 768px) 114px, 196px"
									priority
									alt={alt}
								/>
							</div>
							<div className={s.title}>Title</div>
							<div className={s.badge}>Video</div>
						</div>
					)}
					{type !== 'content' && (
						<Image
							key={id}
							src={srcImg}
							width={417}
							height={236}
							sizes="(max-width: 768px) 238px, 417px, (max-width: 1200px) 286px, 417px"
							priority
							alt={alt}
						/>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default Carousel;
