//thunk from redux
import { fetchAsyncAlbums } from "../features/albums/albumSlice";

//components and pages
import { Header, Home } from "../components/index";

//hooks
import { useEffect } from "react";

//redux
import { useDispatch } from "react-redux";

//css  files
import "../style/App.css";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    // fetch the data 
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
