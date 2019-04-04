export const debug = (...messages:string[]) => {
  if (process.env.DEBUG) {
    // tslint:disable-next-line:no-console
    console.log.apply(messages);
  }
}