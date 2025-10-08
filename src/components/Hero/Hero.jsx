'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './style.module.css';

import Button from '../Button';

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 998);
		};

		handleResize(); // Check on mount

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className={style.hero}>
			<div className={style.hero__textContainer}>
				<h1 className={style.hero__title}>iPhone 17 Pro</h1>
				<p className={style.hero__subtitle}>All out Pro.</p>
				<div className={style.hero__links}>
					<Button title="Learn more" />
					<Button title="Buy" type="outline" />
				</div>
			</div>

			<figure
				className={style.hero__imageContainer}
				role="img"
				aria-label="Photo iphone 17"
			>
				{isMobile ? (
					<Image
						src="/img/hero/iphone-17-pro-mobile.jpg"
						alt="Hero image"
						fill
						objectFit="cover"
						quality={85}
						priority
					/>
				) : (
					<Image
						src="/img/hero/iphone-17-pro.jpg"
						alt="Hero image"
						fill
						objectFit="cover"
						quality={100}
						priority
					/>
				)}
			</figure>
		</div>
	);
};

export default Hero;
