import bildPortriat1 from '../Img/Portret1.jpg'
import bildPortriat2 from '../Img/Portret2.jpg'
import bildPortriat3 from '../Img/Portret3.jpg'
import styled from 'styled-components'
import device from '../Components/device'
import {useState} from 'react'

const PortraitBox = styled.div`
height:80vh;
width:80vw;
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background-color:black;



`
const PortraitBild1 = styled.img`
position: absolute;
background-image: url(${bildPortriat1});
background-position: 50% 20%;
height: 80vh;
width:100%;
overflow:auto;



@media ${device.mobileL} {
    background-position: center;
    background-size: cover;
    background-attachment:fixed;
    
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}

`
const PortraitOpen1 = styled.img`
position:absolute;
left:50%;
height:100vh;
width:100%;
z-index:100;

background-image: url(${bildPortriat1});
background-position:center;
background-size: cover;
background-repeat: no-repeat;
`



const PortraitBild2 = styled.img`
position:absolute;
background-image: url(${bildPortriat2});
background-position: 50% 50%;
height:100%;
width:100%;
top:100vh;
@media ${device.mobileL} {
    background-position: center;
    background-size: cover;
    background-attachment:fixed;
    
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}
`

const PortraitOpen2 = styled.img`
position:absolute;
left:50%;

width:100%;
z-index:100;

background-image: url(${bildPortriat2});
background-position:center;
background-size: cover;
background-repeat: no-repeat;
`


const PortraitBild3 = styled.img`
position:absolute;
background-image: url(${bildPortriat3});
background-position: 50% 50%;
height:100%;
width:100%;
top:200vh;
@media ${device.mobileL} {
    background-position: center;
    background-size: cover;
    background-attachment:fixed;
    
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}
`
const PortraitOpen3 = styled.img`
position:absolute;
left:50%;

width:100%;
z-index:100;

background-image: url(${bildPortriat3});
background-position:center;
background-size: cover;
background-repeat: no-repeat;
`
const Portrait = () => {
const  [active, setActive] = useState(false)




const handleClick=()=>{setActive(!active)}

    return (     
  
    <div style={{
    backgroundColor: "black",
    height: active?"100vh":"300vh",
    position: active?"fixed":"",
    

    
    
    }} >

    <PortraitBox style={{
        height:active?"100vh":"",
        width:active?"100vw":"",
        
  

   
   
   }}>

{active?<PortraitOpen1 onClick={handleClick}/>:null}
    <PortraitBild1 onClick={handleClick}/>
    

    {active?  <PortraitOpen2 onClick={handleClick}/>:null}
  <PortraitBild2 onClick={handleClick}/>

  {active? <PortraitOpen3 onClick={handleClick}/>:null}
    <PortraitBild3 onClick={handleClick}/>
    


    </PortraitBox>
   
    </div>
 

    )
}
 
export default Portrait;