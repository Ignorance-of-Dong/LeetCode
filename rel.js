
// 求两数之和
var twoSum = function (nums, target) {
    var length = nums.length;
    var exist = {};
    for (var i = 0; i < length; i++) {
        if (exist[target - nums[i]] !== undefined) {
            return [exist[target - nums[i]], i];
        }
        exist[nums[i]] = i;
    }
};

// console.log(twoSum([3, 2, 3], 6))

/**
 * 解题思路：
 * 
 *  1. 确定数组的长度，进行遍历，外围创建一个对象用来存放数值和下标
 *  2. 判断如果 对象里面里有 【结果 - 数组每一个的值】 的键名 就 返回对象里键名所对应的值（也就是下标）
 *  3. 如果没有就往对象里面添加当前的值和下标
 *  4. 以此循环下去，直到找到 2 所满足的条件
 */


// 771. 宝石与石头
var numJewelsInStones = function (J, S) {
    var num = 0
    S.split('').forEach(res => {
        if (J.split('').indexOf(res) !== -1) {
            num += 1
        }
    })
    return num
};

// console.log(numJewelsInStones("aA", "aAAbbbb"))


// 1108. IP 地址无效化
var defangIPaddr = function (address) {
    let reg = /\./g
    return address.replace(reg, '[.]')
};

// console.log(defangIPaddr('11.22.33.55'))


// 1021. 删除最外层的括号
var removeOuterParentheses = function (S) {
    let num = 1;
    let float = 0
    let ret = '';
    for (let i = 0; i <= S.length - 1; i++) {
        if (S[i] === '(') {
            num++
        } else {
            num--
        }
        if (num === 1) {
            ret += S.slice(float + 1, i)
            float = i + 1
        }

    }
    return ret
};

// console.log(removeOuterParentheses('()()'))


/**
 * 解题思路：
 * 
 *  1. 遍历该字符串，判断如果遍历出来的每一项等于“（” 则让num + 1 否则 - 1
 *  2. 如果num 为 1 则说明匹配到了一套完整的括号
 *  3. 使用字符串截取 【截取位置 （ 第一次初始化float + 1， 匹配到完整的括号的下标 ）】，并且记录float的位置也就是上一次匹配到完整的括号的下标
 */




// 938. 二叉搜索树的范围和
var rangeSumBST = function (root, L, R) {
    if (root === null) {
        return 0
    }
    if (root.val > R) {
        return rangeSumBST(root.left, L, R)
    }
    if (root.val < L) {
        return rangeSumBST(root.right, L, R)
    }
    return root.val + rangeSumBST(root.right, L, R) + rangeSumBST(root.left, L, R)
};

let c = {
    val: 10,
    right: {
        val: 15,
        right: {
            val: 18,
            right: null,
            left: null
        },
        left: null
    },
    left: {
        val: 5,
        right: {
            val: 7,
            right: null,
            left: null
        },
        left: {
            val: 3,
            right: null,
            left: null
        }
    }
}
// console.log(rangeSumBST(c, 7, 15))



/**
 * 解题思路：
 * 
 *  1. 获取左树与右树之间的值并且相加
 *  2. 判断如果当前值大于右树则递归左树，小于左树递归右树
 *  3. 当然还有漏网之🐟【相等的情况】，这就交给下一步去做相等的情乱同时去左树和右树进行递归
 */

// 10 15 18 5 7 3

// 217. 存在重复元素
var containsDuplicate = function (nums) {
    let arr = []
    for (let i = 0; i <= nums.length - 1; i++) {
        if (arr.indexOf(nums[i]) === -1) {
            arr.push(nums[i])
        }
    }
    return arr.length === nums.length ? false : true
};

// console.log(containsDuplicate([1, 2, 3, 1]))



// 617. 合并二叉树
let t1 = {
    val: 1,
    right: { val: 2, right: null, left: null },
    left:
    {
        val: 3,
        right: null,
        left: { val: 5, right: null, left: null }
    }
}

let t2 = {
    val: 2,
    right:
    {
        val: 3,
        right: { val: 7, right: null, left: null },
        left: null
    },
    left:
    {
        val: 1,
        right: { val: 4, right: null, left: null },
        left: null
    }
}

