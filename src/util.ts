export const debug = (...messages: any[]) => {
  if (process.env.DEBUG) {
    // tslint:disable-next-line:no-console
    console.log(...messages);
  }
};
