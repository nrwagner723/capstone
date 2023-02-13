let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '')

export const INITIAL_EVENTS = []

export function createEventId() {
  return String(eventGuid++)
}
