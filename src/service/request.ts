export const makeRequest = async function(url:string,method = "GET"){
    const options = {
        method: method,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
        }
      }
      const response =await fetch(url,options)
      if(!response.ok) throw new Error("Fetch error")
      return await response.json()

}