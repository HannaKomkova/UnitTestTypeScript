import {makeReverseString, isAnagram, countVowels, sumOfDigits, findLongestWord, removeDuplicates, sumOfUnique} from './index'

describe ('cases for makeReverseString', ()=>{
    test ('case #1', ()=>{
        const res = makeReverseString('hello world');
        expect(res).toBe('world hello')
    })

    test('case #2', ()=>{
        const res = makeReverseString('')
        expect(res).toBe('this sentence is empty')
    })
})

describe('cases for isAnagram', ()=>{
    test('case #1 isAnagram', ()=>{
        const res = isAnagram('Listen', 'Silent')
        expect(res).toBe('true')
    })

    test('caase #2 isAnagram', ()=>{
        const res = isAnagram('hello', '')
        expect(res).toBe('you sent empty word')
    })
})

describe('cases for countVowels', ()=>{
    test('cases #1 for countVowels', ()=>{
        const res = countVowels('hello')
        expect(res).toBe(2)
    })
})

describe('cases for sumOfDigits', ()=>{
    test('cases #1 for sumOfDigits', ()=>{
        const res = sumOfDigits(1234)
        expect(res).toBe(10)
    })
})

describe ('cases for findLongestWord', ()=>{
    test('cases #1 for findLongestWord', ()=>{
        const res = findLongestWord('hello my name is anna')
        expect(res).toBe('hello')
    })
     test('cases #2 for findLongestWord', ()=>{
        const res = findLongestWord('')
        expect(res).toBe('this sentence is empty')
    })
})

describe ('case for removeDuplicates', ()=>{
    test('cases #1 for removeDuplicates', ()=>{
        const res = removeDuplicates([1, 2, 3, 2, 4, 5, 5, 6, 7, 7])
        expect(res).toEqual([1,2,3,4,5,6,7])
    })
     test('cases #2 for removeDuplicates', ()=>{
        const res = removeDuplicates([])
        expect(res).toEqual('this array is empty')
    })
})

describe('cases for sumOfUnique', ()=>{
    test('case #1 for sumOfUnique', ()=>{
        const res = sumOfUnique([1, 2, 2, 3])
        expect(res).toBe(4)
    })
    test('case #2 for sumOfUnique', ()=>{
        const res = sumOfUnique([])
        expect(res).toBe('this array is empty')
    })
})