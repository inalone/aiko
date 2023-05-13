import token from './token';
import { isLoggedIn, isMusicKitInitialised } from './store';

let instance: MusicKit.MusicKitInstance;

async function initMusicKit() {
	const initPromise: Promise<MusicKit.MusicKitInstance> = new Promise((resolve) => {
		document.addEventListener('musickitloaded', () => {
			const instance = MusicKit.configure({
				developerToken: token ?? 'unknown-token',
				app: {
					name: 'aiko',
					build: '0.0.1'
				}
			});
			resolve(instance);
		});
	});

	instance = await initPromise;
	isLoggedIn.set(instance.isAuthorized);
	isMusicKitInitialised.set(true);
	console.log('MusicKit configured.');
}

initMusicKit();

export async function toggleLogin() {
	instance.isAuthorized ? await instance.unauthorize() : instance.authorize();
	isLoggedIn.set(instance.isAuthorized);
}