var mergeTrees = function (t1, t2) {
    if (t1 && t2) {
        t1.val += t2.val
        t1.left = mergeTrees(t1.left, t2.left)
        t1.right = mergeTrees(t1.right, t2.right)
    }
    return t1
};

// console.log(mergeTrees(t1, t2))

/**
 * 解题思路：
 * 
 *  1. 根据题意是要将两棵树合并为一棵树，使用递归思想
 *  2. 以t1树为基础进行合并
 *  3. 使用递归，将左树进行递归合并，同理将右树进行递归合并
 */

// 832. 翻转图像
let A = [[1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0]]
var flipAndInvertImage = function (A) {
    let brr = []
    A.map(res => {
        brr.push(res.reverse().map(d => {
            return d = d === 0 ? 1 : 0
        }))
    })
    return brr
};

// console.log(flipAndInvertImage(A))

/**
 * 解题思路：
 * 
 *  1. 拿到数组后，先按照题意反转数组内的每一个数组
 *  2. 再将反转后的数组中的每一项进行修改所对应的数字0或1
 */


// 461. 汉明距离

let x = 97, y = 73
var hammingDistance = function (x, y) {
    let result = x ^ y;
    let num = 0;
    result.toString(2).split('').forEach(res => {
        if (res * 1 === 1) {
            num++
        }
    })
    return num;
};

// console.log(hammingDistance(x ,y))

/**
 * ^ 异或运算符 【运算规则： 两个操作数的位中，相同则结果为0，不同则结果为1。 完后将二进制转换为十进制，得出来的结果】
 * 异或运算符得出来的结果就是汉明距离
 * 
 * 扩展：
 * & 与位运算付 【运算规则： 将两个操作数转化为二进制进行比较 （比较规则： 两个操作数中位都为1，结果才为1，否则结果为0） 然后将得出的结果转换为十进制】
 * 汉明距离是使用在数据传输差错控制编码里面的，汉明距离是一个概念，它表示两个（相同长度）字对应位不同的数量
 */




// 226. 翻转二叉树 []
let s = {
    val: 4,
    right:
    {
        val: 7,
        right: { val: 9, right: null, left: null },
        left: { val: 6, right: null, left: null }
    },
    left:
    {
        val: 2,
        right: {
            val: 2,
            right: { val: 6666, right: null, left: null },
            left: { val: 777777, right: null, left: null }
        },
        left: { val: 1666666, right: null, left: null }
    }
}

// var invertTree = function (root) {
//     let s1 = {}
//     function sf(r, n) {
//         if (n === null) return root
//         r.val = n.val
//         r.left = sf({}, n.right)
//         r.right = sf({}, n.left)
//         return r
//     }
//     sf(s1, root)
//     return s1
// };

var invertTree = function (root) {
    if (root === null) return root
    let leftroot = invertTree(root.right)
    let rightroot = invertTree(root.left)
    root.left = leftroot
    root.right = rightroot
    return root
}

// console.log(invertTree(s))

/**
 * 该题主要使用递归思想，重新建树
 */

//657. 机器人能否返回原点
var judgeCircle = function (moves) {
    let lrcount = 0
    let udcount = 0
    moves.split('').forEach(res => {
        switch (res) {
            case 'R':
                lrcount++
                break;
            case 'L':
                lrcount--
                break;
            case 'U':
                udcount++
                break;
            case 'D':
                udcount--
                break;
        }
    })
    return (lrcount === 0 && udcount === 0) ? true : false
};

// console.log(judgeCircle("UD"))

/**
 * 解题思路：
 * 
 *  1. 为了避免冲突，我们使用两个变量来控制，一个是控制左右，一个是控制上下
 *  2. 最后同时判断这两个变量是否为0
 */



