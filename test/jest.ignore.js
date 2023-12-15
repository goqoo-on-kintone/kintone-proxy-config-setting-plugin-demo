/* eslint-disable  @typescript-eslint/no-empty-function */

// Ignore kintone object
global.kintone = {
  events: { on() {}, off() {} },
  app: { getId() {}, record: { get() {} } },
}
// Add dummy location.hostname
global.location = { hostname: 'localhost' }

global.window = {}
