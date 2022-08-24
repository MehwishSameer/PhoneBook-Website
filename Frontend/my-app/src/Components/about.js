import React,{useState} from "react";
import Alert from "./Alert";

const About= () =>{
 
  const [bgcolor,setbgcolor]=useState({backgroundColor:'rgba(218, 221, 11, 0.384)',color:'black'});
  const [btnname,setbtnname]=useState('Enable Dark Mode');
  const [alert,setalert]=useState(null);

  const showAlert = (msg, type)=>{
    this.props.setProgress(0);
    setalert({message:msg,
              type:type});

  }

    const bg = ()=>{
      this.props.setProgress(0);
        if(bgcolor.backgroundColor==='rgba(218, 221, 11, 0.384)'){
            setbgcolor({
                backgroundColor:'black',
            color:'rgba(218, 221, 11, 0.384)'
            })
            showAlert(" Dark Mode Enabled","success");
            setTimeout(() => {
              setalert(null)
            }, 1500);
        }
        else{
            setbgcolor
            ({backgroundColor:'rgba(218, 221, 11, 0.384)',
            color:'black'})
            showAlert(" Light Mode Enabled","success");
            setTimeout(() => {
              setalert(null)
            }, 1500);
        }
        if(btnname==="Enable Dark Mode")
        setbtnname('Enable Light Mode');
      else
      setbtnname('Enable Dark Mode');
      
    }
return(
  <>     
          <h3 style={{padding:"70px", backgroundColor:"rgba(12, 130, 241, 0.596)",color:"white",fontFamily:"Impact, fantasy"}}>PhoneBook - About</h3>
    <div className="about">
        <Alert alert={alert}></Alert>
        <br/><br/><br/>
        <div className="about-m">
<p><h2 id="first-letter">P</h2>honeBook app is an easy to use contact manager app that gives you facility of saving and viewing your contacts, so that you never lose your contacts. It makes finding someone easy and best of all there is never a fee for any information we provide. While public records sites often charge visitors every time they need to access someone's contact information, everything on our site is avaialable completely free of charge.

You can start your search by using our "find someone" box above, or if you don't want to search for someone by name, you can also lookup information by phone number using our reverse phonebook. When information is available, you will be able to see mailing address, phone number, age, family members, pictures and more.

Phonebooks.com listings currently extend across the United States, and while we don't currently offer information on numbers outside of the US, we do offer an international phonebook directory. Users can access this to find phonebooks and dialing information for other countries.</p><br/><br/>
<h4 style={{textDecoration: 'underline'}}>How To Use This Online Phonebook</h4><br/>
<p>The internet has made many aspects of our lives much easier. Finding information on someone is no exception. Online phonebooks have dramatically simplified the process of finding someone and the numerous ways in which they can be found. Offline phonebooks only offer the ability to search through thousands of pages of names organized alphabetically. Phonebooks.com on the other hand, is a web only phonebook provider, and lets users search instantly using a name, a street address or a phone number. All anyone needs to do is identify what information they have about the person, enter it into one of our search boxes and begin searching.

We've worked hard to offer up-to-date information and make it available in ways which other websites normally charge. For example, a reverse address search can be used to identify neighbors and specific property information. These reports can cost as much as $14.95 at some websites, but here they are free. We have even added zip code and area code searches, which can help users trace down the origin of junk mail, a prank caller or just find out more information about a specific area.

We encourage you to use the tabs at the top of the page or the navigation below to help find the type of search you need to perform. If this site was helpful in finding the person you were looking for, or you have a suggestion of comment for us please let us know here. We are committed to two things: making sure this site always remains free and making sure we are always working to improve it.</p>
      </div></div>
      </>
)
}

export default About