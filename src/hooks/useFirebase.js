import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";

import initializeFirebase from "../Firebase/Firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [authToken, setAuthToken] = useState('');
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();
    
    // register
    const registerUser = (name, email, password, navigate) => {
      setIsLoading(true);
        createUserWithEmailAndPassword( auth, email, password)
        .then((userCredential) => {
          setAuthError('');

          const newUser = {email, displayName: name};
          setUser(newUser);
        //   save use to database
          saveUser(email,name, 'POST');
        //   send name to firebase
          updateProfile(auth.currentUser, {
              displayName: name
          })
            .then(() => {})
            .catch((error) => {});
            navigate.push('/');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
        }

        // login user manually
        const loginUser = (email, password, location, navigate) => {
          setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const destination = location?.state?.from || '/home';
                navigate.push(destination);
              })
            .catch((error) => {
              setAuthError(error.message);
            }).finally(()=> setIsLoading(false));
        }

        // Google pop up sign in
        const googleSignIn = (location, navigate) => {
          setIsLoading(true);
          signInWithPopup(auth, googleProvider)
            .then((result) => {
              const user = result.user;
              const destination = location?.state?.from || '/home';
              navigate.push(destination);
              saveUser(user.email, user.displayName, 'PUT');
              setAuthError('');
              // ...
            }).catch((error) => {
              setAuthError(error.message);
            }).finally(()=> setIsLoading(false));
        }

        
        // observe user presence / state
        useEffect(()=> {
            const unsSubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                  setUser(user);
                  getIdToken(user)
                    .then( idToken => {
                      setAuthToken(idToken);
                    })
                } else {
                    setUser({});
                }
                setIsLoading(false);
              });
              return () => unsSubscribe;
        },[auth])

        useEffect(()=>{
          fetch(`https://calm-lowlands-39164.herokuapp.com/users/${user.email}`)
            .then( res => res.json())
            .then( data => setAdmin(data.admin))
        },[user.email])
        // sign out
    const logOut = () => {
      setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            })
            .catch((error) => {})
            .finally(()=> setIsLoading(false));
    }


    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://calm-lowlands-39164.herokuapp.com/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
        .then()
    }

    return {
        user,
        admin,
        authToken,
        setUser,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,
        googleSignIn
    };
}

export default useFirebase;