
export function addStorageObject(key:string, object:{[objectId:string]:string}):void {
    
    localStorage.setItem(key, JSON.stringify(object));
}

export function addStorage(key:string, object:{[objectId:string]:string}):void {
    const items = localStorage.getItem(key)
    if (items) {
        const itemsParsed= JSON.parse(items) || []
        const newData = [...itemsParsed,object]
        localStorage.setItem(key, JSON.stringify(newData));  
    }
    else{
        localStorage.setItem(key, JSON.stringify([object]))
    }
    
}

export function removeStorage(key:string){
    localStorage.removeItem(key)
}

export function getStorage(key:string) {
    const items = localStorage.getItem(key)
    if (items) return JSON.parse(items) || [];
}