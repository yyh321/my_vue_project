export const setLocal = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}

export const getLocal = key => {
  let value = localStorage.getItem(key) || ''
  if (value.includes('[') || value.includes('{')) {
    return JSON.parse(value)
  } else {
    return localStorage.getItem(key) || ''
  }
}

window.setLocal = setLocal
window.getLocal = getLocal
