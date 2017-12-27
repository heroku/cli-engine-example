import Bar from './bar'


test('ok', async () => {
  const {stdout} = await Bar.mock()
  expect(stdout).toEqual('running bar command\n')
})
