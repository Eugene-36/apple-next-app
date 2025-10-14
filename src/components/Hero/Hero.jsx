'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import smallStyles from './small.module.css';
import normalStyle from './style.module.css';

import Button from '../Button';

const Hero = ({ data, size }) => {
	const [isMobile, setIsMobile] = useState(false);
	let style = normalStyle;

	if (size === 'small') {
		style = smallStyles;
	}

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
	let additionalClass = '';
	if (type === 'white') {
		additionalClass = style['hero--white'];
	}
	return (
		<div className={`${style.hero} ${additionalClass}`}>
			<div className={style.hero__textContainer}>
				{title?.type === 'image' ? (
					<h3 className={style.hero__titleImageContainer}>
						<Image
							src={title.image}
							alt={title.alt}
							priority
							fill
							objectFit="contain"
						/>
						<span className="visuallyhidden">{title.alt}</span>
					</h3>
				) : (
					<h1 className={style.hero__title}>{title}</h1>
				)}

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
						priority
					/>
				) : (
					<Image
						src={imageDesktop}
						alt={altText}
						fill
						objectFit="cover"
						priority
					/>
				)}
			</figure>
		</div>
	);
};

export default Hero;
