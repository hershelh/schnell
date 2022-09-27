import '@testing-library/jest-dom'

beforeEach(() => {
  vi.useFakeTimers({
    // https://github.com/vitest-dev/vitest/issues/649
    toFake: ['setTimeout', 'clearTimeout'],
  })
})

afterEach(() => {
  vi.useRealTimers()
})
