// 1. reverseWords(sentence: string): string Принимает строку и возвращает новую строку, в
// которой порядок слов обратный, но сами слова не меняются.
// "hello world" → "world hello"

function makeReverseString(sentence: string) {
    try {
        if (sentence.length == 0) throw new Error("this sentence is empty");

        const array: string[] = sentence.split(' ')
        const reverseSentence: string = array.reverse().join(' ')
        return reverseSentence
    } catch (error: any) {
        return error.message
    }

}

// 2. isAnagram(a: string, b: string): boolean Проверяет, являются ли две строки анаграммами
// (регистр и пробелы не учитываются).
// "Listen", "Silent" → true

function isAnagram(a: string, b: string): string {
    try {
        if (a.length == 0 || b.length == 0) throw new Error("you sent empty word");
        if (a.length !== b.length) throw new Error('false');
        const word1 = a.toLowerCase().trim()
        const word2 = b.toLowerCase().trim()
        const sortedWord1: string = word1.split('').sort().join('')
        const sortedWord2: string = word2.split('').sort().join('')

        if (sortedWord1 !== sortedWord2) throw new Error('this words are not anagram')

        return 'true'
    } catch (error: any) {
        return error.message
    }
}

// 3. countVowels(str: string): number Считает количество гласных букв в строке (a, e, i, o, u).
// "education" → 5

function countVowels(str: string): number {
    try {
        if (str.length == 0) throw new Error("you sent empty string");
        const vowels: string[] = ['a', 'e', 'i', 'o', 'u']
        const arrayOfStr: string[] = str.split('')
        let counter: number = 0
        arrayOfStr.forEach((el: string) => {
            vowels.includes(el) ? counter += 1 : counter
        })

        return counter


    } catch (error: any) {
        return error.message
    }
}

// 4. sumOfDigits(n: number): number Возвращает сумму всех цифр числа.
// 1234 → 10
// -56 → 11

function sumOfDigits(n: number): number | string {
    try {
        const str: string[] = n.toString().split('')
        let result: number = 0
        str.forEach((el) => {
            result += +el
        })
        return result
    } catch (error: any) {
        return error.message
    }
}

// 5. findLongestWord(sentence: string): string Возвращает самое длинное слово в строке 

function findLongestWord(sentence: string): string {
    try {
        if (sentence.length == 0) throw new Error("this sentence is empty");
        const array: string[] = sentence.split(' ')
        let max = array.reduce((el: string, max: string) => el.length > max.length ? max = el : max, '')
        return max

    } catch (error: any) {
        return error.message
    }
}

// 6. removeDuplicates(array: number[]): number[] Возвращает новый массив без повторяющихся
// значений, сохраняя порядок.

function removeDuplicates(array: number[]): number[] {
    try {
        if (array.length == 0) throw new Error("this array is empty");

        const newArray: number[] = []
        array.forEach((el: number) => newArray.includes(el) ? newArray : newArray.push(el))
        return newArray
    } catch (error: any) {
        return error.message
    }

}

// 7. sumOfUnique(numbers: number[]): number Возвращает сумму только уникальных чисел
// [1, 2, 2, 3] → 1 + 3 = 4
// [5, 5, 5] → 0

function sumOfUnique(numbers: number[]): number {
    try {
        if (numbers.length == 0) throw new Error("this array is empty");
        const obj: any = {}

        numbers.forEach((el) => {
            obj.hasOwnProperty(el) ? obj[el] += 1 : obj[el] = 1
        })
        let sum: number = 0
        console.log(obj);
        
        for (const key in obj) {
            if (obj[key] === 1) {
                sum += +key
            }

        }
        return sum

    } catch (error:any ) {
        return error.message
    }
}
export { makeReverseString, isAnagram, countVowels, sumOfDigits, findLongestWord, removeDuplicates, sumOfUnique }