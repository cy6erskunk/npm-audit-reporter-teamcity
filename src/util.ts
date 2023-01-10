export const debug = (...messages: unknown[]) => {
  if (process.env.DEBUG) {
    console.log(...messages);
  }
};
