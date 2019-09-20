export const debug = (...messages: any[]) => {
  if (process.env.DEBUG) {
    console.log(...messages);
  }
};
