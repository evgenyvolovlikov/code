// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum_first = function (nums, target) {        // nums = [2, 3, 5, 7] target = 12
	for (let i = 0; i < nums.length; i++) {         // i = 0 ||| i = 1 ||| i = 2
		for (let j = i + 1; j < nums.length; j++) { // j = 1 | j = 2 | j = 3 ||| j = 2 | j = 3  ||| j = 3
			const sum = nums[i] + nums[j];          // sum = 2 + 3 = 5 | 2 + 5 = 8 | 2 + 7 = 9  ||| 3 + 5 = 8 | 3 + 7 = 10 ||| 5 + 7 Done 
			if (sum === target) return [i, j];      // false | false | false ||| false | false  ||| 7 === 7 true
		}
	}
};

const twoSum_first = twoSum_first([2, 3, 5, 7], 12);
console.log(twoSum_first);

var twoSum_second = function (nums, target) {       // nums = [2, 3, 5, 7] target = 12
    for (let i = 0; i < nums.length; i++) {         // i = 0 ||| 1 ||| 2

        let numberToFind = target - nums[i];        // numberToFind = 10  ||| numberToFind = 9 ||| numberToFind = 7
        
		for (let j = i + 1; j < nums.length; j++) { // j = 1 | j = 2 | j = 3 ||| j = 2 | j = 3 ||| j = 3
			if (numberToFind === nums[j]) {         // 10 === 3 | 10 === 5 | 10 === 7 ||| 9 === 5 | 9 === 7 ||| 7 === 7 Done
				return [i, j];                      // i = 2, j = 3 = [2, 3]
			}
        }

	}
};

const twoSum_second = twoSum_second([2, 3, 5, 7], 12);
console.log(twoSum_second);

var twoSum_third = function (nums, target) {    // nums = [2, 3, 5, 7] target = 12
    let hashMap = {}                            // {} | {10: 0} | {10: 0, 9: 1} | {10: 0, 9: 1, 7: 2}

    for (let i = 0; i < nums.length; i++) {     // i = 0 | i = 1 | i = 2 | i = 3
        const hashMapKey = hashMap[nums[i]];    // undefined | undefined | undefined | 2

        // >= если свойство равно 0 то оно прошло проверку,
        // пример: {0: 5}, иначе условие false
        if (hashMapKey >= 0) {                  // false | false | false | true
            return [hashMapKey, i]              // [2, 3]
        } else {
            const ntf = target - nums[i];       // 12 - 2 = 10 | 12 - 3 = 9 | 12 - 5 = 7
            hashMap[ntf] = i                    // { 10: 0 } | {10: 0, 9: 1} | {10: 0, 9: 1, 7: 2}
        }
    }
}

const twoSum_third = twoSum_third([2, 3, 5, 7], 12);
console.log(twoSum_third);
