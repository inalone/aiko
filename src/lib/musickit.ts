import token from './token';
import { isLoggedIn } from './store';

let instance: MusicKit.MusicKitInstance;
let musicKitInit = new Promise(() => {});
let initialized = false;

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
	console.log('MusicKit configured.');
}

initMusicKit();

export async function toggleLogin() {
	if (instance.isAuthorized) {
		await instance.unauthorize();
	} else {
		console.log(instance);
		await instance.authorize();
	}

	isLoggedIn.set(instance.isAuthorized);
}
