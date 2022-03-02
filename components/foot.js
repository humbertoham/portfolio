import { Container, Text, useColorModeValue, Link, Box} from "@chakra-ui/react";
import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'
import i18n from "i18next";

import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend'



i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi) 
  .init({
   
     
    fallbackLng: "en",
    detection:{
        order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
        caches:['caches'],
    },
    backend:{
        loadPath:'/assets/locales/{{lng}}/translation.json'
    },
    react:{ useSuspense: false}
  });
const Foot= () => {
    const { t } = useTranslation();
    return(
        <Container align="center"  p={30} maxW="100%" bg={useColorModeValue("#00000033", "#141416")} >
                <a style={{padding:"8px",display:"inline-block"}}  target="_blank" href="https://github.com/humbertoham">
                <IoLogoGithub size="32px"/> 
            </a>
            <a   style={{padding:"8px", display:"inline-block"}}  target="_blank" href="https://www.linkedin.com/in/humberto-ham-dur%C3%A1n-447470233/">
                <IoLogoLinkedin size="32px"/> 
            </a>
                <a style={{padding:"8px",display:"inline-block"}} href="mailto: hamduranhumberto@gmail.com">
                <IoMail size="32px"/>
            </a>
            
              
     
            <Text align="center" pt={0} >
                ©2022 <Link color={useColorModeValue( "#202023","#fff")} href="/"> Humberto Ham</Link> | <Link target="_blank" color={useColorModeValue("#202023","#fff")} href="https://github.com/humbertoham/portfolio"> {t("so")}</Link>
            </Text>
        </Container>
    )
}

export default Foot