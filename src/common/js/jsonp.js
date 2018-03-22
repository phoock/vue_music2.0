import originJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  url += (
    url.indexOf('?') < 0
    ? '?'
    : '&') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, res) => {
      if (!err) {
        resolve(res)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let urlParam = ''
  for(let k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    urlParam += `&${k}=${encodeURIComponent(value)}`
  }
  return urlParam?urlParam.substring(1) : ''
}
