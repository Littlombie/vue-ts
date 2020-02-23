const getStore = (type: string) => {
  const store = type === 'session' ? sessionStorage : localStorage
  return {
    set(key: any, data: any) {
      const oData = typeof data === 'object' ? JSON.stringify(data) : data
      store.setItem(key, oData)
    },
    get(key: any) {
      const data = store.getItem(key)
      let result
      if (typeof data === 'string') {
        try {
          result = JSON.parse(data)
        } catch (err) {
          result = data
        }
        return result
      }
      return false
    },
    remove(key: any) {
      if (typeof key === 'string') {
        store.removeItem(key)
      } else if (typeof key === 'object') {
        if (key.excludes) {
          for (const i in store) {
            if (key.excludes.indexOf(i) < 0) {
              store.removeItem(i)
            }
          }
        }
        if (key.includes) {
          for (const i in store) {
            if (key.excludes.indexOf(i) >= 0) {
              store.removeItem(i)
            }
          }
        }
      }
    },
    clear() {
      store.clear()
    },
  }
}

export default {
  ...getStore('local'), // export localStorge
  session: getStore('session'), // export sessionStorge
}
