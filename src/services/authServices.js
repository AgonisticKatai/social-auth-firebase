import firebase from "firebase";

export async function HandleGoogleAuth() {
  try {
    const provider = await new firebase.auth.GoogleAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    console.log(`Logged as ${response.user.email}`);
  } catch (err) {
    console.log(err);
  }
}

export async function HandleFacebookAuth() {
  try {
    const provider = await new firebase.auth.FacebookAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    console.log(`Logged as ${response.user.email}`);
  } catch (err) {
    console.log(err);
  }
}

export async function HandleGithubAuth() {
  try {
    const provider = await new firebase.auth.GithubAuthProvider();
    const response = await firebase.auth().signInWithPopup(provider);
    console.log(`Logged as ${response.user.email}`);
  } catch (err) {
    console.log(err);
  }
}

export async function HandleLogout() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    console.log(err);
  }
}
