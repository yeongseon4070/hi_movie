import React from 'react';
import {BrowserRouter, Routes, Route, Navigate, Switch} from "react-router-dom";
import { Movie, Err, Tv, Searching } from "../Pages"
import Header from "./Header";

const Routing = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
            <Routes>
                <Route path={"/"} element={<Movie />} />
                <Route path={"/tv"} element={<Tv />} />
                <Route path={"/search"} element={<Searching />} />
                <Route path={"*"} element={<Navigate to={"/"} />} />
                {/*Route 에서 페이지 이동을 하였을때 / 뒤에 없는 페이지의 이름을 입력했을때 이동되도록 하겠다는 명령어*/}
            </Routes>
            </>
        </BrowserRouter>
    );
};

export default Routing;
