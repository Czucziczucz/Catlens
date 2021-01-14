import About from '../Img/About.jpg'
import styled from 'styled-components'


const StyledForm = styled.div`
width:100%;
height:100vh;
background-position:center;
background-size:1300px;
background-repeat:no-repeat;

background-image: url(${About})


`



const Galeria = () => {
    return ( <StyledForm></StyledForm> );
}
 
export default Galeria;