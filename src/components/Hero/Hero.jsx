'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import style from './style.module.css';

import Button from '../Button';

const Hero = ({ data }) => {
	const [isMobile, setIsMobile] = useState(false);

	const {
		type,
		title,
		subtitle,
		imageDesktop,
		imageMobile,
		altText,
		buttons,
	} = data;

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 998);
		};

		handleResize(); // Check on mount

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	console.log('data', data);
	let additionalClass = '';
	if (type === 'white') {
		additionalClass = style['hero--white'];
	}
	return (
		<div className={`${style.hero} ${additionalClass}`}>
			<div className={style.hero__textContainer}>
				<h1 className={style.hero__title}>{title}</h1>
				<p className={style.hero__subtitle}>{subtitle}</p>
				<div className={style.hero__links}>
					{buttons.map(({ title, type, link, id }) => (
						<Button
							title={title}
							type={type}
							link={link}
							key={id}
						/>
					))}
				</div>
			</div>

			<figure
				className={style.hero__imageContainer}
				role="img"
				aria-label="Photo iphone 17"
			>
				{isMobile ? (
					<Image
						src={imageMobile}
						alt={altText}
						fill
						objectFit="cover"
						quality={85}
						priority
					/>
				) : (
					<Image
						src={imageDesktop}
						alt={altText}
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
