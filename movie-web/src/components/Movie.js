// 어떤 props를 가지고 있는지 판단하기 위해 proptypes를 사용
import PropTypes from "prop-types" 
function Movie({coverImg,title,summary,genres}){
    return (
    <div>
    <img src = {coverImg} alt = {title} />
    <h2>{title}</h2>
    <p>{summary}</p>
    <ul>
      {genres.map(g => <li>{g}</li>)}
    </ul>
  </div>
    );
}

Movie.propTypes = {
    coverImg : PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
} 

export default Movie;