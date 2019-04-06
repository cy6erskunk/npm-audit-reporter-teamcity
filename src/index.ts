// tslint:disable-next-line:no-var-requires
const tsm = require('teamcity-service-messages');
import { getConfig } from './config';
import reporterFactory from './reporter';

let input = '';

process.stdin.on('data', data => {
  input += data.toString();
});

process.stdin.on('end', data => {
  const reporter = reporterFactory(tsm, getConfig());
  reporter(JSON.parse(input));
});
