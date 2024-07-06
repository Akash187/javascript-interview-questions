import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
camelCaseKeys({ total_questions: 200, total_users: 10000 });
// => { totalQuestions: 200, totalUsers: 10000 }

camelCaseKeys({
  total_questions: 200,
  social_handles: { youtube_channel: 'youtube.com/devtoolstech' },
});
// => { totalQuestions: 200, socialHandles: { youtubeChannel: 'youtube.com/devtoolstech' } }

camelCaseKeys([
  { total_questions: 200 },
  { total_users: 10000, social_handles: { youtube_channel: 'youtube.com/devtoolstech' }}
]);
/*
[
  { totalQuestions: 200 },
  { totalUsers: 10000, socialHandles: { youtubeChannel: 'youtube.com/devtoolstech' }}
]
*/
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
				href="https://devtools.tech/questions/implement-a-function-to-convert-all-object-keys-to-camel-case-or-javascript-interview-question/submissions/4emarycmRV5VsRPgB7Ol"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
