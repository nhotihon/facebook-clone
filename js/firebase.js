const firebaseConfig = {
    apiKey: "AIzaSyDIIcvw5O6G07ve6BTgyeQnwol27Y_klN4",
    authDomain: "instagram-eceb7.firebaseapp.com",
    projectId: "instagram-eceb7",
    storageBucket: "instagram-eceb7.appspot.com",
    messagingSenderId: "25157048947",
    appId: "1:25157048947:web:3e34b94c1ea6b24d192806",
    measurementId: "G-E9PL2BEC20"
};

firebase.initializeApp(firebaseConfig);
var provider = new firebase.auth.GoogleAuthProvider();

async function loginGoogle() {
    const respone = await firebase.auth().signInWithPopup(provider);
    // console.log(respone.user.displayName);
    const user = {
        fullname: respone.user.displayName,
        email: respone.user.email,
        avatar: respone.user.photoURL.replaceAll("=s96-c", ""),
    };
    console.log(user);
    window.location.href = "/index.html";

}