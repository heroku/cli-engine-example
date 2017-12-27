import JobsStart from './start'

test('ok', async () => {
  const { stdout } = await JobsStart.mock()
  expect(stdout).toEqual('starting job... done\n')
})
