import { writable } from 'svelte/store';

function createThemeStore() {
	const { subscribe, set } = writable(localStorage.getItem('theme') ?? 'business');

	return {
		subscribe,
		setTheme: (newTheme: string) => {
			localStorage.setItem('theme', newTheme);
			set(newTheme);
		}
	};
}

export const isLoggedIn = writable(false);
export const isMusicKitInitialised = writable(false);
export const theme = createThemeStore();
