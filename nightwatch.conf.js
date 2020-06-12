// Autogenerated by Nightwatch
// Refer to the online docs for more details: https://nightwatchjs.org/gettingstarted/configuration/
const Services = {}; loadServices()

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: '',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path: 'customCommands',

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  // See https://nightwatchjs.org/guide/#external-globals
  globals_path: '',

  webdriver: {},
  // "test_workers" : {"enabled" : true, "workers" : "auto"},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',
      // "default_path_prefix" : "/wd/hub",

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      },

      webdriver: {
        start_process: true,
        server_path: (Services.geckodriver ? Services.geckodriver.path : '')
      },
      live_output: false
    },

    'firefox.template': {
      desiredCapabilities: {
        browserName: 'firefox',
        alwaysMatch: {
          // Enable this if you encounter unexpected SSL certificate errors in Firefox
          // acceptInsecureCerts: true,
          'moz:firefoxOptions': {
            log: {
              level: 'trace'
            },
            args: [
              // '-headless',
              '-verbose'
              // "-headless",
              // "-no-remote"
            ],
            prefs: {
              'browser.cache.disk.enable': false,
              'browser.cache.disk.capacity': 0,
              'browser.cache.disk.smart_size.enabled': false,
              'browser.cache.disk.smart_size.first_run': false,
              'browser.sessionstore.resume_from_crash': false,
              'browser.startup.page': 0,
              'media.navigator.streams.fake': true,
              'media.navigator.permission.disabled': true,
              'device.storage.enabled': false,
              'media.gstreamer.enabled': false,
              'browser.startup.homepage': 'https://localhost',
              'browser.startup.firstrunSkipsHomepage': false,
              'extensions.update.enabled': false,
              'app.update.enabled': false,
              'network.http.use-cache': false,
              'browser.shell.checkDefaultBrowser': false
            }
          }
        },
        'moz:firefoxOptions': {
          // "log": {
          //  "level": "trace",
          // },
          args: [
            // '-headless',
            '-verbose'
            // "-headless",
            // "-no-remote"
          ],
          prefs: {
            'browser.cache.disk.enable': false,
            'browser.cache.disk.capacity': 0,
            'browser.cache.disk.smart_size.enabled': false,
            'browser.cache.disk.smart_size.first_run': false,
            'browser.sessionstore.resume_from_crash': false,
            'browser.startup.page': 0,
            'media.navigator.streams.fake': true,
            'media.navigator.permission.disabled': true,
            'device.storage.enabled': false,
            'media.gstreamer.enabled': false,
            'browser.startup.homepage': 'https://localhost',
            'browser.startup.firstrunSkipsHomepage': false,
            'extensions.update.enabled': false,
            'app.update.enabled': false,
            'network.http.use-cache': false,
            'browser.shell.checkDefaultBrowser': false,
            'javascript.options.showInConsole': true
          },
          log: { level: 'trace' }
        }
      }
    },

    'chrome.template': {
      desiredCapabilities: {
        browserName: 'chrome',
        // handleAlerts: true,
        loggingPrefs: {
          browser: 'ALL',
          driver: 'ALL',
          performance: 'ALL',
          server: 'ALL'
        },
        'goog:chromeOptions': {
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          // w3c: false,
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          /*
          prefs: {
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
            // "--headless",
            "no-sandbox": true,
            "allow-file-access-from-files": true,
            "use-fake-device-for-media-stream": true,
            "use-fake-ui-for-media-stream": true,
            // "--disable-translate",
            // "--no-process-singleton-dialog",
            // "--mute-audio",
            "use-file-for-fake-video-capture": "/mnt/1.y4m",
            "use-file-for-fake-audio-capture": "/mnt/1.wav",
            "disable-gesture-requirement-for-media-playback": true,
            "auto-select-desktop-capture-source": "Entire screen",
            "autoplay-policy=no-user-gesture-required":true,
            "no-user-gesture-required": true ,
            "ignore-certificate-errors": true
          },
          */
          args: [
            'no-sandbox',
            'ignore-certificate-errors',
            'allow-insecure-localhost',
            // "headless",
            'allow-file-access-from-files',
            'use-fake-device-for-media-stream',
            'use-fake-ui-for-media-stream',
            'disable-translate',
            'no-process-singleton-dialog',
            // "mute-audio",
            // "use-file-for-fake-video-capture=/mnt/1.y4m",
            // "use-file-for-fake-audio-capture=/mnt/1.wav",
            'disable-gesture-requirement-for-media-playback',
            'auto-select-desktop-capture-source="Entire screen"',
            'autoplay-policy=no-user-gesture-required',
            'no-user-gesture-required',
            'ignore-certificate-errors',
            // "enable-logging=/tmp/1.log",
            // "log-level=2",
            // "v=2"
            'disable-dev-shm-usage',
            'disable-gpu'
          ]
        }
      }
    },

    'chrome.video.template': {
      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // This tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          // w3c: false,
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          /*
          prefs: {
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
            // "--headless",
            "no-sandbox": true,
            "allow-file-access-from-files": true,
            "use-fake-device-for-media-stream": true,
            "use-fake-ui-for-media-stream": true,
            // "--disable-translate",
            // "--no-process-singleton-dialog",
            // "--mute-audio",
            "use-file-for-fake-video-capture": "/mnt/1.mjpeg",
            "use-file-for-fake-audio-capture": "/mnt/1.wav",
            "disable-gesture-requirement-for-media-playback": true,
            "auto-select-desktop-capture-source": "Entire screen",
            "autoplay-policy=no-user-gesture-required":true,
            "no-user-gesture-required": true ,
            "ignore-certificate-errors": truce
          },
          */
          args: [
            'no-sandbox',
            'ignore-certificate-errors',
            'allow-insecure-localhost',
            // "headless",
            'allow-file-access-from-files',
            'use-fake-device-for-media-stream',
            'use-fake-ui-for-media-stream',
            'disable-translate',
            'no-process-singleton-dialog',
            // "mute-audio",
            'use-file-for-fake-video-capture=/mnt/1.mjpeg',
            'use-file-for-fake-audio-capture=/mnt/1.wav',
            'disable-gesture-requirement-for-media-playback',
            'auto-select-desktop-capture-source="Entire screen"',
            'autoplay-policy=no-user-gesture-required',
            'no-user-gesture-required',
            'ignore-certificate-errors'
            // "whitelisted-ips"
            // "enable-logging=stderr",
            // "log-level=3",
            // "v=4"
          ]
        }
      }
    },

    'opera.template': {
      desiredCapabilities: {
        browserName: 'operablink',
        operaOptions: {
          // w3c: false
          args: [
            'verbose',
            'no-sandbox',
            'ignore-certificate-errors',
            'allow-insecure-localhost',
            // "headless",
            'allow-file-access-from-files',
            'use-fake-device-for-media-stream',
            'use-fake-ui-for-media-stream',
            'disable-translate',
            'no-process-singleton-dialog',
            // "--mute-audio",
            'use-file-for-fake-video-capture=/mnt/1.y4m',
            'use-file-for-fake-audio-capture=/mnt/1.wav',
            'disable-gesture-requirement-for-media-playback',
            'auto-select-desktop-capture-source="Entire screen"',
            'autoplay-policy=no-user-gesture-required',
            'no-user-gesture-required',
            'ignore-certificate-errors'
          ]
        }
      }
    },

    firefox: {
      extends: 'firefox.template',
      webdriver: {
        start_process: true,
        port: 4445,
        server_path: (Services.geckodriver ? Services.geckodriver.path : ''),
        cli_args: [
          // very verbose geckodriver logs
          // '-vv'
        ],
        log_path: 'logs'
      }
    },

    chrome: {
      extends: 'chrome.video.template',
      webdriver: {
        start_process: true,
        port: 9515,
        server_path: (Services.chromedriver ? Services.chromedriver.path : ''),
        cli_args: [
          // --verbose
        ],
        log_path: 'logs'
      }
    },
    // Nightwatch does not support local opera.. :(
    opera: {
      extends: 'opera.template',
      webdriver: {
        start_process: true,
        port: 9515,
        server_path: (Services.operadriver ? Services.operadriver.path : ''),
        cli_args: [
          // --verbose
        ],
        log_path: 'logs'
      }
    },

    'docker.grid.chrome': {
      extends: 'chrome.video.template',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // w3c: true
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        host: '${DOCKER_GRID_HOST}',
        port: '${DOCKER_GRID_PORT}',
        use_legacy_jsonwire: false,
        log_path: 'logs'
      }
    },

    'docker.grid.opera': {
      extends: 'opera.template',
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        port: 4444,
        host: 'localhost',
        use_legacy_jsonwire: true,
        log_path: 'logs'
      }
    },

    'docker.grid.firefox': {
      extends: 'firefox.template',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        host: '${DOCKER_GRID_HOST}',
        port: '${DOCKER_GRID_PORT}',
        use_legacy_jsonwire: false,
        log_path: 'logs'
      }
    },

    'k8s.grid.chrome': {
      extends: 'chrome.template',
      desiredCapabilities: {
        browserName: 'chrome',
        chromeOptions: {
          // w3c: true
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        host: '${K8S_GRID_HOST}',
        port: '${K8S_GRID_PORT}',
        username: '${K8S_GRID_USER}',
        access_key: '${K8S_GRID_KEY}',
        use_legacy_jsonwire: false,
        log_path: 'logs'
      }
    },
    // no support in the chart yet.. :-/
    'k8s.grid.opera': {
      extends: 'opera.template',
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        host: '${K8S_GRID_HOST}',
        port: '${K8S_GRID_PORT}',
        username: '${K8S_GRID_USER}',
        access_key: '${K8S_GRID_KEY}',
        use_legacy_jsonwire: true,
        log_path: 'logs'
      }
    },

    'k8s.grid.firefox': {
      extends: 'firefox.template',
      desiredCapabilities: {
        browserName: 'firefox',
        'moz:firefoxOptions': {
          args: [
            // '-headless',
            // '-verbose'
          ]
        }
      },
      webdriver: {
        start_process: false,
        default_path_prefix: '/wd/hub',
        host: '${K8S_GRID_HOST}',
        port: '${K8S_GRID_PORT}',
        username: '${K8S_GRID_USER}',
        access_key: '${K8S_GRID_KEY}',
        use_legacy_jsonwire: false,
        log_path: 'logs'
      }
    }
  }
}

function loadServices () {
  try {
    Services.seleniumServer = require('selenium-server')
  } catch (err) {}

  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {}

  try {
    Services.geckodriver = require('geckodriver')
  } catch (err) {}

  try {
    Services.operadriver = require('operadriver')
  } catch (err) {}
}
