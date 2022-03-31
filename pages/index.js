import NextLink from 'next/link'

import { Container, Link, Box, Heading, useColorModeValue, Button, SimpleGrid, ListItem, List, Icon } from "@chakra-ui/react";
import Layout from '../components/layouts/article';
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { ChevronRightIcon } from '@chakra-ui/icons';
import {
    IoLogoGithub, IoLogoLinkedin
} from 'react-icons/io5'

import { BioSection, BioYear } from '../components/bio';

import {GridItem} from '../components/grid-item'

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

const Page = () => {
    const { t } = useTranslation();
    return (
        <Layout>
        <Container maxW="container.xl">
            <div class="container">
  <h2 class="title">
    <span class="title-word title-word-1">{t('hi')} </span>
    <span class="title-word title-word-2">{t('im')} </span>
    <span class="title-word title-word-3">Humberto </span>
    <span class="title-word title-word-4">Ham </span>
 
  </h2>
</div>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" fontSize="24px" variant="page-tittle">
                        {t('about')}
                    </Heading>
                    <p>
                    {t('desc')}
                </p>
                </Box>
              
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" >
                    {t('work')}
                </Heading>
                <Paragraph>
                    {t('paragraph')}
                    <NextLink href="https://github.com/humbertoham">
                        <Link color={useColorModeValue('#FBAF00', '#23967F')}> github</Link>
                    </NextLink>
                    .
                </Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="pink">{t('portfolio')}</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                <BioYear>2001</BioYear>
                {t('born')}
</BioSection>
 <BioSection>
                <BioYear>2020</BioYear>
                {t('major')}
</BioSection>
 <BioSection>
                <BioYear>2021</BioYear>
                {t('freelance')}
</BioSection>

            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Hobbies
                </Heading>
               <Paragraph>
                    {t('do')}
               </Paragraph>

            </Section>

            <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
                On the web
            </Heading>
            <List>
                <ListItem>
                <Link href="/" target="_blank">
                    <Button variant="ghost" colorScheme="pink" leftIcon={<Icon as={IoLogoGithub}/>}>@humbertoham</Button>
                </Link>
                
                </ListItem>
 <ListItem>
                <Link href="/" target="_blank">
                    <Button variant="ghost" colorScheme="pink" leftIcon={<Icon as={IoLogoLinkedin}/>}>@humbertoham</Button>
                </Link>
                </ListItem>
            </List>

            </Section>
        </Container>
        </Layout>
        
    )
}

export default Page;