// 1051. 高度检查器
var heightChecker = function (heights) {
    let newObj = {}
    let newArr = []
    for (let i = 0; i <= heights.length - 1; i++) {
        if (newObj[heights[i]]) {
            newObj[heights[i]].push(heights[i])
        } else {
            newObj[heights[i]] = []
            newObj[heights[i]].push(heights[i])
        }
    }
    for (let i in newObj) {
        newArr.push(...newObj[i])
    }
    let count = 0
    for (let i = 0; i <= heights.length - 1; i++) {
        if (heights[i] !== newArr[i]) {
            count++
        }
    }
    return count
};

var heightChecker = function (heights) {
    let height = Array.from(heights);
    let arr = heights.sort(function (x, y) {
        return x - y
    })
    let times = 0;
    arr.forEach((item, index) => {
        if (arr[index] !== height[index]) { times++ }
    })
    return times
};

// console.log(heightChecker([1, 1, 4, 2, 1, 3]))

/**
 * 解题思路： 
 * 
 * 1. 主要是利用的数组排序
 * 2. 排序成功后，对比两个数组的不同之处
 * 3. 即可得出答案
 */


// 104. 二叉树的最大深度
let p = {
    val: 3,
    right:
    {
        val: 20,
        right:
        {
            val: 7,
            right: null,
            left: null
        },
        left:
        {
            val: 15,
            right: null,
            left: null
        }
    },
    left:
    {
        val: 9,
        right: null,
        left: null
    }
}


let g = {
    val: -8,
    right: { val: 7, right: null, left: null },
    left:
    {
        val: -6,
        right: null,
        left: { val: 6, right: [], left: null }
    }
}
var maxDepth = function (root) {
    if (root == null) {
        return 0;
    } else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};


// console.log(maxDepth(g))


/**
 * 解题思路：
 *  
 * 1. 计算二叉树的最大深度，
 * 2. 算出左树和右树的最大深度，进行比较取值，再把跟节点加上
 */

function transform(tranvalue) {
    let Company = ''
    let prefix = ''
    let last = tranvalue.length >= 5 ? 4 : (tranvalue.length == 3 ? 0 : 3)
    let count = 0
    switch (tranvalue.length) {
        case 7:
            Company = '万'
            prefix = tranvalue[0] + tranvalue[1] + tranvalue[2]
            break;
        case 6:
            Company = '万'
            prefix = tranvalue[0] + tranvalue[1]
            break;
        case 5:
            Company = '万'
            prefix = tranvalue[0]
            break;
        case 4:
            Company = '千'
            prefix = tranvalue[0]
            break;
        case 3:
            Company = ''
            prefix = tranvalue
            break;
        default:
            Company = '0'
            prefix = tranvalue[0]

    }
    let Quota = ''
    for (let i = tranvalue.length - last; i <= tranvalue.length - 1; i++) {         // 4 - 3
        if (tranvalue[i] >= 1) {
            count++
            if (count <= 1) {
                Quota += '.' + tranvalue[i]
            } else {
                Quota += tranvalue[i]
            }
        } else {
            Quota += ''
        }
    }
    return prefix + Quota + Company
}
// console.log(transform("3300"));



// 111. 二叉树的最小深度
var minDepth = function (root) {
    if (root == null) {
        return 0
    }
    if (root.left == null && root.right != null) {
        return minDepth(root.right) + 1
    }
    if (root.right == null && root.left != null) {
        return minDepth(root.left) + 1
    }
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    return Math.min(left, right) + 1
};


/**
 * 解题思路：
 * 
 * 1. 最小深度是指根节点到叶子节点之间为null的节点
 * 2. 为了计算空，我们需要排除非空的节点
 * 3. 如果左树为空，我们深层遍历计算右树
 * 4. 如果右树为空，我们深层遍历计算左树
 * 5. 直到两树都为空的情况下，我们去两树的最小值 + 1
 */



 // 977. 有序数组的平方

var sortedSquares = function (A) {
    return A.map(res => {return res * res}).sort((a, b) => { return a - b })
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]))

/**
 * 解题思路：
 * 
 * 1. 先计算数组每一项的平方，在将数组进行排序
 */



 // 728. 自除数
