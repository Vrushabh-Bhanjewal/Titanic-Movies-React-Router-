export const getMovieData=async ()=>{
    try{
        const resp= await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic`)
        const data=resp.json()
        // console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}