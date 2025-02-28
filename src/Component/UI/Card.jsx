import React from 'react'
import style from  './Card.module.css'
import { NavLink } from 'react-router-dom'
export const Card = ({currMovie}) => {

  return (
    <li>
      <div className={style.card}>
      <p className={style.title}>{currMovie.Title}</p>
      <figure className={style.fig}>
        <img src={currMovie.Poster} alt={currMovie.Title} />
      </figure>
      <NavLink to={`/movies/${currMovie.imdbID}`} >
      <button className={style.btn}>Watch Now</button>
      </NavLink>

      </div>
    </li>
  )
}
