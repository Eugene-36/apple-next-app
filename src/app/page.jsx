import Hero from '@/components/Hero';
import Navigation from '@/components/Nav';
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
		</>
	);
}
