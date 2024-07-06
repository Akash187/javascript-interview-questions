import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
let value = { a: 1 };
let other = { a: 1 };

deepEqual(value, other);
// => true

value = { a: { b: { c: { d: 2 } } } };
other = window.structuredClone(value);

deepEqual(value, other);
// => true

value = { a: 2 };
other = { a: 3 };

deepEqual(value, other);
// => false  

deepEqual();
// => true

value = { a: 1 };
other = null;

deepEqual(value, other);
// => false

value = { a: 1 };
other = undefined

deepEqual(value, other);
// => false

value = { a: 1 };

deepEqual(value);
// => false
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
				href="https://www.devtools.tech/questions/how-to-check-deep-equality-between-javascript-objects-or-zeta-frontend-interview-question/submissions/7vuB4aRz1BGMveS9hWZg?utm_source=social-share"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
