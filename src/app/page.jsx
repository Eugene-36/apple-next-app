import Carousel from '@/components/Carousel/Carousel';
import Hero from '@/components/Hero';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import Navigation from '@/components/Nav';
import PauseButton from '@/components/PauseButton/PauseButton';
import { heroes } from '@data/heroes';
import { promos } from '@data/promo';

export default function Home() {
	return (
		<>
			<Navigation />
			<section className="section-heroes">
				{heroes.map((hero, id) => (
					<div key={id}>
						<Hero data={hero} />
					</div>
				))}
			</section>
			<section className="section-promo-grid">
				{promos.map((promo, id) => (
					<Hero data={promo} size="small" key={id} />
				))}
			</section>
			<section className="section-hero-slider">
				<HeroSlider />
			</section>
			<section className="section-carousel">
				<Carousel />
			</section>
			<section className="section-carousel">
				<PauseButton />
			</section>
		</>
	);
}
