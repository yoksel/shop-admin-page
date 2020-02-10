// Dirty way to get weekdays in current lang
export default function getWeekDays (tag) {
  const date = new Date(1970, 0, 5);
  let weekdaysStr = '';
  let counter = 0;
  const tagOpen = tag ? `<${tag}>` : '';
  const tagClose = tag ? `</${tag}>` : '';

  while (counter < 7) {
    const dayname = date.toLocaleString('default', { weekday: 'narrow' });
    weekdaysStr += `${tagOpen}${dayname}${tagClose}`;
    date.setDate(date.getDate() + 1);
    counter++;
  }

  return weekdaysStr;
}
