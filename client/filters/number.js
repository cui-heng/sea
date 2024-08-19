const threshold = 10000;

export default function number(number) {
  if (number >= threshold) {
    return `${(number / threshold).toFixed()}万+`
  }

  return number;
}
