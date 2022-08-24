import './App.css';
import React, { useState } from "react";
import Nav from './Components/navbar.js';
import About from './Components/about.js';
import Index from './Components/index';
import Alert from './Components/Alert';
import Description from './Components/Description';
import EmergencyContacts from './Components/emergency-contacts';
import LoadingBar from 'react-top-loading-bar';
import Modify from './Components/modify';
import Comment from './Components/comment';

import { Link, HashRouter, Route, Switch} from "react-router-dom";

function App(props) {
  const [bgcolor,setbgcolor]=useState({backgroundColor:'rgba(218, 221, 11, 0.384)',color:'black'});
  const [btnname,setbtnname]=useState('Enable Dark Mode');
  const [alert,setalert]=useState(null);
  const [progress, setProgress] = useState(0)

  const showAlert = (msg, type)=>{
    setalert({message:msg,
              type:type});
  }

    const bg = ()=>{
        if(bgcolor.backgroundColor==='rgba(218, 221, 11, 0.384)'){
            setbgcolor({
                backgroundColor:'black',
            color:'rgba(218, 221, 11, 0.384)'
            })
            showAlert(" Dark Mode Enabled","success");
            setbtnname('Enable Light Mode');
            setTimeout(() => {
              setalert(null)
            }, 1500);
        }
        else{
            setbgcolor
            ({backgroundColor:'rgba(218, 221, 11, 0.384)',
            color:'black'})
            showAlert(" Light Mode Enabled","success");
            setbtnname('Enable Dark Mode');
            setTimeout(() => {
              setalert(null)
            }, 1500);
        }
    }

  
  return (
    <HashRouter>
    <div className="App">
      <div className="Bg-image" style={bgcolor}>
     <Nav/>
     <LoadingBar
        color='white'
        progress={progress}
      />
     <Alert alert={alert}/>
         <Switch>
           <Route exact path="/"><Index setProgress={setProgress} /></Route>
           <Route exact path="/about"><About setProgress={setProgress}/></Route>
           <Route exact path="/emergency-contacts"><EmergencyContacts setProgress={setProgress}/></Route>
           <Route exact path="/description"><Description setProgress={setProgress} /></Route>
           <Route exact path="/modify"><Modify setProgress={setProgress} /></Route>
           <Route exact path="/comment/:id"><Comment setProgress={setProgress} /></Route>
         </Switch>
         <div className='form-check form-switch'>
      <div id='mode_b'><input className='form-check-input' id='bg-change' onChange={bg} type='checkbox'/></div>
      <span id='mode1'><label className='form-check-label' id='bgn-change'>{btnname}</label></span>
      </div>
      </div>
  </div>
  </HashRouter>
  );
}
 
export default App;
