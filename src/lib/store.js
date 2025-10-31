import { create } from 'zustand';

const useStore = create((set) => ({
	isPaused: false,
	togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
}));

export default useStore;
