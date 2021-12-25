import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import { Movie, Tv, Searching, Err } from "./Pages"

//라액트 라우팅을 위한 화면 생성단계를 진행한다. 해당 페이지폴더안에 js 를 만들어주고 이름에 대한
//import 값들을 선언해준다 그러면서 해당 const 안에 페이지들에 대한 명칭을 선언해준다 ex) <이름 />

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Movie />} />
                <Route path={"/tv"} element={<Tv />} />
                <Route path={"/search"} element={<Searching />} />
                <Route path={"*"} element={<Err />} />
                {/*패스 *에 대한 부분은 다른 로컬호스트 이름을 입력이 되었을때 에러 페이지에 대한 조건부 이동에 대한 함수이다.*/}
                {/*즉, 사람들이/738921789 등의 없는 페이지로의 명칭을 입력했을때 이동하는 페이지 설정값을 입력한것이다.*/}
                {/*전체적인 포멧에 대한 부분으로 각각의 페이지들을 성생해주고, 페이지들에 대한 이름을 입력해주는 작업을 진행해준다*/}
                {/*라우터 패스의 명칭을 정해주고, element 에 대한 함수들을 뿌려주는 작업을 해주는것이다.*/}
            </Routes>
        </BrowserRouter>
    );
};

export default App;
