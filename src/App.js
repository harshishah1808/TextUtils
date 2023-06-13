import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode is enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" about="About" mode={mode} toggleBtn={toggleBtn} />
        <Alert alert={alert} showAlert={showAlert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <TextForm showAlert={showAlert} heading="Enter text to Analyze below" mode={mode}/> */}
      {/* <About /> */}
    </>
  );
}

export default App;
