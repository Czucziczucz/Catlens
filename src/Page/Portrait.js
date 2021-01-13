import bildPortriat1 from '../Img/Portret1.jpg'
import bildPortriat2 from '../Img/Portret2.jpg'
import bildPortriat3 from '../Img/Portret3.jpg'
import styled from 'styled-components'

const PortraitBox = styled.div`
height:80vh;
width:80vw;
position: absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
background-color:black;


`
const PortraitBildBox=styled.div`
height:600vh;
width:100%;
background-color:red;
position:relative;


`
const PortraitBild1 = styled.img`
position: absolute;
background-image: url(${bildPortriat1});
background-position: 50% 20%;
height:100%;
width:100%;


`

const PortraitBild2 = styled.img`
position:absolute;
background-image: url(${bildPortriat2});
background-position: 50% 50%;
height:100%;
width:100%;
top:100vh;
`
const PortraitBild3 = styled.img`
position:absolute;
background-image: url(${bildPortriat3});
background-position: 50% 50%;
height:100%;
width:100%;
top:200vh;
`
const Portrait = () => {
    return (     
  
    <div style={{backgroundColor:"black", zIndex:"101",
    height:"300vh",width:"100%"}} >

    <PortraitBox>
    <PortraitBild1></PortraitBild1>
    <PortraitBild2></PortraitBild2>
    
    <PortraitBild3></PortraitBild3>
    </PortraitBox>
   
    </div>
 

    )
}
 
export default Portrait;