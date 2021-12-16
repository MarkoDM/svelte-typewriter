const filterOutStaticElements = child => child.dataset.static === undefined

/** @type {import(types').GetFirstNonStaticChild} */
const getFirstNonStaticChild = node => {
	const [firstNonStaticChild] = [...node.children].filter(filterOutStaticElements)
    return firstNonStaticChild
}

export { getFirstNonStaticChild }