

export const storageService = {
  get,
  set,
  remove,
  // update,
}

export const STORE_KEY = {
  LANGUAGE: 'language',
}

function get(key: string) {
  let dataSession = sessionStorage.getItem(key)
  let dataLocal = localStorage.getItem(key)
  let data = dataSession || dataLocal || null
  if (data) {
    data = JSON.parse(data)
  }
  return data
}

function set(key: string, data: any, remember = true) {
  if (remember) {
    localStorage.setItem(key, JSON.stringify(data))
  } else {
    sessionStorage.setItem(key, JSON.stringify(data))
  }
}

function remove(key: string) {
  localStorage.removeItem(key)
  sessionStorage.removeItem(key)
}

// function update(key: string, field: string, value: string) {
//   let data = get(key)
//   data[field] = value
//   let remember = !!localStorage.getItem(key)
//   set(key, data, remember)
// }
