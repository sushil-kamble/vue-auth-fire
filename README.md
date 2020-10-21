# vue-auth-fire
This boiler plate which includes vue.js, firebase authentication and vuetify.
### **Demo Here:** [vue-auth-fire](https://vueauthfire.web.app/)
Try Logging with the following
```
Email Address: test@gmail.com
Password: test@12345
```

### Steps
* [Why vue-auth-fire](#vue-auth-fire)
* [Installation](#installation)
* [Create a firebase project](#create-a-firebase-project)
* [Run Project](#run-project)
* [Features](#features)

### Why vue-auth-fire ?
At times it get very irritating when you want to start your new project which is a firebase project in which you have to set *Authentication Flow* **EVERYTIME**.
You have to add **Routes**, **Protect** your routes, create a **Login** & **Register** component, **Style** those component and have a nice **Loading animation**,
**Validate** your login/register form. and much much more.

**So I have Developed a boiler plate which you can easily use in your app.**

### Installation
Create your project using [vue-cli](https://cli.vuejs.org/guide/installation.html)
> **IMPORTANT:**  You need to add `vuex` and `vue-router` while setting up the project. 

Also add [vuetify](https://vuetifyjs.com/en/getting-started/installation/#vue-cli-install) and [firebase](https://console.firebase.google.com/)
just by entering following command one by one.
```
vue add vuetify
npm i firebase
```
This Repository is basically the `src` folder. 

Now you just have to **replace** the *contents of your scr folder* with the *contents of this folder*.

#### How to replace?
1. Download and Extract this repository
2. Copy all files from extracted folder and paste it in your projects `src` folder. Then click Replace
> For Eg. *Copy all files named* `store, firebase, views etc(ALL)` *from that extracted folder*

### Create a firebase project
1. Go to [Firebase Console](https://console.firebase.google.com/). Add Project
2. In Project Overview, click on **web** icon and register app
3. Copy `firebaseConfig` object
4. Click on `Continue to Console`, then click on `Authetication`, then on `Set up sign-in method`
5. Enable Email/password authentication
6. Open `src/firebase/init.js`in your project file
7. Replace that `firebaseConfig` object with one you just copied

### Run Project
Type `npm run serve`

### Features
* When the user is logged in, his/her `id`, `name` and `email` will be stored in the store (`Vuex`). That means that information will available for entire app via `getter`
* When you run this app, you will get a nice preset which can be easily read.
* On refreshing the page you will not lose the user info. `Logged in` user will be `logged in`
* You will also get a protected view (`Profile page`). Protected view can only be accessed when the user is logged in
