import PropTypes from "prop-types";
import styles from "./Button.module.css"

// 스타일들도 모듈이 될 수 있다
function Button({text}){
    return <button className={styles.btn}>{text}</button>
}
//app.js에서 button을 가져올 수 있또록 export 

Button.prototypes = {
    text : PropTypes.string.isRequired
}

export default Button;