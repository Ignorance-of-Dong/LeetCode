
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
    if(root === null) return root
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
        switch(res) {
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
 *  2 最后同时判断这两个变量是否为0
 */



// 1051. 高度检查器
var heightChecker = function (heights) {
    let count = 0
    for (let i = 0; i <= heights.length - 1; i++) {
        for (let j = i + 1; i <= heights.length - 1; i++) {
            if (heights[j] > heights[i]) {
                count++
            }
        }
    }
    return count
};

console.log(heightChecker([1, 1, 4, 2, 1, 3]))