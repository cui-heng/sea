/**
 * 从后向前每隔四位字符添加一个分隔符
 * @param {String} numbers 由数字组成的字符串
 * @param {String} separator 分隔符 默认是空字符
 * @returns 
 */
export function formatNumberWithSeparator(numbers, separator = ' ') {
  console.log(numbers)
  const result = [];
  const reverseArr = numbers.split('').reverse();

  for (let i = 0; i < reverseArr.length; i++) {
    const number = reverseArr[i];
    if (i !== 0 && i % 4 === 0) {
      result.push(separator);
    }

    result.push(number);
  }

  return result.reverse().join('');
}
