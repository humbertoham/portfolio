import { Container, Box, Heading,  SimpleGrid, Badge, Button, Icon, Text} from '@chakra-ui/react'

import Layout from '../components/layouts/article';
import theme from "../lib/theme"
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


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
const Resume = () =>{
    const { t } = useTranslation();
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return(
        <Layout>
        <Container maxW='container.xl'>
            <Heading pb={10} as="h3" fontSize="36px" mb={4} align="center">
                Resumé

            </Heading>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.13.216/build/pdf.worker.min.js">
  <div
    style={{
        width: "100%",
        height: '750px',
    }}
>
          
    <Viewer fileUrl="../pdf/example.pdf" plugins={[defaultLayoutPluginInstance]}  />
  </div>
</Worker>
        </Container>
</Layout>
    )

}

export default Resume