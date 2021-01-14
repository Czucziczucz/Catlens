import styled from 'styled-components'
import bildArt1 from '../Img/Art1.png'
import bildArt2 from '../Img/Art2.jpg'
import bildArt3 from '../Img/Art3.jpg'
import bildArt4 from '../Img/Art4.jpg'
import device from '../Components/device'


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
background-image: url(${bildArt1});
background-position: 50% 20%;
height:100%;
width:100%;
@media ${device.mobileL} {
    
    background-position: center;
    background-size: cover;
    background-size: 1000px;
    
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}


`

const PortraitBild2 = styled.img`
position:absolute;
background-image: url(${bildArt2});
background-position: 50% 50%;
height:100%;
width:100%;
top:100vh;
@media ${device.mobileL} {
    background-position: center;
    background-size: cover;
    background-attachment:fixed;
    background-size: 200px;
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-size: 200px;
}

@media ${device.desktop} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
}

`
const PortraitBild3 = styled.img`
position:absolute;
background-image: url(${bildArt3});
background-position: 50% 50%;
height:100%;
width:100%;
top:200vh;
@media ${device.mobileL} {
    
    background-position: -300px center;
    background-size: cover;
    
   
}
@media ${device.tablet} {
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    
`
const PortraitBild4 = styled.img`
position:absolute;
background-image: url(${bildArt4});
background-position: 50% 50%;
height:100%;
width:100%;
top:300vh;
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


const Art = () => {
    return (     
  
    <div style={{backgroundColor:"black", zIndex:"101",
    height:"400vh",width:"100%"}} >

    <PortraitBox>
    <PortraitBild1></PortraitBild1>

    <PortraitBild2></PortraitBild2>
    
    <PortraitBild3></PortraitBild3>

    <PortraitBild4></PortraitBild4>
    </PortraitBox>
   
    </div>
 

    )
}
 
export default Art;