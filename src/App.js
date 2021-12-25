import React from 'react';
import Movie from "./Pages/Movie";
import Tv from "./Pages/Tv";
//라액트 라우팅을 위한 화면 생성단계를 진행한다. 해당 페이지폴더안에 js 를 만들어주고 이름에 대한
//import 값들을 선언해준다 그러면서 해당 const 안에 페이지들에 대한 명칭을 선언해준다 ex) <이름 />

const App = () => {
    return (
        <Tv />
    );
};

export default App;
