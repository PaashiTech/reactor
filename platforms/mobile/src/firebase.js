import firebase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";

// Example using auth with passing the secondary app instance
export const firebaseAuth = auth(secondaryApp);
