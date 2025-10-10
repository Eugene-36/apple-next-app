import Hero from '@/components/Hero';
import Navigation from '@/components/Nav';
export default function Home() {
	const heroes = {
		type: 'default',
		title: 'iPhone 17 Pro',
		subtitle: 'All out Pro.',
		imageDesktop: '/img/hero/iphone-17-pro.jpg',
		imageMobile: '/img/hero/iphone-17-pro-mobile.jpg',
		altText:
			'iPhone 17 Pro in cosmic orange finish, Pro Fusion camera system, 3 lenses, microphone, flash',
		buttons: [
			{ title: 'Learn more', type: 'primary', link: '#', id: 1 },
			{ title: 'Buy', type: 'outline', link: '#', id: 2 },
		],
	};

	// {
	// 	type: 'white',
	// 	title: 'iPhone Air',
	// 	subtitle: 'The thinnest iPhone ever. With the power of pro inside.',
	// 	imageDesktop: '/img/hero/iphone-air.jpg',
	// 	imageMobile: '/img/hero/iphone-air-mobile.jpg',
	// 	altText: 'Side view of iPhone Air, showing very thin titanium side',
	// 	buttons: [
	// 		{ title: 'Learn more', type: 'primary', link: '#' },
	// 		{ title: 'Buy', type: 'outline', link: '#' },
	// 	],
	// },
	// {
	// 	type: 'white',
	// 	title: 'iPhone 17',
	// 	subtitle: 'Magichromatic.',
	// 	imageDesktop: '/img/hero/iphone-17.jpg',
	// 	imageMobile: '/img/hero/iphone-17-mobile.jpg',
	// 	altText: 'iPhone 17 in all 5 finishes, fanned out side view',
	// 	buttons: [
	// 		{ title: 'Learn more', type: 'primary', link: '#' },
	// 		{ title: 'Buy', type: 'outline', link: '#' },
	// 	],
	// },
	const heroIphoneAir = {
		type: 'white',
		title: 'iPhone Air',
		subtitle: 'The thinnest iPhone ever. With the power of pro inside.',
		imageDesktop: '/img/hero/iphone-air.jpg',
		imageMobile: '/img/hero/iphone-air-mobile.jpg',
		altText: 'Side view of iPhone Air, showing very thin titanium side',
		buttons: [
			{ title: 'Learn more', type: 'primary', link: '#', id: 3 },
			{ title: 'Buy', type: 'outline', link: '#', id: 4 },
		],
	};
	const heroIphone17 = {
		type: 'white',
		title: 'iPhone 17',
		subtitle: 'Magichromatic.',
		imageDesktop: '/img/hero/iphone-17.jpg',
		imageMobile: '/img/hero/iphone-17-mobile.jpg',
		altText: 'iPhone 17 in all 5 finishes, fanned out side view',
		buttons: [
			{ title: 'Learn more', type: 'primary', link: '#', id: 3 },
			{ title: 'Buy', type: 'outline', link: '#', id: 4 },
		],
	};
	return (
		<>
			<Navigation />
			<section className="section-heroes">
				<Hero data={heroes} />
				<Hero data={heroIphoneAir} />
				<Hero data={heroIphone17} />
			</section>
		</>
	);
}
