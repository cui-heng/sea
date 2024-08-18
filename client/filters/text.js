import { decode } from 'he';

const htmlReg = /\<\/?.+?\>/ig;

export default function text(html) {
  return decode(html?.replace(htmlReg, '') || '');
}
