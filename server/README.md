Push Notification Server
========================

This Push Notifications Server code:

- Keeps track of push notification subscriptions (i.e. the server creates a new database record when a client opts in to push notifications, and it deletes an existing database record when a client opts out)
- Sends a push notification to a single client
- Sends a push notification to all subscribed clients

This also includes sample client code to confirm your local set up can send and receive push notifications.

## Running the Push Notification server

From the _root_ (not this folder) of this repo:

1. Install dependencies:

    ```
    npm i
    ```

2. Generate the VAPID keys you need for notifications:

    ```
    npm run keys
    ```

3. Start the server:

    ```
    npm run start:server
    ```

This should start up a push notifications server at http://localhost:3001/ with CORS headers.

Instructions for writing the code for the push notifications server are at https://web.dev/articles/push-notifications-server-codelab#manage (just ignore the Glitch parts).

Use http://localhost:3001/ as an initial testing ground to get notifications appearing on http://localhost:3001/.

One you have that working, take a look at the code in `server/static/push.js` and use that to complete the `subscribeToPush()`, `unsubscribeToPush()`, and `notifyMe()` functions in `src/pages/CreateProfile/Push.tsx` to display notifications from http://localhost:3000/. Be sure to configure those functions to hit the appropriate endpoints at http://localhost:3001/.

### License Info

This server code and instructions are adapted from the [web.dev Codelab: Build a push notification server](https://web.dev/push-notifications-server-codelab/).

The [code from Google](https://glitch.com/edit/#!/push-notifications-server-codelab-complete) is [licensed under the Apache 2.0 License](https://developers.google.com/terms/site-policies) and modified for our workshop format.

Portions of this page are modifications based on work created and [shared by Google](https://developers.google.com/readme/policies) and used according to terms described in the [Creative Commons 4.0 Attribution License](https://creativecommons.org/licenses/by/4.0/).
