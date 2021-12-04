// 어떤 props를 가지고 있는지 판단하기 위해 proptypes를 사용
import PropTypes from "prop-types" 
// link를 사용하기 위해 import
import {Link} from "react-router-dom"

function Movie({id,coverImg,title,summary,genres}){
    return (
    <div>
    <img src = {coverImg} alt = {title} />
    <h2>
      <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
    <ul>
      {genres.map(g => <li>{g}</li>)}
    </ul>
  </div>
    );
}

Movie.propTypes = {
  id:PropTypes.number.isRequired,
    coverImg : PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
} 

export default Movie;