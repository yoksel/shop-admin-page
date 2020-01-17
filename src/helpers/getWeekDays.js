// Dirty way to get weekdays in current lang
export default function getWeekDays (tag) {
  const date = new Date(1970, 0, 5);
  let weekdaysStr = '';
  let counter = 0;

  while (counter < 7) {
    const dayname = date.toLocaleString('default', { weekday: 'narrow' });
    weekdaysStr += `<${tag}>${dayname}</${tag}>`;
    date.setDate(date.getDate() + 1);
    counter++;
  }

  return weekdaysStr;
}
