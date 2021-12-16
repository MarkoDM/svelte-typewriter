import { sleep } from './sleep'
import { getFirstNonStaticChild } from '../helpers/getFirstNonStaticChild'

/** @type {import(types').DelayWithCursor} */
const delayWithCursor = async (node, interval) => {
    const firstNonStaticChild = getFirstNonStaticChild(node);
    if (firstNonStaticChild) {
        firstNonStaticChild.textContent = ''
        firstNonStaticChild.classList.add('typing')
        await sleep(interval)
        firstNonStaticChild.classList.remove('typing')
    }
}

export { delayWithCursor }