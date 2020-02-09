export default function formatTotal (num) {
  if (!isFinite(num) || num === '') {
    return num;
  }

  let formatted = num;
  if (num >= 1000) {
    const tail = num % 1000;
    formatted = `${(num - tail) / 1000},${tail}`;
  }

  return `$${formatted}`;
}
