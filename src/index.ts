import { getConfig } from './config';
import reporterFactory from './reporter';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const tsm = require('teamcity-service-messages');

let input = '';

process.stdin.on('data', data => {
  input += data.toString();
});

process.stdin.on('end', data => {
  const reporter = reporterFactory(tsm, getConfig());
  reporter(JSON.parse(input));
});
