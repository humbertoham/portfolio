import NextLink from 'next/link'
import { Box, Heading, Container, Divider, Button, Text } from '@chakra-ui/react'
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
const NotFound = () =>{
    const { t } = useTranslation();
    return(
        <Container pb={40}>
            <Heading as="h1">{t('found')}</Heading>
            <Text>{t('page')}</Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <NextLink href="/">
                    <Button colorScheme="gray">{t('home')}</Button>
                </NextLink>
            </Box>
        </Container>
    )
}
export default NotFound