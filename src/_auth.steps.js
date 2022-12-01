/*
Auth Setup
1. Create firebase project
2. Enable web
3. Enable sign in method
4. install firebase
5. get firebase config in your firebase.config.js file
6. export app from firebase.config.js
*/

/*
1. Create UserCOntext (Auth Context); UserContext --> component name userContext provides AuthContext

2. create Auth context
3. set AuthContext.Provider
4. Make sure you set the {children}
5. export AuthContext to be used inside useContext hook
6. get from data
7. getAuth in the UserContext
*/

/**
FIREBASE HOSTING
-------------------
//  one time for each computer
1. npm install -g firebase-tools
2. firebase login

// for each project one time
3. firebase init
Make sure: for public directory: you select -- build
single page application: y

// for every deploy
4. npm run build
5. firebase deploy
 */