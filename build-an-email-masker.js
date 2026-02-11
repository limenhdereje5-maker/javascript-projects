** start of script.js **

function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];
  const mask = "*".repeat(username.length - 2);

  return firstChar + mask + lastChar + domain;
}

const email = "apple.pie@example.com";
console.log(maskEmail(email));

** end of script.js **

