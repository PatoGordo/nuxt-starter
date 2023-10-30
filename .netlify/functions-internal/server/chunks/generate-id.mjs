function generateID(len, base) {
  base = base || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";
  for (let i = 0; i < len; i++) {
    const randomPoz = Math.floor(Math.random() * base.length);
    randomString += base.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
}

export { generateID as g };
//# sourceMappingURL=generate-id.mjs.map
