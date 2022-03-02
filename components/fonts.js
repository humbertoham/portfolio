import { Global } from "@emotion/react";


const Fonts = () => {
    return(
<Global
    styles={
        `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        html{
            scroll-behavior: smooth;
        }
        `}
    />
    )
    

}

export default Fonts