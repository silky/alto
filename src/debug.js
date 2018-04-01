export const DEBUG = location.hash === '#debug'

export default {
  log(...args) {
    if (!DEBUG) {
      return
    }
    console.log(...args)
  }
}
