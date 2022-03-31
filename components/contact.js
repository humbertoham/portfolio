import React, { useRef } from 'react';
import { Flex, Box, useColorMode, IconButton, Heading, FormControl, FormLabel, Input, Button, Textarea, useColorModeValue } from "@chakra-ui/react"
import { ArrowRightIcon } from "@chakra-ui/icons"


import emailjs from 'emailjs-com';
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

  

const Contact = () => {
    const {t} = useTranslation();
    
  return (
    <Flex id="contact" bg={useColorModeValue("#0000001a", "#191919")}  width='full' align='center' justifyContent='center'>
      <Box 
       
        px={4}
        width='full'
        maxWidth='700px'
        
        textAlign='center'
        
      >
      
        <Box p={4} pt={16}>
          <ContactHeader />
          <p>{t("soon")}</p>
          <ContactForm />
        </Box>
      </Box>
    </Flex>
  )
}

 
const ContactHeader = () => {
    const { t } = useTranslation();
  return (
    <Box pb={4} textAlign='center'>
      <Heading>{t('contact')}</Heading>
    </Box>
  )
}


 
const ContactForm = () => {
    const { t } = useTranslation();
     const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_np7kk7f", "template_gt6xxts", form.current, "qLXoJvXBcl7ZYrYiW")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          console.log(process.env.REACT_APP_USER)
      });
      e.target.reset();
    
  };
  return (
    <Box my={8} pb={4} textAlign='center'>
      <form action="" ref={form} onSubmit={sendEmail}>
 
        <FormControl pt={4} >
         
          <Input name="name" bg={useColorModeValue('#fff', '#202023')} type='text' placeholder={t('name')} />
        </FormControl>
 
        <FormControl pt={4}>
          
          <Input name="email" bg={useColorModeValue('#fff', '#202023')} type='email' placeholder={t('email')} />
        </FormControl>
 
        <FormControl  pt={4}>
        
          <Textarea name="message" bg={useColorModeValue('#fff', '#202023')} type='textarea' placeholder={t('message')} />
        </FormControl>
 
        <Button leftIcon={ <ArrowRightIcon/>} value="Send" type="submit" mt={4}>{t('send')}</Button>
        
      </form>
    </Box>
  )
}

export default Contact 