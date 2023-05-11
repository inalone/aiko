let isMusicKitInitialised = false;
let musicKitInstance: MusicKit.MusicKitInstance;

export async function initMusicKit() {
	const initPromise: Promise<MusicKit.MusicKitInstance> = new Promise((resolve) => {
		document.addEventListener('musickitloaded', () => {
			const instance = MusicKit.configure({
				developerToken: process.env.APPLE_DEVELOPER_TOKEN ?? 'unknown-token',
				app: {
					name: 'aiko',
					build: '0.0.1'
				}
			});
			resolve(instance);
		});
	});

	console.log('before');
	musicKitInstance = await initPromise;
	console.log('after');
	isMusicKitInitialised = true;
}

initMusicKit();
