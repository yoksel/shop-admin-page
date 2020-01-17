export default function fillTemplate({ tmpl, data }) {
  if (!tmpl || !data) {
    return
  }

  return tmpl.replace(/{([^"]{1,})}/g, (match, str) => {
    if (data[str]) {
      return data[str]
    }
    return ''
  })
}