var selfDividingNumbers = function (left, right) {
    let arr = []
    
    for(let i = left; i <= right; i++) {
        if (i < 10) {
            arr.push(i)
        } else if(i > 10){
            let n = i.toString()
            let flag = true
            for (let j = 0; j < n.length; j++) {
                if (i % n[j] != 0) {
                    flag = false
                }
            }
            if (flag) {
                arr.push(i)
            }
        }
    }
    return [...arr]
};


// console.log(selfDividingNumbers(1, 22))

/**
 * 解题思路：
 * 
 * 1. 根据题意【题中给定上边界和下边界数字，计算这两边界中（含边界）的自然数（自除数 是指可以被它包含的每一位数除尽的数。）】
 * 2. 因此可以想象出，小于10的都是自然数，我们只需要i计算出大于10的自然数
 * 3. 将大于10（自除数不允许包含 0 ）转换成字符串，遍历，如果有一项被除不尽，则舍弃，否则添加到数组中
 */



 // 292. Nim 游戏
var canWinNim = function (n) {
    return n % 4 === 0 ? false : true
};

// console.log(canWinNim(2))


/**
 * 从题意中得知，你拿4的倍数，必输
 */


// 852. 山脉数组的峰顶索引
var peakIndexInMountainArray = function (A) {
    let max = Math.max.apply(null, A)
    for(let i = 0; i < A.length; i++) {
        if (A[i] === max) {
            return i
        }
    }
};


// console.log(peakIndexInMountainArray([8, 1, 0]))


// 476. 数字的补数
var findComplement = function (num) {
    let kut = num.toString(2)
    let l = ''
    for (let i = 0; i < kut.length; i++) {
        if(kut[i] == 1) {
            l += 0
        } else {
            l += 1
        }
    }
    return parseInt(l, 2)
};

// console.log(findComplement(1))


// 905. 按奇偶排序数组
var sortArrayByParity = function (A) {
    let Odd = []
    let Even = []
    for(let i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0 ){
            Even.push(A[i])
        } else {
            Odd.push(A[i])
        }
    }
    return [...Even, ...Odd]
};

// console.log(sortArrayByParity([3, 1, 2, 4]))



var reverseString = function (s) {
    for(let i = 0; i < s.length; i++) {
        if (i >= Math.ceil(s.length / 2)) return s
        let str1 = s[i]
        let str2 = s[(s.length - 1) - i]
        s[i] = str2
        s[s.length - 1 - i] = str1
    }
    return s
};

// console.log(reverseString(["h", "e", "l", "l", "o", "o", "o", "o"]))

/**
 * 解题思路：
 * 
 * 1. 由题意得知，反转数组。。。。
 * 2. 自然不能使用reverse
 * 3. 但是题目规定不能使用新的内存地址，因此我们不可以建立一个新的数组，也没必要建立其他的内存地址
 * 4. 所以我们只在原数组中操作
 * 5. 每次保存前位与后位相对应的值
 * 6. 进行一次交换，依次循环，但是我们不能让他一直循环下去，得将循环次数卡到数组的一半长度，否则做无用功
 */


// 557. 反转字符串中的单词 III
var reverseWords = function (s) {
    let Result = ''
    let arr = s.split(' ')
    let count = 0
    function reverseString(s) {
        for (let i = 0; i < s.length; i++) {
            if (i >= Math.ceil(s.length / 2)) return s
            let str1 = s[i]
            let str2 = s[(s.length - 1) - i]
            s[i] = str2
            s[s.length - 1 - i] = str1
        }
        return s
    };
    for( let i = 0; i < arr.length; i++) {
        count++
        let str = ''
        reverseString(arr[i].split('')).forEach(res => {
            str += res
        })
        if (count <= arr.length) {
            Result += str + ' '
        } else {
            Result += str
        }
        
    }

    return Result
};

console.log(reverseWords("Let's take LeetCode contest"))


/**
 * 解题思路：
 * 
 * 1. 又是一道反转，只是和以前的反转数组有点不同，这回是反转字符串内的每一个单词中的每一个字母
 * 2. 因此我们还是拒绝使用reverse这么厉害又方遍的函数。。。。。。
 * 3. 先将字符串分割，转化成数组，在拿到数组中的 每一项进行反转
 * 4. 再将字符串按格式拼接起来
 */