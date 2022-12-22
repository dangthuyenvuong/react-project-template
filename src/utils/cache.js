export const localStorageCache = {
    set: (name, data, expired) => {
        const storeData = {
            expired,
            data
        }
        localStorage.setItem(name, JSON.stringify(storeData))
    },
    get: (name) => { 
        let storeData = JSON.parse(localStorage.getItem(name))
        if(storeData) {
            const now = Date.now()
            if(storeData.expired && storeData.expired - now < 0) {
                return 
            }

            return storeData.data
        }

        return 
    },
    remove: (name) => { 
        localStorage.removeItem(name)
    }
}


export const sessionStorageCache = {
    set: (name, data, expired) => {
        const storeData = {
            expired,
            data
        }
        sessionStorage.setItem(name, JSON.stringify(storeData))
    },
    get: (name) => { 
        let storeData = JSON.parse(sessionStorage.getItem(name))
        if(storeData) {
            const now = Date.now()
            if(storeData.expired && storeData.expired - now < 0) {
                return 
            }

            return storeData.data
        }

        return 
    },
    remove: (name) => { 
        sessionStorage.removeItem(name)
    }
}


export const indexDBCache = {
    set: (name, data, expired) => {
        const storeData = {
            expired,
            data
        }
        localStorage.setItem(name, JSON.stringify(storeData))
    },
    get: (name) => { 
        let storeData = JSON.parse(localStorage.getItem(name))
        if(storeData) {
            const now = Date.now()
            if(storeData.expired && storeData.expired - now < 0) {
                return 
            }

            return storeData.data
        }

        return 
    },
    remove: (name) => { 
        localStorage.removeItem(name)
    }
}