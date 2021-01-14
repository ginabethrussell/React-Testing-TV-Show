import React, { useState, useEffect } from "react";
import Dropdown from "react-dropdown";
import parse from "html-react-parser";

import { formatSeasons } from "./utils/formatSeasons";
import { fetchShow } from './api/fetchShow';
import {fetchMagnumPI } from './api/fetchMagnumPI';

import Episodes from "./components/Episodes";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(null);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState("");
  const episodes = seasons[selectedSeason] || [];

  useEffect(() => { 
    fetchShow()
    .then(res => {
        // console.log(res);
        setShow(res.data);
        setSeasons(formatSeasons(res.data._embedded.episodes));
    })
    .catch(err => {
      // console.log(err);
      setShow(false);
      setSeasons([]);
    });
  }, []);

  const handleSelect = e => {
    setSelectedSeason(e.value);
  };

  const updateShows = (e) => {
    e.preventDefault();
    console.log("getting new shows");
    fetchMagnumPI()
    .then(res => {
      console.log(res);
      setShow(res.data);
      setSeasons(formatSeasons(res.data._embedded.episodes));
    })
    .catch(err => {
      console.log(err)
      setShow(false);
      setSeasons([]);
    })

  }
  if (!show) {
    return <h2 style={{color: 'white'}}>Fetching data...</h2>;
  }

  return (
    <div className="App">
      <img className="poster-img" src={show.image.original} alt={show.name} />
      <h1>{show.name}</h1>
      {parse(show.summary)}
      <Dropdown  
        options={Object.keys(seasons)}
        onChange={handleSelect}
        value={selectedSeason || "Select a season"}
        placeholder="Select an option"
      />
      <button className='new-show' onClick={updateShows}>Get More Shows</button>
      
      <Episodes episodes={episodes} />
    </div>
  );
}
