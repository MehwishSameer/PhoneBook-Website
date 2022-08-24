import React, { Component, useRef } from 'react'
import Box from './Box';
import spinner from './spinner.gif';

export default class EmergencyContacts extends Component {
  constructor(){
    super();
    this.state = {
      numbers: "default",
      loading: false,
      i:0
    }
  }


  async componentDidMount(){
    this.props.setProgress(0);
    let url= "https://emergencynumberapi.com/api/data/all";
    let data1= await fetch(url);
    this.props.setProgress(30);
    let data= await data1.json();
    this.setState({numbers: data, loading: true, i: data.length-1});
    this.props.setProgress(100);
  }

  D_n(){
    let arr=this.state.numbers;
    let D=Array.of(arr.length); 
    let l=0;
    for(let i=0;i<arr.length;i++)
      { if(this.state.loading===true){
        D[l]=arr[i].Country.Name;
        D[l+1]=arr[i].Country.ISOCode;
        D[l+2]=arr[i].Country.ISONumeric;
        D[l+3]=arr[i].Ambulance.All;
        D[l+4]=arr[i].Police.All;
        D[l+5]=arr[i].Fire.All;
        if(arr[i].dispatch)
        D[l+6]=arr[i].dispatch.All;
        else
        D[l+6]="Not Available";
      l=l+7;}
      }
        return D;
  }


  render() {
     let arr1=this.D_n();
     let map = new Map()
     map.constructor.prototype.increment = function (key) {
      this.has(key) && this.set(key, this.get(key) + 1)
    }
    let i=0;
    return (
      <div>
        <h3 style={{padding:"70px", backgroundColor:"rgba(12, 130, 241, 0.596)",color:"white",fontFamily:"Impact, fantasy"}}>PhoneBook - Emergency Contacts</h3>
        {!this.state.loading&&<img src={spinner} alt='loading' className='spin'/>}
        <div className='row' style={{padding:"10px"}}> 
    {arr1.map(function(value, index, element){
      let a =element[index+i];
      let b=element[index+i+1];
      let c=element[index+i+2];
      let d=element[index+i+3];
      let e=element[index+i+4];
      let f=element[index+i+5];
      let g=element[index+i+6];
      i+=6;
        return <div className='col-md-3' key={i}>
          <Box name={a?a:"Not Available"} code={b?b:"Not Available"} numCode={c?c:"Not Available"} amb={d?d:"Not Available"} pol={e?e:"Not Available"} fire={f?f:"Not Available"} dispatch={g?g:"Not Available"}/>
          </div>
    })}
              </div>
      </div>
    )
  }
}

