import { CodeHighlightTabs } from '@mantine/code-highlight'
import '@mantine/code-highlight/styles.css'
import { IconBrandJavascript } from '@tabler/icons-react'

const jsCode = `
const SAMPLE_FEATURES = {
  show_dialog_box: true,
  enable_new_pricing: true,
};

const cache = {}

// returns the state of *all* features for the current user
function fetchAllFeatures() {
  // mocking the fetch API call
  return new Promise((resolve) => {
    setTimeout(() => resolve(SAMPLE_FEATURES), 100);
  });
}

function cacheData(key, value) {
  localStorage.setItem(key, JSON.stringify({ value, ttl: Date.now() + 60000 }))
}

// DO NOT CHANGE THE FUNCTION NAME
function getFeatureState(featureName, defaultValue) {
    return new Promise((resolve, reject) => {
      const data = JSON.parse(localStorage.getItem(featureName))
      if(data && data.ttl > Date.now()){
        console.log("Cache Hit.")
        resolve(data.value)
      }

      setTimeout(() => {
        if (featureName in SAMPLE_FEATURES){
          cacheData(featureName, SAMPLE_FEATURES[featureName])
          resolve(SAMPLE_FEATURES[featureName])
        }else{
          cacheData(featureName, defaultValue)
          reject(defaultValue)
        }
      }, 1000);
    })
}
`

const Code = () => {
	const jsIcon = <IconBrandJavascript size={18} />
	return (
		<CodeHighlightTabs
			code={[
				{
					fileName: 'index.js',
					code: jsCode,
					language: 'js',
					icon: jsIcon
				}
			]}
		/>
	)
}
export default Code
