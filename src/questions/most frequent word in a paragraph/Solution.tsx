import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
const text = 'Bob hit a ball, the hit ball flew far after it was hit.';

const answer = mostUsedWord(text); 
// answer => hit 

const text = 'Bob hit a ball, the hit ball flew far after it was hit.';
const bannedWords = ['hit'];

const answer = mostUsedWord(text, bannedWords);
// answer => ball
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
				href="https://devtools.tech/questions/how-to-find-the-most-frequent-word-in-a-paragraph-frontend-problem-solving-or-javascript/submissions/0B0AcQfDKQlLCTsDeIhK"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
