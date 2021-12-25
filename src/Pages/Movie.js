import React, { useEffect, useState } from 'react';
import axios from "axios";

const Movie = () => {
    const [onNowPlayingMovie, setOnNowPlayingMovie] = useState([])
    const [onPopularMovie, setOnPopularMovie] = useState([])
    const [onUpComing, setOnUpComing] = useState([])

    const getNowPlayingMovie = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(onon =>{
                console.log(onon.data.results)
                setOnNowPlayingMovie(onon.data.results)
            })
            .catch(err => console.log(err.message))
    }

    const getPopularMovie = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(onon_two =>{
                console.log(onon_two.data.results)
                // setOnMovie(onon_two.data.results)
                setOnPopularMovie(onon_two.data.results)
            })
            .catch(err => console.log(err.message))
    }

    const getUpComing = async () => {
        await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=8597e491ed6e80f0de12e349eb60ea6e&language=en-US&page=1")
            .then(onon_three =>{
                console.log(onon_three.data.results)
                setOnUpComing(onon_three.data.results)
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        getNowPlayingMovie()
        getPopularMovie()
        getUpComing()
    }, [])

    return (
        <div>
            <h1>
                Now playing
            </h1>
            {onNowPlayingMovie.map(nowPlaying => (
                <h5>
                    {nowPlaying.original_title}
                </h5>

            ))}
            <br />
            <h1>
                Popular Movie
            </h1>
            {onPopularMovie.map(popular => (
                <h5>
                    {popular.title}
                </h5>
            ))}
            <br />
            <h1>
                UpComing
            </h1>
            {onUpComing.map(coming => (
                <h5>
                    {coming.title}
                </h5>
            ))}
        </div>
    );
};

export default Movie;
