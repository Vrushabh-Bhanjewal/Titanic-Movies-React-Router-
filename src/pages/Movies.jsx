import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Card } from '../Component/UI/Card'
import style from '../Component/UI/Card.module.css'
const Movies = () => {
  const movies=useLoaderData()
  
  return (
    <div >
      <ul className={style.cardLayout} >
        {
          movies.Search.map((curr)=>{
            return <Card key={curr.imdbID} currMovie={curr} />
          })
        }
      </ul>
    </div>
  )
}

export default Movies