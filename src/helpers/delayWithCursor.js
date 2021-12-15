
import { sleep } from './sleep'
import { getFirstNonStaticChild } from '../helpers/getFirstNonStaticChild'

/** @type {import(types').DelayWithCursor} */
const delayWithCursor = async (node, interval) => {
    const firstChild = getFirstNonStaticChild(node);
    if (firstChild) {
        firstChild.textContent = ''
        firstChild.classList.add('typing')
        await sleep(interval)
        firstChild.classList.remove('typing')
    }
}

export { delayWithCursor }