const tsm = require('teamcity-service-messages');
import reporterFactory from './reporter';
import defaultConfig from './config';

let input = '';

process.stdin.on('data', data => {
  input += data.toString();
});

process.stdin.on('end', data => {
  const reporter = reporterFactory(tsm, defaultConfig)
  reporter(JSON.parse(input));
});