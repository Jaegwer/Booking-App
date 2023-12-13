import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const firebaseConfig = {
	apiKey: config.public.apiKey,
	authDomain: config.public.authDomain,
	projectId: config.public.projectId,
	storageBucket: config.public.storageBucket,
	messagingSenderId: config.public.messagingSenderId,
	appId: config.public.appId,
	measurementId: config.public.measurementId
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const firestore = getFirestore(app);
  const storage = getStorage(app);

});
