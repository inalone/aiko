import token from "./token"

let instance: MusicKit.MusicKitInstance;

export async function initMusicKit() {
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

	console.log('MusicKit configured.');

	instance.authorize();
}

initMusicKit();
