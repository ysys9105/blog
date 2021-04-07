import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {

  let [title,fn_titleChg] = useState(['무한도전','괴물','빈센조']);
  let [likeCnt,fn_likePlus] = useState(0);
  let posts ="무야호";
  let style1 = {color:'blue', fontSize : '30px'};
  
  return (
    <div className="App">
      <div className="black-nav">
        <div style={ style1}>개발 Blog</div>
      </div>
      <button onClick={
        ()=>{
          let tmp = [...title];
          tmp[0] = '무모한도전';
          fn_titleChg(tmp)
        }}> 버튼 </button>
      <div className="list">
        <h3> {title[0]} <span onClick={()=>{fn_likePlus(likeCnt+1)}}>👍</span> {likeCnt} </h3>
        <p>2월 9일 발행 {posts}</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p>3월 15일 발행 {posts}</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p>4월 5일 발행 {posts}</p>
        <hr/>
      </div>
      <Modal/>
      {/* <img src={logo} /> */}
    </div>
  );
}
function Modal(){
  return(
    <>
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    <div></div>
    </> //fragment라는 문법이래요
  )
}
export default App;
