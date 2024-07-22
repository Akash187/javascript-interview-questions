import {
	Badge,
	Button,
	Group,
	ScrollArea,
	Stack,
	Tabs,
	Title
} from '@mantine/core'
import Solution from './Solution'
import { useState } from 'react'
import Question from './Question'
import Code from './Code'

const InvokeCallbackAtmostNTimes = () => {
	const [activeTab, setActiveTab] = useState<string | null>('question')
	return (
		<Stack>
			<Group justify="space-between" gap="lg">
				<Stack gap="xs">
					<Title order={3}>
						Implement a function to split an array into groups of a certain
						length
					</Title>
					<Group>
						<Badge color="green" size="md">
							Beginner
						</Badge>
						<Badge color="teal" size="md">
							Lodash Polyfill
						</Badge>
						<Badge color="teal" size="md">
							Closure
						</Badge>
					</Group>
				</Stack>
				<Button
					component="a"
					href="https://devtools.tech/questions/s/implement-a-function-that-accepts-a-callback-and-restricts-its-invocation-to-at-most-n-times-or-lodash-polyfills-or-frontend-problem-solving---qid---ge3cwzQQrMlXt6VwDpNg
					"
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
export default InvokeCallbackAtmostNTimes
