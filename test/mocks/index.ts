/* eslint-disable */
// @ts-nocheck

import {IAuditOutput} from "../../src/model";

export const noVulnerability: IAuditOutput = {
    "auditReportVersion": 2,
    "vulnerabilities": {},
    "metadata": {
        "vulnerabilities": {
            "info": 0,
            "low": 0,
            "moderate": 0,
            "high": 0,
            "critical": 0,
            "total": 0
        },
        "dependencies": {
            "prod": 20,
            "dev": 1113,
            "optional": 1,
            "peer": 0,
            "peerOptional": 0,
            "total": 1132
        }
    }
};

export const simpleVulnerability: IAuditOutput = {
    "auditReportVersion": 2,
    "vulnerabilities": {
        "json5": {
            "name": "json5",
            "severity": "high",
            "isDirect": false,
            "via": [
                {
                    "source": 1085311,
                    "name": "json5",
                    "dependency": "json5",
                    "title": "Prototype Pollution in JSON5 via Parse Method",
                    "url": "https://github.com/advisories/GHSA-9c47-m6qq-7p4h",
                    "severity": "high",
                    "cwe": [
                        "CWE-1321"
                    ],
                    "cvss": {
                        "score": 7.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:L/A:H"
                    },
                    "range": "<1.0.2"
                }
            ],
            "effects": [],
            "range": "<1.0.2 || >=2.0.0 <2.2.2",
            "nodes": [
                "node_modules/json5",
                "node_modules/tsconfig-paths/node_modules/json5"
            ],
            "fixAvailable": true
        }
    },
    "metadata": {
        "vulnerabilities": {
            "info": 0,
            "low": 0,
            "moderate": 0,
            "high": 1,
            "critical": 0,
            "total": 1
        },
        "dependencies": {
            "prod": 20,
            "dev": 1113,
            "optional": 1,
            "peer": 0,
            "peerOptional": 0,
            "total": 1132
        }
    }
}

