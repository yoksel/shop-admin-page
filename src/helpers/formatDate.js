export default function formatDate (str) {
  if (!str) {
    return;
  }

  const date = new Date(str).toDateString();
  const dataParts = date.split(' ');
  const month = dataParts[1];
  const day = dataParts[2];
  const year = dataParts[3];

  return `${month} ${day}, ${year}`;
}
