import { API } from 'teamcity-service-messages';
import { IConfig } from './config';
import { IAuditLegacyOutput } from './legacy/model';
import legacyReporter from './legacy/reporter';
import { IAuditOutput, IMetadata, ISource } from './model';
import { debug } from './util';

function isVulnerable(auditMetadata: IMetadata) {
  return auditMetadata.vulnerabilities.total > 0;
}

export function processReport(
  tsm: API<true>,
  { inspectionTypeId, inspectionName, inspectionCategory, inspectionSeverity }: IConfig,
  auditResult: IAuditOutput,
) {
  if (!isVulnerable(auditResult.metadata)) {
    return;
  }

  tsm.inspectionType({
    category: inspectionCategory,
    description: 'https://docs.npmjs.com/cli/audit.html',
    id: inspectionTypeId,
    name: inspectionName,
  });

  Object.keys(auditResult.vulnerabilities).forEach((dependency) => {
    const component = auditResult.vulnerabilities[dependency];
    debug('current element:', component);

    const sources = component.via.filter((src) => typeof src !== 'string') as ISource[];
    const hasActualAdvisories = sources.length > 0;

    if (!hasActualAdvisories) {
      debug(`Advisories affecting ${component} are inherited from: ${sources.join(',')}`);
      return;
    }

    sources.forEach((advisory) => {
      tsm.inspection({
        SEVERITY: inspectionSeverity,
        file: `module: "${advisory.name}"`,
        message: `${advisory.title}
severity: ${advisory.severity},
versions: ${advisory.range},
dependency of: ${component.effects.length > 0 ? component.effects.join(', ') : 'n/a'},
patched_versions: ${
          typeof component.fixAvailable === 'boolean'
            ? component.fixAvailable
            : component.fixAvailable.name + '@' + component.fixAvailable.version
        },
advisory: ${advisory.url}`,
        typeId: inspectionTypeId,
      });
    });
  });
}

export default function reporter(tsm: API<true>, cfg: IConfig) {
  return (auditResult: IAuditOutput | IAuditLegacyOutput) =>
    auditResult.hasOwnProperty('auditReportVersion')
      ? processReport(tsm, cfg, auditResult as IAuditOutput)
      : legacyReporter(tsm, cfg, auditResult as IAuditLegacyOutput);
}
