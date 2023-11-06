import webPush from 'web-push';
import fs from 'node:fs';

const vapidKeys = webPush.generateVAPIDKeys();

console.log(`
=======================================

VAPID Public Key:
${vapidKeys.publicKey}

Be sure to paste that into the appropriate place in src/pages/CreateProfile/Push.tsx

=======================================
`);

// Write .env file
const envFilename = '.env';

try {
  fs.writeFileSync(envFilename, `VAPID_PUBLIC_KEY="${vapidKeys.publicKey}"
VAPID_PRIVATE_KEY="${vapidKeys.privateKey}"`);
  console.log(`${envFilename} has been saved with your VAPID public & private keys.`);
  console.log(`Be sure to restart your server to pick up the changes!`);
} catch (err) {
  console.log("Error:", err);
}

// Write server/static/vapid-public-key.js
const vpkFilename = 'server/static/vapid-public-key.js';

try {
  fs.writeFileSync(vpkFilename, `window.VAPID_PUBLIC_KEY = "${vapidKeys.publicKey}";`);
  console.log(`${vpkFilename} has been saved with your VAPID public key.`);
} catch (err) {
  console.log("Error:", err);
}
