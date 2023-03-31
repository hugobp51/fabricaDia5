import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Details } from "./pages/Home/Details";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element={<Home/>}/>
       <Route path= "/details/:id" element= {<Details/>}/>
      </Routes>
    </BrowserRouter>
  );  
}

export default App;
