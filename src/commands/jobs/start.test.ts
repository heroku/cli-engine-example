import JobsStart from './start'

test('ok', async () => {
  const { stdout } = await JobsStart.mock(['foobar'])
  expect(stdout).toEqual(`starting job: foobar... done\n`)
})
