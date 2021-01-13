import styled from 'styled-components'
import bild1 from '../Img/1.jpg'
import bild2 from '../Img/2.jpg'
import bild3 from '../Img/3.jpg'
import bild4 from '../Img/4.JPG'
import {useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import Portrait from './Portrait'
  import Animals from './Animals'
import Art from './Art'
import Architecture from './Architecture'
  

const Header=({match})=>{
    const {path,url}=useRouteMatch() 
const BildBox1 = styled.div`
height: 100vh;
width: 100%;
background-image: url(${bild1})

    `
    const BildBox2 = styled.div`
height: 100vh;
width: 100%;
background-image: url(${bild2})



    `
    const BildBox3 = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bild3})
    
        `
        const BildBox4 = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${bild4})
        `

        const TextBild = styled.div`
        font-size:100px;
        text-Align:center;
        
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        color:white;
        cursor:pointer;
        &:hover{opacity:0.7;}
        `
        const WrapLink = styled(Link)`
        color:white;
        &:hover{
            color:white;
            text-decoration:none;
        }
        `
    
    
    
    return(
        
<div  >



<BildBox1  style={{zIndex:"25", position: "sticky", top:"-80vh", height:"120vh"}}><TextBild><WrapLink to="/portrait">-Portrait-</WrapLink></TextBild></BildBox1>

<BildBox2  style={{zIndex:"26", position:"sticky", top:"-50vh",backgroundPosition:"center",height:"100vh"}}><TextBild><WrapLink to="/animals">-Animals-</WrapLink></TextBild></BildBox2>

<BildBox3 style={{zIndex:"27", top:"-80vh", position:"sticky",backgroundPosition:"center",height:"100vh"}} ><TextBild><WrapLink to="/art">-Art-</WrapLink></TextBild></BildBox3>

<BildBox4  style={{zIndex:"28", position:"sticky", top:"-50vh",backgroundPosition:"center",height:"120vh"}}><TextBild><WrapLink to="/architecture">-Architecture-</WrapLink></TextBild></BildBox4>


<Switch>
<Route path="/portrait"></Route>

<Route path="/animals"></Route>

<Route path="/art"></Route>

<Route path="/architecture"></Route>

</Switch>

</div>

    )
}




const Home = () => {

return ( <>
        <Header></Header>
       
  
        </>
     );
}
 
export default Home;