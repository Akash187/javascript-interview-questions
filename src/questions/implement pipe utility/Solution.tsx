import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
const getName = (object) => object.name;
const makeUpperCase = (string) => string.toUpperCase();
const slice = (string) => string.slice(0, 3);

const method = pipe(getName, makeUpperCase, slice);

const value = method({ name: 'devtools' });

console.log(value);
// DEV
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
				href="https://www.devtools.tech/questions/how-to-implement-pipe-utility-or-razorpay-interview-question-or-javascript/submissions/jIzili1ohqxFnMqtUcEO?utm_source=social-share"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
