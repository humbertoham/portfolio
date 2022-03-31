import { Global } from "@emotion/react";


const Fonts = () => {
    return(
<Global
    styles={
        `@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
            @font-face {
  font-family: "Poppins";
  src: local("Poppins"), url(../public/fonts/Poppins.ttf) format("truetype");
}
        html{
            scroll-behavior: smooth;
        }
        .title-word {
  animation: color-animation 4s linear infinite;
}

.title-word-1 {
  --color-1: #0B4F6C;
  --color-2: #3D8DAE;
  --color-3: #E4A9A8;
}

.title-word-2 {
  --color-1: #40C9A2;
  --color-2: #1F01B9;
  --color-3: #FFBD00;
}

.title-word-3 {
  --color-1: #F2BAC9;
  --color-2: #EF8A17;
  --color-3: #ACCFCB;
}

.title-word-4 {
  --color-1: #FF1053;
  --color-2: #F6AA1C;
  --color-3: #FF5400;
  
}

@keyframes color-animation {
  0%    {color: var(--color-1)}
  32%   {color: var(--color-2)}
  33%   {color: var(--color-3)}
  34%   {color: var(--color-1)}
  65%   {color: var(--color-3)}
  66%   {color: var(--color-1)}
  99%   {color: var(--color-2)}
  100%  {color: var(--color-3)}
}

/* Here are just some visual styles. 🖌 */

.container {
  display: block;
  place-items: center;  
  text-align: center;
  padding-bottom: 100px;
  padding-top: 40px;
}

.title {
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  font-size: 36px;
  
 
}

        `}
    />
    )
    

}

export default Fonts