const filterOutStaticElements = child => child.dataset.static === undefined

/** @type {import(types').GetFirstNonStaticChild} */
const getFirstNonStaticChild = (node) => {
	const children = [...node.children].filter(filterOutStaticElements)
    return children[0]
}

export { getFirstNonStaticChild }
