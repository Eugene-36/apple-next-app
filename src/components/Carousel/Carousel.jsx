'use client';

import { carousel } from '@data/carousel';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Arcade, FitnessPlus, Music } from '../icons';
import s from './style.module.css';

const Carousel = () => {
	return (
		<Swiper
			id="carousel-slider"
			spaceBetween={15}
			slidesPerView={'auto'}
			centeredSlides={true}
			autoplay={{ delay: 0, disableOnInteraction: false }}
			// modules={[Autoplay]}
			speed={6000}
			loop={true}
		>
			{carousel.map(
				({ id, srcImg, alt, type, styles, icon, title, linkText }) => (
					<SwiperSlide>
						{type === 'content' && (
							<div
								className={s.slideContent}
								style={{ ...styles }}
							>
								<div className={s.img}>
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
								<div className={s.title}>{title}</div>
								<div className={s.badge}>
									{icon === 'Music' && <Music />}
									{icon === 'fitnessPlus' && <FitnessPlus />}
									{icon === 'Arcade' && <Arcade />}
								</div>
								<div className={s.linkOverlay}>
									<a href="#" className={s.linkText}>{linkText}</a>
								</div>
							</div>
						)}
						{type !== 'content' && (
							<div className={s.slideImg} style={{ ...styles }}>
								<Image
									key={id}
									src={srcImg}
									width={417}
									height={236}
									sizes="(max-width: 768px) 238px, 417px, (max-width: 1200px) 286px, 417px"
									priority
									alt={alt}
								/>
								<div className={s.titleAbsolute}>{title}</div>
								<div className={s.badge}>
									{icon === 'Music' && <Music />}
									{icon === 'fitnessPlus' && <FitnessPlus />}
									{icon === 'Arcade' && <Arcade />}
								</div>
							</div>
						)}
					</SwiperSlide>
				),
			)}
		</Swiper>
	);
};

export default Carousel;
