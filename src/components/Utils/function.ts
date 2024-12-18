/**
 *
 * @param txt
 * @param max
 * @returns
 */

export function lesstxt(txt: string, max: number = 50) {
  if (txt.length >= 50) return `${txt.slice(0, max)}...`;
  return txt;
}
