import "../style/App.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchAsyncAlbums } from "../features/albums/albumSlice";


import Home from "../pages/Home";

import { Header, Footer } from "../components/index";

function App() {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAsyncAlbums());
  }, [dispatch]);

  

  return (
    <div className="App">
      <Header />
      <Home />
     
    </div>
  );
}

export default App;
