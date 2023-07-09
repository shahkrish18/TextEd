import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React,{useState} from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert=(msg,type)=>{
    setAlert({ 
      message : msg,
      type : type
    })
    setTimeout(()=>{
      setAlert(null);
    },2500);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode is enabled","Success");
      // document.title='TextConvertor - DarkMode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","Success");
      // document.title='TextConvertor - LightMode';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextConvertor" mode={mode} toggleMode={toggleMode}/>
          {/* <Routes>
            <Route path="/" element={ */}
              {/* <> */}
              <Alert alert={alert}/>
              <div className="container my-3">
                <TextForm showAlert={showAlert} mode={mode} heading="Enter the Text" />
              </div>
              {/* </> */}
            {/* }/>
            <Route path="/about" element={<About/>}/>
          </Routes> */}
    {/* </Router> */}
    </>   
  );
}

export default App;