export const multipleVulnerabilities = {
    "auditReportVersion": 2,
    "vulnerabilities": {
        "anymatch": {
            "name": "anymatch",
            "severity": "low",
            "isDirect": false,
            "via": [
                "micromatch"
            ],
            "effects": [
                "chokidar"
            ],
            "range": "1.2.0 - 1.3.2",
            "nodes": [
                "node_modules/anymatch"
            ],
            "fixAvailable": true
        },
        "babel-core": {
            "name": "babel-core",
            "severity": "high",
            "isDirect": false,
            "via": [
                "babel-plugin-proto-to-assign",
                "json5",
                "lodash",
                "minimatch"
            ],
            "effects": [
                "grunt-babel"
            ],
            "range": "<=7.0.0-beta.3",
            "nodes": [
                "node_modules/babel-core"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "babel-plugin-proto-to-assign": {
            "name": "babel-plugin-proto-to-assign",
            "severity": "moderate",
            "isDirect": false,
            "via": [
                "lodash"
            ],
            "effects": [
                "babel-core"
            ],
            "range": "*",
            "nodes": [
                "node_modules/babel-plugin-proto-to-assign"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "braces": {
            "name": "braces",
            "severity": "low",
            "isDirect": false,
            "via": [
                {
                    "source": 1069589,
                    "name": "braces",
                    "dependency": "braces",
                    "title": "Regular Expression Denial of Service in braces",
                    "url": "https://github.com/advisories/GHSA-g95f-p29q-9xw4",
                    "severity": "low",
                    "cwe": [
                        "CWE-185",
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 3.7,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:N/A:L"
                    },
                    "range": "<2.3.1"
                },
                {
                    "source": 1082316,
                    "name": "braces",
                    "dependency": "braces",
                    "title": "Regular Expression Denial of Service (ReDoS) in braces",
                    "url": "https://github.com/advisories/GHSA-cwfw-4gq5-mrqx",
                    "severity": "low",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 0,
                        "vectorString": null
                    },
                    "range": "<2.3.1"
                }
            ],
            "effects": [
                "micromatch"
            ],
            "range": "<=2.3.0",
            "nodes": [
                "node_modules/braces"
            ],
            "fixAvailable": true
        },
        "chokidar": {
            "name": "chokidar",
            "severity": "high",
            "isDirect": false,
            "via": [
                "anymatch",
                "glob-parent"
            ],
            "effects": [
                "qunit"
            ],
            "range": "1.0.0-rc1 - 2.1.8",
            "nodes": [
                "node_modules/chokidar"
            ],
            "fixAvailable": true
        },
        "decode-uri-component": {
            "name": "decode-uri-component",
            "severity": "low",
            "isDirect": false,
            "via": [
                {
                    "source": 1085062,
                    "name": "decode-uri-component",
                    "dependency": "decode-uri-component",
                    "title": "decode-uri-component vulnerable to Denial of Service (DoS)",
                    "url": "https://github.com/advisories/GHSA-w573-4hg7-7wgq",
                    "severity": "low",
                    "cwe": [
                        "CWE-20"
                    ],
                    "cvss": {
                        "score": 0,
                        "vectorString": null
                    },
                    "range": "<0.2.1"
                }
            ],
            "effects": [],
            "range": "<0.2.1",
            "nodes": [
                "node_modules/decode-uri-component"
            ],
            "fixAvailable": true
        },
        "engine.io": {
            "name": "engine.io",
            "severity": "moderate",
            "isDirect": false,
            "via": [
                {
                    "source": 1085165,
                    "name": "engine.io",
                    "dependency": "engine.io",
                    "title": "Uncaught exception in engine.io",
                    "url": "https://github.com/advisories/GHSA-r7qp-cfhv-p84w",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-248"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<3.6.1"
                }
            ],
            "effects": [],
            "range": "<3.6.1",
            "nodes": [
                "node_modules/engine.io"
            ],
            "fixAvailable": true
        },
        "findup-sync": {
            "name": "findup-sync",
            "severity": "low",
            "isDirect": false,
            "via": [
                "micromatch"
            ],
            "effects": [
                "qunit"
            ],
            "range": "0.4.0 - 1.0.0",
            "nodes": [
                "node_modules/qunit/node_modules/findup-sync"
            ],
            "fixAvailable": true
        },
        "glob-base": {
            "name": "glob-base",
            "severity": "high",
            "isDirect": false,
            "via": [
                "glob-parent"
            ],
            "effects": [
                "parse-glob"
            ],
            "range": "*",
            "nodes": [
                "node_modules/glob-base"
            ],
            "fixAvailable": true
        },
        "glob-parent": {
            "name": "glob-parent",
            "severity": "high",
            "isDirect": false,
            "via": [
                {
                    "source": 1081884,
                    "name": "glob-parent",
                    "dependency": "glob-parent",
                    "title": "glob-parent before 5.1.2 vulnerable to Regular Expression Denial of Service in enclosure regex",
                    "url": "https://github.com/advisories/GHSA-ww39-953v-wcq6",
                    "severity": "high",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<5.1.2"
                }
            ],
            "effects": [
                "chokidar",
                "glob-base"
            ],
            "range": "<5.1.2",
            "nodes": [
                "node_modules/glob-parent"
            ],
            "fixAvailable": true
        },
        "grunt-babel": {
            "name": "grunt-babel",
            "severity": "high",
            "isDirect": true,
            "via": [
                "babel-core"
            ],
            "effects": [],
            "range": "5.0.0 - 5.0.3",
            "nodes": [
                "node_modules/grunt-babel"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "jquery-ui": {
            "name": "jquery-ui",
            "severity": "moderate",
            "isDirect": true,
            "via": [
                {
                    "source": 1084889,
                    "name": "jquery-ui",
                    "dependency": "jquery-ui",
                    "title": "XSS in `*Text` options of the Datepicker widget in jquery-ui",
                    "url": "https://github.com/advisories/GHSA-j7qv-pgf6-hvh4",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N"
                    },
                    "range": "<1.13.0"
                },
                {
                    "source": 1084890,
                    "name": "jquery-ui",
                    "dependency": "jquery-ui",
                    "title": "XSS in the `of` option of the `.position()` util in jquery-ui",
                    "url": "https://github.com/advisories/GHSA-gpqq-952q-5327",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N"
                    },
                    "range": "<1.13.0"
                },
                {
                    "source": 1084891,
                    "name": "jquery-ui",
                    "dependency": "jquery-ui",
                    "title": "XSS in the `altField` option of the Datepicker widget in jquery-ui",
                    "url": "https://github.com/advisories/GHSA-9gj3-hwp5-pmwc",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:H/A:N"
                    },
                    "range": "<1.13.0"
                },
                {
                    "source": 1084892,
                    "name": "jquery-ui",
                    "dependency": "jquery-ui",
                    "title": "XSS in dialog closeText in jquery-ui",
                    "url": "https://github.com/advisories/GHSA-hpcf-8vf9-q4gj",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
                    },
                    "range": "<1.12.0"
                },
                {
                    "source": 1085153,
                    "name": "jquery-ui",
                    "dependency": "jquery-ui",
                    "title": "jQuery UI vulnerable to XSS when refreshing a checkboxradio with an HTML-like initial text label",
                    "url": "https://github.com/advisories/GHSA-h6gj-6jjq-h8g9",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
                    },
                    "range": "<1.13.2"
                }
            ],
            "effects": [],
            "range": "<=1.13.1",
            "nodes": [
                "node_modules/jquery-ui"
            ],
            "fixAvailable": {
                "name": "jquery-ui",
                "version": "1.13.2",
                "isSemVerMajor": false
            }
        },
        "json5": {
            "name": "json5",
            "severity": "high",
            "isDirect": false,
            "via": [
                {
                    "source": 1085311,
                    "name": "json5",
                    "dependency": "json5",
                    "title": "Prototype Pollution in JSON5 via Parse Method",
                    "url": "https://github.com/advisories/GHSA-9c47-m6qq-7p4h",
                    "severity": "high",
                    "cwe": [
                        "CWE-1321"
                    ],
                    "cvss": {
                        "score": 7.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:L/UI:N/S:U/C:H/I:L/A:H"
                    },
                    "range": "<1.0.2"
                }
            ],
            "effects": [
                "babel-core"
            ],
            "range": "<1.0.2",
            "nodes": [
                "node_modules/json5"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "lodash": {
            "name": "lodash",
            "severity": "critical",
            "isDirect": false,
            "via": [
                {
                    "source": 1069477,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Prototype Pollution in lodash",
                    "url": "https://github.com/advisories/GHSA-jf85-cpcp-j695",
                    "severity": "critical",
                    "cwe": [
                        "CWE-20"
                    ],
                    "cvss": {
                        "score": 9.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:H"
                    },
                    "range": "<4.17.12"
                },
                {
                    "source": 1070197,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Regular Expression Denial of Service (ReDoS) in lodash",
                    "url": "https://github.com/advisories/GHSA-x5rq-j2xg-h7qm",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 0,
                        "vectorString": null
                    },
                    "range": "<4.17.11"
                },
                {
                    "source": 1070247,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Prototype Pollution in lodash",
                    "url": "https://github.com/advisories/GHSA-p6mc-m468-83gw",
                    "severity": "high",
                    "cwe": [
                        "CWE-770",
                        "CWE-1321"
                    ],
                    "cvss": {
                        "score": 7.4,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:N/S:U/C:N/I:H/A:H"
                    },
                    "range": "<4.17.20"
                },
                {
                    "source": 1083025,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Prototype Pollution in lodash",
                    "url": "https://github.com/advisories/GHSA-4xc9-xhrj-v574",
                    "severity": "high",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 0,
                        "vectorString": null
                    },
                    "range": "<4.17.11"
                },
                {
                    "source": 1083054,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Prototype Pollution in lodash",
                    "url": "https://github.com/advisories/GHSA-fvqr-27wr-82fm",
                    "severity": "low",
                    "cwe": [
                        "CWE-471"
                    ],
                    "cvss": {
                        "score": 0,
                        "vectorString": null
                    },
                    "range": "<4.17.5"
                },
                {
                    "source": 1084491,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Command Injection in lodash",
                    "url": "https://github.com/advisories/GHSA-35jh-r3h4-6jhm",
                    "severity": "high",
                    "cwe": [
                        "CWE-77",
                        "CWE-94"
                    ],
                    "cvss": {
                        "score": 7.2,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:H/UI:N/S:U/C:H/I:H/A:H"
                    },
                    "range": "<4.17.21"
                },
                {
                    "source": 1084498,
                    "name": "lodash",
                    "dependency": "lodash",
                    "title": "Regular Expression Denial of Service (ReDoS) in lodash",
                    "url": "https://github.com/advisories/GHSA-29mw-wpgm-hmr9",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 5.3,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L"
                    },
                    "range": "<4.17.21"
                }
            ],
            "effects": [
                "babel-core",
                "babel-plugin-proto-to-assign"
            ],
            "range": "<=4.17.20",
            "nodes": [
                "node_modules/lodash"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "markdown-it": {
            "name": "markdown-it",
            "severity": "moderate",
            "isDirect": false,
            "via": [
                {
                    "source": 1070030,
                    "name": "markdown-it",
                    "dependency": "markdown-it",
                    "title": "Uncontrolled Resource Consumption in markdown-it",
                    "url": "https://github.com/advisories/GHSA-6vfc-qv3f-vr6c",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 5.3,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:L"
                    },
                    "range": "<12.3.2"
                }
            ],
            "effects": [
                "modernizr"
            ],
            "range": "<12.3.2",
            "nodes": [
                "node_modules/markdown-it"
            ],
            "fixAvailable": {
                "name": "modernizr",
                "version": "3.12.0",
                "isSemVerMajor": false
            }
        },
        "micromatch": {
            "name": "micromatch",
            "severity": "high",
            "isDirect": false,
            "via": [
                "braces",
                "parse-glob"
            ],
            "effects": [
                "anymatch",
                "findup-sync"
            ],
            "range": "0.2.0 - 2.3.11",
            "nodes": [
                "node_modules/micromatch"
            ],
            "fixAvailable": true
        },
        "minimatch": {
            "name": "minimatch",
            "severity": "high",
            "isDirect": false,
            "via": [
                {
                    "source": 1083108,
                    "name": "minimatch",
                    "dependency": "minimatch",
                    "title": "Regular Expression Denial of Service in minimatch",
                    "url": "https://github.com/advisories/GHSA-hxm2-r34f-qmc5",
                    "severity": "high",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.0/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<3.0.2"
                },
                {
                    "source": 1084765,
                    "name": "minimatch",
                    "dependency": "minimatch",
                    "title": "minimatch ReDoS vulnerability",
                    "url": "https://github.com/advisories/GHSA-f8q6-p94x-37v3",
                    "severity": "high",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<3.0.5"
                }
            ],
            "effects": [
                "babel-core"
            ],
            "range": "<=3.0.4",
            "nodes": [
                "node_modules/babel-core/node_modules/minimatch"
            ],
            "fixAvailable": {
                "name": "grunt-babel",
                "version": "8.0.0",
                "isSemVerMajor": true
            }
        },
        "modernizr": {
            "name": "modernizr",
            "severity": "moderate",
            "isDirect": true,
            "via": [
                "markdown-it"
            ],
            "effects": [],
            "range": "3.7.1 - 3.11.8",
            "nodes": [
                "node_modules/modernizr"
            ],
            "fixAvailable": {
                "name": "modernizr",
                "version": "3.12.0",
                "isSemVerMajor": false
            }
        },
        "moment": {
            "name": "moment",
            "severity": "high",
            "isDirect": true,
            "via": [
                {
                    "source": 1069917,
                    "name": "moment",
                    "dependency": "moment",
                    "title": "Regular Expression Denial of Service in moment",
                    "url": "https://github.com/advisories/GHSA-446m-mv8f-q348",
                    "severity": "high",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<2.19.3"
                },
                {
                    "source": 1070472,
                    "name": "moment",
                    "dependency": "moment",
                    "title": "Regular Expression Denial of Service in moment",
                    "url": "https://github.com/advisories/GHSA-87vv-r9j6-g5qv",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H"
                    },
                    "range": "<2.11.2"
                },
                {
                    "source": 1081763,
                    "name": "moment",
                    "dependency": "moment",
                    "title": "Path Traversal: 'dir/../../filename' in moment.locale",
                    "url": "https://github.com/advisories/GHSA-8hfj-j24r-96c4",
                    "severity": "high",
                    "cwe": [
                        "CWE-22",
                        "CWE-27"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:N/I:H/A:N"
                    },
                    "range": "<2.29.2"
                }
            ],
            "effects": [],
            "range": "<=2.29.1",
            "nodes": [
                "node_modules/moment"
            ],
            "fixAvailable": {
                "name": "moment",
                "version": "2.29.4",
                "isSemVerMajor": false
            }
        },
        "parse-glob": {
            "name": "parse-glob",
            "severity": "high",
            "isDirect": false,
            "via": [
                "glob-base"
            ],
            "effects": [
                "micromatch"
            ],
            "range": ">=2.1.0",
            "nodes": [
                "node_modules/parse-glob"
            ],
            "fixAvailable": true
        },
        "plupload": {
            "name": "plupload",
            "severity": "moderate",
            "isDirect": true,
            "via": [
                {
                    "source": 1067501,
                    "name": "plupload",
                    "dependency": "plupload",
                    "title": "Code injection in plupload",
                    "url": "https://github.com/advisories/GHSA-rp2c-jrgp-cvr8",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-75",
                        "CWE-434"
                    ],
                    "cvss": {
                        "score": 4.2,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:U/C:L/I:L/A:N"
                    },
                    "range": "<2.3.9"
                }
            ],
            "effects": [],
            "range": "<2.3.9",
            "nodes": [
                "node_modules/plupload"
            ],
            "fixAvailable": {
                "name": "plupload",
                "version": "2.3.9",
                "isSemVerMajor": false
            }
        },
        "prismjs": {
            "name": "prismjs",
            "severity": "high",
            "isDirect": true,
            "via": [
                {
                    "source": 1067401,
                    "name": "prismjs",
                    "dependency": "prismjs",
                    "title": "Cross-site Scripting in Prism",
                    "url": "https://github.com/advisories/GHSA-3949-f494-cm99",
                    "severity": "high",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 7.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:H/PR:N/UI:R/S:C/C:H/I:L/A:L"
                    },
                    "range": ">=1.14.0 <1.27.0"
                },
                {
                    "source": 1081996,
                    "name": "prismjs",
                    "dependency": "prismjs",
                    "title": "prismjs Regular Expression Denial of Service vulnerability",
                    "url": "https://github.com/advisories/GHSA-hqhp-5p83-hx96",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-400"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:U/C:N/I:N/A:H"
                    },
                    "range": "<1.25.0"
                }
            ],
            "effects": [],
            "range": "<=1.26.0",
            "nodes": [
                "node_modules/prismjs"
            ],
            "fixAvailable": {
                "name": "prismjs",
                "version": "1.29.0",
                "isSemVerMajor": false
            }
        },
        "qunit": {
            "name": "qunit",
            "severity": "high",
            "isDirect": true,
            "via": [
                "chokidar",
                "findup-sync"
            ],
            "effects": [],
            "range": "2.4.1 - 2.6.1",
            "nodes": [
                "node_modules/qunit"
            ],
            "fixAvailable": true
        },
        "socket.io-parser": {
            "name": "socket.io-parser",
            "severity": "critical",
            "isDirect": false,
            "via": [
                {
                    "source": 1085041,
                    "name": "socket.io-parser",
                    "dependency": "socket.io-parser",
                    "title": "Insufficient validation when decoding a Socket.IO packet",
                    "url": "https://github.com/advisories/GHSA-qm95-pgcg-qqfq",
                    "severity": "critical",
                    "cwe": [
                        "CWE-20",
                        "CWE-1287"
                    ],
                    "cvss": {
                        "score": 9.8,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
                    },
                    "range": ">=3.4.0 <3.4.2"
                },
                {
                    "source": 1085042,
                    "name": "socket.io-parser",
                    "dependency": "socket.io-parser",
                    "title": "Insufficient validation when decoding a Socket.IO packet",
                    "url": "https://github.com/advisories/GHSA-qm95-pgcg-qqfq",
                    "severity": "critical",
                    "cwe": [
                        "CWE-20",
                        "CWE-1287"
                    ],
                    "cvss": {
                        "score": 9.8,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
                    },
                    "range": "<3.3.3"
                }
            ],
            "effects": [],
            "range": ">=3.4.0 <3.4.2 || <3.3.3",
            "nodes": [
                "node_modules/socket.io-client/node_modules/socket.io-parser",
                "node_modules/socket.io-parser"
            ],
            "fixAvailable": true
        },
        "tinymce": {
            "name": "tinymce",
            "severity": "moderate",
            "isDirect": true,
            "via": [
                {
                    "source": 1067561,
                    "name": "tinymce",
                    "dependency": "tinymce",
                    "title": "Cross-site scripting vulnerability in TinyMCE plugins",
                    "url": "https://github.com/advisories/GHSA-r8hm-w5f7-wj39",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-64",
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
                    },
                    "range": "<5.10.0"
                },
                {
                    "source": 1067575,
                    "name": "tinymce",
                    "dependency": "tinymce",
                    "title": "Cross-site scripting vulnerability in TinyMCE",
                    "url": "https://github.com/advisories/GHSA-5h9g-x5rv-25wg",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.1,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:R/S:C/C:L/I:L/A:N"
                    },
                    "range": "<5.9.0"
                },
                {
                    "source": 1085198,
                    "name": "tinymce",
                    "dependency": "tinymce",
                    "title": "Cross-site scripting vulnerability in TinyMCE alerts",
                    "url": "https://github.com/advisories/GHSA-gg8r-xjwq-4w92",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 5.4,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:L/UI:R/S:C/C:L/I:L/A:N"
                    },
                    "range": "<5.10.7"
                }
            ],
            "effects": [],
            "range": "<=5.10.6",
            "nodes": [
                "node_modules/tinymce"
            ],
            "fixAvailable": {
                "name": "tinymce",
                "version": "5.10.7",
                "isSemVerMajor": false
            }
        },
        "underscore": {
            "name": "underscore",
            "severity": "critical",
            "isDirect": true,
            "via": [
                {
                    "source": 1084602,
                    "name": "underscore",
                    "dependency": "underscore",
                    "title": "Arbitrary Code Execution in underscore",
                    "url": "https://github.com/advisories/GHSA-cf4h-3jhx-xvhq",
                    "severity": "critical",
                    "cwe": [
                        "CWE-94"
                    ],
                    "cvss": {
                        "score": 9.8,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H"
                    },
                    "range": ">=1.3.2 <1.12.1"
                }
            ],
            "effects": [],
            "range": "1.3.2 - 1.12.0",
            "nodes": [
                "node_modules/underscore"
            ],
            "fixAvailable": {
                "name": "underscore",
                "version": "1.13.6",
                "isSemVerMajor": false
            }
        },
        "video.js": {
            "name": "video.js",
            "severity": "moderate",
            "isDirect": true,
            "via": [
                {
                    "source": 1085152,
                    "name": "video.js",
                    "dependency": "video.js",
                    "title": "Cross-site Scripting in video.js",
                    "url": "https://github.com/advisories/GHSA-pp7m-6j83-m7r6",
                    "severity": "moderate",
                    "cwe": [
                        "CWE-79"
                    ],
                    "cvss": {
                        "score": 6.5,
                        "vectorString": "CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:L/I:L/A:N"
                    },
                    "range": "<7.14.3"
                }
            ],
            "effects": [],
            "range": "<7.14.3",
            "nodes": [
                "node_modules/video.js"
            ],
            "fixAvailable": {
                "name": "video.js",
                "version": "7.20.3",
                "isSemVerMajor": true
            }
        }
    },
    "metadata": {
        "vulnerabilities": {
            "info": 0,
            "low": 4,
            "moderate": 8,
            "high": 12,
            "critical": 3,
            "total": 27
        },
        "dependencies": {
            "prod": 144,
            "dev": 628,
            "optional": 18,
            "peer": 0,
            "peerOptional": 0,
            "total": 771
        }
    }
}

