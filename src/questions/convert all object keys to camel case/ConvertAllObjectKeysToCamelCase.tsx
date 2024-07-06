import { Button, Group, ScrollArea, Stack, Tabs, Title } from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'
import BookmarkIcon from '../../components/BookmarkIcon'

const ConvertAllObjectKeysToCamelCase = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Group gap="xs">
					<Title order={3}>Convert All Object Keys To Camel Case</Title>
					<BookmarkIcon />
				</Group>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/implement-a-function-to-convert-all-object-keys-to-camel-case-or-javascript-interview-question---qid---9E4Ju40HMV36ksRPq9oF"
					target="_blank"
				>
					Original Question Link
				</Button>
			</Group>
			<Tabs value={activeTab} onChange={setActiveTab}>
				<Tabs.List>
					<Tabs.Tab value="question">Question</Tabs.Tab>
					<Tabs.Tab value="solution">Solution</Tabs.Tab>
					<Tabs.Tab value="code">Code</Tabs.Tab>
				</Tabs.List>

				<ScrollArea>
					<Tabs.Panel py="md" value="question">
						<Question />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="solution">
						<Solution />
					</Tabs.Panel>
					<Tabs.Panel py="md" value="code">
						<Code />
					</Tabs.Panel>
				</ScrollArea>
			</Tabs>
		</Stack>
	)
}
export default ConvertAllObjectKeysToCamelCase
