import { rng } from '@svelte-typewriter/helpers'
import { TypewriterElement } from '@svelte-typewriter/types'

type GetRandomText = (element: TypewriterElement[]) => TypewriterElement

const getRandomElement: GetRandomText = elements => {
	let alreadyChoosenTexts: any[] = []
	while (true) {
		const randomIndex = rng(0, elements.length)
		// After each iteration, avoid repeating the last text from the last iteration
		const isTextDifferentFromPrevious =
			typeof alreadyChoosenTexts === 'number' && randomIndex !== alreadyChoosenTexts
		const isTextFirstTime =
			Array.isArray(alreadyChoosenTexts) && !alreadyChoosenTexts.includes(randomIndex)
		const shouldDisplayText = isTextFirstTime || isTextDifferentFromPrevious
		if (shouldDisplayText) {
			isTextDifferentFromPrevious && (alreadyChoosenTexts = [])
			alreadyChoosenTexts.push(randomIndex)
			const randomText = elements[randomIndex]
			return randomText
		}
		const restartRandomizationCycle = alreadyChoosenTexts.length === elements.length
		restartRandomizationCycle && (alreadyChoosenTexts = alreadyChoosenTexts.pop())
	}
}

export { getRandomElement }
