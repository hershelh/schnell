export {}

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)

    counter.increment()

    expect(counter.count).toBe(1)
  })
})
