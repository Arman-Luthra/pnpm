import path from 'node:path'

import baseConfig from '../pnpm11/__utils__/jest-config/config.js'

// Local verification config: same as the @pnpm/jest-config preset but without
// the with-registry globalSetup (the exercised test never contacts the
// registry, and the registry server needs a Rust build).
export default {
  ...baseConfig,
  rootDir: path.join(import.meta.dirname, '..', 'pnpm11', 'pnpm'),
  collectCoverage: false,
}
