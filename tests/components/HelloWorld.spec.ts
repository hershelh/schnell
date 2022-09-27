import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const { getByText } = render(HelloWorld, {
      props: {
        msg: 'Hello Vitest',
      },
    })
    expect(getByText('Hello Vitest')).toBeInTheDocument()
  })
})
