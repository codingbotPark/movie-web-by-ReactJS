// import Button from "./Button";
// import styles from "./App.module.css"
// import {useState} from "react";
// 계속 랜더링 되는 문제를 useEffect로 해결할 수있다
// 첫 번째 인자 useState는 한 번만 랜더링 될 컴포넌트이다
import {useState, useEffect} from "react";

function App() {
  const [counter,setValue]= useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  // api와 같은 것들은 리랜더를 할 필요가 없다
  // 특정 코드들이 첫번째 렌더에서만 일어나도록 하기
  // console.log("i run all the time")


  // 한 번만 실행될 요소
  // const iRunOnlyOnce = () => {
  //   console.log("i run only one")
  // }
  // 한 번만 실행
  useEffect(() => {
    console.log("Call The Api");
  },[]);

  // useEffect의 배열에 keyword를 넣으면
  // keyword가 변할 때만 useEffect안의 문장을 실행시킬 수 있다
  // 그래서 배열을 비워놨을 때 한 번만 실행되는 이유이다
  useEffect(() => {
    console.log("i run when keyword changes");
  },[keyword]);
  useEffect(() => {
    console.log("i run when counter changes");
  },[counter]);
  useEffect(() => {
    console.log("i run when counter and keyword changes");
  },[keyword,counter]);
  
  // console.log("SEARCH FOR",keyword);
  return (
    <div> 
      <input type="text" placeholder="Search here..." onChange={onChange} value={keyword} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
