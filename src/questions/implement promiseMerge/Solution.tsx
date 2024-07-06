import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
cons value = await promiseMerge(Promise.resolve(1), Promise.resolve(2));
// => 3

cons value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve(".tech"));
// => devtools.tech

cons value = await promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6]), Promise.resolve([7, 8, 9]));
// => [1,2,3,4,5,6,7,8,9]

cons value = await promiseMerge(Promise.resolve({ a: 1 }), Promise.resolve({ b: 2 }), Promise.resolve({ c: 3 }));
// => { a: 1, b: 2, c: 3};

cons value = await promiseMerge(Promise.resolve(true), Promise.resolve(false));
// => false

cons value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve(1));
// => rejects with TypeError

cons value = await promiseMerge(Promise.resolve("devtools"), Promise.resolve([1, 2]));
// => rejects with TypeError

promiseMerge(Promise.resolve(new Set()), Promise.resolve(new Set()))
// => rejects with TypeError

cons value = await promiseMerge();
// => rejects with TypeError
`

const Solution = () => {
	return (
		<Stack>
			<Title order={3}>Input and Result</Title>
			<Code block>{INPUT_CODE}</Code>
			<Button
				style={{ alignSelf: 'flex-start' }}
				component="a"
				target="_blank"
				href="https://devtools.tech/questions/implement-promisemerge-or-frontend-problem-solving-or-javascript/submissions/rA4WkUs4f8VHxNXpyY5b"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
