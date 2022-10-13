import { decrypt } from "./crypt/decrypt";
import { encrypt } from "./crypt/encrypt";

(() => {
  const message = "your message here";

  const encryptedMessage = encrypt(message);
  console.log("encrypted:", encryptedMessage); // yrea_r__o_sghe__umsee

  const decryptedMessage = decrypt(encryptedMessage);
  console.log("decrypted:", decryptedMessage); // your message here
})();
