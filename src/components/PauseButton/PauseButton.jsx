'use client';
import useStore from '@/lib/store.js';
import { Pause, Play } from '../icons';

const PauseButton = () => {
	const { isPaused, togglePause } = useStore();
	return (
		<div>
			{/* PauseButton
			{`Show is ${isPaused}`} */}
			<div className="pauseButton">
				<button
					onClick={() => togglePause(false)}
					type="button"
					className="append-2-slides"
				>
					{isPaused ? <Play /> : <Pause />}
				</button>
			</div>
		</div>
	);
};

export default PauseButton;
