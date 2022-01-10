
import './App.css';
import Navbar from './Components/Navbar';
 import TextForm from './Components/TextForm';
  import About from './Components/About';
  import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
  

function App() {
 const [mode , setMode] = useState('light');
 const [alert, setalert] = useState(null);
 const [Bmode, setBmode] = useState('light');

 const togglebmode=()=>{
   if(Bmode==='light')
   {
     setBmode('dark');
     document.body.style.backgroundColor="#a63526";
     handleAlert("Blood mode enable","success");
   }
   else{
     setBmode('light');
    document.body.style.backgroundColor="white";
    handleAlert("light mode enable","success");
   }
 }

 const handleAlert=(message,type)=>{
   setalert({
     msg:message,
     type:type
   })

 }
 

  const toggleMode =()=>{
   if(mode === 'light')
  {
     setMode('dark');
     document.body.style.backgroundColor="#042743";
     handleAlert("dark mode enable","success");
 
   }else
   {
     setMode('light');
     document.body.style.backgroundColor="white";
    handleAlert("light mode enable","success");
 

   }
 
  }
 
  return (
   <>
   
   
   
     
     
     
     <Router>
     <Navbar title="TextUtils" Bmode={Bmode} togglebmode={togglebmode}  mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
   <div className="container my-3"></div>
        <Routes>
          <Route exact path="/about"  element={ <About/> } />
          <Route exact path="/" exact element={  <TextForm heading="Enter The Text here to analyze" mode={mode}/>  } />

        </Routes>
        </Router>
   
   
   </>
  )
}

export default App;
