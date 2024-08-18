import day from 'dayjs'


export default function format(value, mode = 'number') {
  if (mode === 'number') {
    return formatNumberWithSeparator(value);
  }
}
