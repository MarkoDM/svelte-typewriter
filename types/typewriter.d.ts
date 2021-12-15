interface TypewriterElement {
	currentNode: Element
	text: string
}

interface TypewriterOptions {
	interval: number | number[]
	cascade: boolean
	loop: boolean | number
	loopRandom: boolean | number
	cursor: boolean | string
	delay: number
	delayWithCursor: boolean
	dispatch: (type: string, detail?: any) => void
}

type TypewriterEffectFn = (element: TypewriterElement, options: TypewriterOptions) => Promise<void>

type TypewriterMainFn = (node: Element, options: TypewriterOptions) => Promise<void>

type TypewriterModeFn = (elements: TypewriterElement[], options: TypewriterOptions) => Promise<void>

export {
	TypewriterElement,
	TypewriterOptions,
	TypewriterEffectFn,
	TypewriterMainFn,
	TypewriterModeFn
}
