const utils = {
  splitMessage1: () => {
    /*  complexity: O(n * log(n)/log(10))
     *  Step1: detect min number of msg chuck then get min size of indicator
     *  Step2: while increase size of indicator try to separate message to chunks
     *  Step3: stop if found anwser or no anwser
     * */
  },
  splitMessage2: () => {
    /* complexity: O(n^2)
     * Step1: split message to chunks with dump indicators
     * Step2: try to fix indicator and shift words
      * */
  },
  splitMessage: (msg, msgSize) => {
    /*
     * complexity: O(n^2)
     * while split message to chunks with dump indicators,
     * try to fix indicator and shift words
      * */
    const words = []
    let startAt = 0
    // split message into words
    for (let i = 0; i < msg.length; i += 1) {
      if (msg[i + 1] === ' ' || msg[i + 1] === undefined) {
        const word = msg.slice(startAt, i + 1)
        if (word) words.push(word)
        startAt = i + 2
      }
    }
    const elems = []
    let index = 0
    while (words.length > 0) {
      // create new elem
      if (!elems[index]) {
        const indicator = `${index + 1}/${index + 1}`
        elems[index] = { words: [], sum: indicator.length, indicator }
      }
      // add word to elem
      const elem = elems[index]
      while (words[0] && elem.sum + words[0].length + 1 <= msgSize) {
        elem.sum += words[0].length + 1
        elem.words.push(words.shift())
      }
      // correct indicator and shift word if elem's len violates constraint
      for (let i = 0; i < elems.length; i += 1) {
        const curElem = elems[i]
        const prevIndicatorLen = curElem.indicator.length
        curElem.indicator = `${i + 1}/${elems.length}`
        curElem.sum += curElem.indicator.length - prevIndicatorLen
        const nextElem = elems[i + 1]
        while (curElem.sum > msgSize) {
          const word = curElem.words.pop()
          curElem.sum -= (word.length + 1)
          if (nextElem) {
            nextElem.words.unshift(word)
            nextElem.sum += (word.length + 1)
          } else {
            words.unshift(word)
          }
        }
        if (curElem.words.length === 0) {
          throw new Error('No answer')
        }
      }
      const lastElem = elems[elems.length - 1]
      // dont have word or elem's len does not satisfy constraint
      if (words[0] && lastElem.sum + words[0].length + 1 <= msgSize) continue
      index += 1
    }
    return elems
  },
}

export default utils
