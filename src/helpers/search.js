/**
 * KMP algorithm
 * @param {string} txt
 * @param {string} pattern
 */
function KMPcheck(txt, pattern) {
    if (pattern.length == 0) {
        return 0;
    }
    let j = 0,
        next = getPrefix(pattern);
    for (let i = 0; i < txt.length; i++) {
        while (j > 0 && txt.charAt(i) != pattern.charAt(j)) {
            j = next[j - 1];
        }
        if (txt.charAt(i) == pattern.charAt(j)) {
            j++;
            if (j == pattern.length) {
                return i - j + 1;
            }
        }
    }
    return -1;
}

/**
 * compute longest prefix-suffix array for KMP algorithm
 * @param {string} pattern
 */
function getPrefix(pattern) {
    // base case for 1-length pattern
    let ans = [0];
    for (let i = 1; i < pattern.length; i++) {
        let j = ans[i - 1];
        while (j > 0 && pattern.charAt(i) != pattern.charAt(j)) {
            // if not then reset to previous state
            j = ans[j - 1];
        }
        if (pattern.charAt(i) == pattern.charAt(j)) {
            j++;
        }
        ans.push(j);
    }
    return ans;
}

function showAll() {
    // get all searchable Elements
    const items = document.querySelectorAll('div[search-name]');
    // only show matched Elements
    items.forEach((item) => {
        item.removeAttribute('aria-hidden');
    });
    return;
}

// Search by Name
export default function search(val) {
    if (!val || val.length < 1) {
        showAll();
    }
    val = val.toLowerCase();
    // get all searchable Elements
    const items = document.querySelectorAll('div[search-name]');
    // only show matched Elements
    items.forEach((item) => {
        let name = item.getAttribute('search-name').toLowerCase();
        if (KMPcheck(name, val) >= 0) {
            item.removeAttribute('aria-hidden');
        } else {
            item.setAttribute('aria-hidden', true);
        }
    });
}
