const tsm = require('teamcity-service-messages');
import reporterFactory from './reporter';
import { getConfig } from './config';

let input = '';

process.stdin.on('data', data => {
  input += data.toString();
});

process.stdin.on('end', data => {
  const reporter = reporterFactory(tsm, getConfig())
  reporter(JSON.parse(input));
});