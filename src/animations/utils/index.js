/**
 * range
 *  generate a range of [start,end]
 * @param {number || string} start
 * @param {number || string} end
 * @param {Array} step
 */
export const range = (start, end, step = 1) => {
    let ans = [];
    let type_start = typeof start;
    let type_end = typeof end;
    if (type_start == 'undefined' || type_end == 'undefined') {
        throw TypeError('Must have start and end!');
    } else if (type_start != type_end) {
        throw TypeError('start and end must have the same type!');
    }
    if (start > end) {
        step = -step;
    }
    if (type_start == 'number') {
        while (step > 0 ? end >= start : end <= start) {
            ans.push(start);
            start += step;
        }
    } else if (type_start == 'string') {
        if (start.length != 1 || end.length != 1) {
            throw TypeError('Only strings with one character are supported.');
        }
        start = start.charCodeAt(0);
        end = end.charCodeAt(0);
        while (step > 0 ? end >= start : end <= start) {
            ans.push(String.fromCharCode(start));
            start += step;
        }
    } else {
        throw TypeError('Only string and numbers are supported.');
    }
    return ans;
};

/**
 * Clamp
 *  clamp number into [lower,upper]
 * @param {Number} number
 * @param {Number} lower
 * @param {Number} upper
 */
export const clamp = (number, lower, upper) => {
    if (!Number.isNaN(number)) {
        if (upper !== undefined) {
            number = number <= upper ? number : upper;
        }
        if (lower !== undefined) {
            number = number >= lower ? number : lower;
        }
    }
    return number;
};

/**
 * Swap
 *  swap arr[i] with arr[j]
 * @param {Array} arr
 * @param {Number} i
 * @param {Number} j
 */
export const swap = (arr, i, j) => {
    if (isNaN(i) || isNaN(j)) {
        throw TypeError('i or j must be Number!');
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
};

/**
 * Move item in Array at i to j
 * @param {Array} arr
 * @param {Number}  i source index
 * @param {Number} j  destination index
 */
export const move = (arr, i, j) => {
    const item_to_move = arr[i];
    const n = arr.length;
    const diff = i - j;
    if (diff > 0) {
        // move left
        return [
            ...arr.slice(0, j),
            item_to_move,
            ...arr.slice(j, i),
            ...arr.slice(i + 1, n),
        ];
    } else if (diff < 0) {
        // move right
        return [
            ...arr.slice(0, i),
            ...arr.slice(i + 1, j + 1),
            item_to_move,
            ...arr.slice(j + 1, n),
        ];
    }
    return arr;
};

/**
 * randomRange
 * return random number in [min,max]
 * @param {Number} min
 * @param {Number} max
 */
export const randomRange = (min, max) => {
    return (max - min + 1) * Math.random() + min;
};

/**
 * Shuffle an Array in-place
 * Fisher-Yates algorithm
 * @param {Array} arr
 */
export const shuffle = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr must be an Array.');
    }
    const n = arr.length;
    let i = 0;
    while (i <= n - 2) {
        let j = Math.floor(randomRange(i, n - 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
    }
    return arr;
};

export const copyArray = (src, dest) => {
    let idx = -1,
        length = src.length;
    dest = dest || Array(length);
    while (++idx < length) {
        dest[idx] = src[idx];
    }
    return dest;
};

/**
 * Shuffle an Array and return new shuffled Array
 * @param {Array} arr
 */
export const shuffleNew = (arr) => {
    return shuffle(copyArray(arr));
};
