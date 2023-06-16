// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(()=>{
          setAlert(null);
        }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode ('dark');
      document.body.style.backgroundColor ="black";
      showAlert("Dark Mode has been enabled", "success");
      document.title ='TextUtils - Dark Mode';
      // setInterval(()=>{
      //   document.title ='TextUtils is Amazing Mode';
      // },1000)

    }else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has been enabled", "success");
      document.title='TextUtils - Light Mode'
    }
  }
  return (
    <>

   
   <Navbar title="TextUtills" aboutText="About Us" mode={mode} toggleMode ={toggleMode}/>
    <Alert alert ={alert}></Alert>
    <div className="container my-3"> 
    

          {/* <About/>
         */}
        <TextForm showAlert={showAlert} heading="Enter Text to analyse" mode={mode} />
    </div>
 
    
    </>
  );
}
 
export default App;