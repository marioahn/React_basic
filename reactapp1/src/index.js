import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

import reportWebVitals from './reportWebVitals';
import Library from './chapter3/Library.jsx';
import Clock from './chapter4/Clock.jsx';
import CommentList from './chapter5/CommentList.jsx';
import Accommodate from './chapter7/Accommodate.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
// Step1: 기본../public/index.js에 있는 "root"div를 여기서 그대로 보여준다는 뜻 - html을 작동시키는게 index.js
// root.render(
//   <React.StrictMode>
//     <Library />
//   </React.StrictMode>
// );

// Step2: 1초마다 매 갱신되는 (현재의)시간을 출력해줘 - 이렇게 하면 그냥 1초가 계속 흐르는 시.계가 됨  
// setInterval(() => { // setInterval(function() => { 랑 같음
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//   );
// }, 1000)

// Step3: component & props
// function Welcome(props) {
//   return <h1>Hello, {props.name} </h1>;
// }

// function App(props) {
//   return (
//     <div>
//       <Welcome name="Mike" />
//       <Welcome name="Stove" />
//     </div>
//   )
// }

// Step4: 댓글 리스트
// root.render(
//   <React.StrictMode>
//     <CommentList />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
