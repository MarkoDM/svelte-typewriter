import { typingInterval } from '@svelte-typewriter/helpers'
import type { TypewriterEffectFn } from '@svelte-typewriter/types'

const writeEffect: TypewriterEffectFn = async ({ currentNode, text }, options) => {
	currentNode.classList.add('typing')
	for (let index = 0; index <= text.length; index++) {
		const char = text[index]
		char === '<' && (index = text.indexOf('>', index))
		currentNode.innerHTML = text.slice(0, index)
		await typingInterval(options.interval)
	}
	currentNode.nextSibling !== null && currentNode.classList.length == 1
		? currentNode.removeAttribute('class')
		: currentNode.classList.remove('typing')
}

export { writeEffect }
