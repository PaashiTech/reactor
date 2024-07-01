import React, { useState, useEffect } from "react";
import { View, Text, Button } from "@unmaze/views";
import auth from "@react-native-firebase/auth";
// import { firebaseAuth } from "../firebase.js";

export const FirebaseAuth = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View flex={1} alignItems="center" justifyContent="center">
        <Text>Login with</Text>
        <Button
          onPress={() => {
            console.log("login");
            auth()
              .createUserWithEmailAndPassword(
                "jane.doe@example.com",
                "SuperSecretPassword!"
              )
              .then(() => {
                console.log("User account created & signed in!");
              })
              .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                  console.log("That email address is already in use!");
                }

                if (error.code === "auth/invalid-email") {
                  console.log("That email address is invalid!");
                }

                console.error(error);
              });
          }}
        >
          Amogh
        </Button>
      </View>
    );
  }

  //@ts-ignore
  return (
    <View flex={1} justifyContent="center">
      <Text>Welcome {user.email}</Text>
    </View>
  );
};
