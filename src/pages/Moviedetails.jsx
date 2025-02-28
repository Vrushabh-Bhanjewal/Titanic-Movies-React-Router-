import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import style from './moviedetail.module.css'
const RatingList=({rate})=>{
    return(<li className={style.rateList}>
        <span className={style.key}>{rate.Source}: </span>{rate.Value} 
    </li>)
}

function Moviedetails() {
    const param= useParams()
    const data=useLoaderData()
    // console.log(data)
    let num=parseInt(data.Runtime)
    const hr=Math.floor(num/ 60)
    const min=(num % 60)
    // console.log(hr,min)
  return (<>
    <div>
        <div className={style['flex-two']}>
            <figure className={style.image}>
                <img src={data.Poster} alt={data.Title} />
            </figure>
            <div className={style.details}>
                <p className={style.head}><span className={style.key}>Title:</span> {data.Title}</p>
                <p ><span className={style.key}>Genrer: </span> {data.Genre}</p>
                <p ><span className={style.key}>Duration: </span> {`${hr}hr ${min}min`}</p>
                <p ><span className={style.Type}>Type: </span> {data.Type}</p>
                <p ><span className={style.key}>Language: </span> {data.Language}</p>
                <p ><span className={style.key}>Awards: </span> {data.Awards}</p>
                <p ><span className={style.key}>Actors: </span> {data.Actors}</p>
                <p ><span className={style.key}>Director: </span> {data.Director}</p>
                <p ><span className={style.key}>Year: </span> {data.Year}</p>
                <p ><span className={style.key}>IMDB Rating: </span> {data.imdbRating}</p>
                <p ><span className={style.key}>IMDB Votes: </span> {data.imdbVotes}</p>
                <button className={style.watch}>Watch</button>
            </div>
        </div>

        <div className={style['extra-Details']}>
                <p ><span className={style.key}>Plot: </span> {data.Plot}</p>
                <p className={`${style.key} ${style.rateHead}`}>Ratings</p>
                <ul>
                    {
                        data.Ratings.map((curr,index)=>{
                            return <RatingList key={index} rate={curr} />
                        })
                    }
                </ul>
        </div>
    </div>
  </>
  )
}
export default Moviedetails