const device = () => {
    const size = {
     
        mobileL: '425px',
        tablet: '768px',
        desktop: '2560px'
      }
      const device = {
       
        mobileL: `(min-width: ${size.mobileL})`,
        tablet: `(min-width: ${size.tablet})`,
        desktop: `(min-width: ${size.desktop})`,
        
      };
    return ( <>
    
    </> );
}
 
export default device;