export const logger = {
  log(...logValue: any[]) {
    // eslint-disable-next-line no-console
    console.log(...logValue);

    // TODO: Collect log info in production server and send it to a server like bettterstack logs or smiliar
  },
};
