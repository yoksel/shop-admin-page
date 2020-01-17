export default function escapeHTML(string) {
  return string
    .replace(/&/g, '&')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '<')
    .replace(/>/g, '>')
}
