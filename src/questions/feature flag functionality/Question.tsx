import { Code, List, Stack, Text, Title } from '@mantine/core'

const Question = () => {
	return (
		<Stack gap="md" maw={720}>
			<Text>
				In this question, we need to implement a functionality that can be used
				to show different features to different users. It is commonly known as
				A/B testing. We need to build a common utility on frontend that can be
				used by the entire web-app to get the status of a feature flag. Assume
				that the BE is pre-built and a mock function is provided for it.
			</Text>
			<Title order={3}>Functional Requirements</Title>
			<List>
				<List.Item>
					<Code>getFeatureState</Code> should return the value of the provided
					feature flag.
				</List.Item>
				<List.Item>
					<Code>getFeatureState</Code> should support caching with a{' '}
					<Code>ttl</Code> and minimize calls to backend APIs.
				</List.Item>
			</List>
			<Title order={3}>Syntax</Title>
			<Code
				block
			>{`getFeatureState(featureName: string, defaultValue: boolean): Promise<boolean>;`}</Code>
			<Title order={3}>Arguments</Title>
			<List>
				<List.Item>
					<Code>featureName (string)</Code>: The name of the feature flag for
					which we need the status.
				</List.Item>
				<List.Item>
					<Code>defaultValue (boolean)</Code>: The optional default value that
					would be returned by the utility function in case of error or as a
					fallback.
				</List.Item>
			</List>
			<Title order={3}>Return</Title>
			<List>
				<List.Item>
					A promise where then callback receives the feature flag value or the
					provided default value.
				</List.Item>
			</List>
		</Stack>
	)
}
export default Question
