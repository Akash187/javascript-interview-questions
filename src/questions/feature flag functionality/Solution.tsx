import { Button, Code, Stack, Title } from '@mantine/core'

const INPUT_CODE = `
getFeatureState("show-pricing-v2")
  .then(function(isEnabled) {
    if (isEnabled) {
      showPricingV2();
    } else {
      showOldPricing();
    }
});

getFeatureState("show-redesigned-dialog")
  .then(function(isEnabled) {
    if (isEnabled) {
      showRedesignedDialog();
    }
});
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
				href="https://www.devtools.tech/questions/how-to-implement-feature-flag-functionality-atlassian-frontend-interview-question/submissions/uXz6Y6v89huR3Gu2bglQ?utm_source=social-share"
			>
				Solution on Devtools
			</Button>
		</Stack>
	)
}
export default Solution
