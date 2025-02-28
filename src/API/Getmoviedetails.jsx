
export const getmoviedetails= async ({params})=>{
    try{
        const id=params.movieID;
        // console.log(params)
        const resp= await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`)
        const data=resp.json()
        // console.log(data)
        return data
    }catch(error){
        console.log(error)
    }
}