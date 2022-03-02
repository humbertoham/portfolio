import { Container, Box, Heading,  SimpleGrid, Badge, Button, Icon, Text} from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article';
import tindog from '../public/images/works/tindog.jpg'
import drumKit from '../public/images/works/drumkit.jpg'
import simonGame from '../public/images/works/simongame.jpg'
import reactMovies from '../public/images/works/reactmovie.jpg'
import tw2 from '../public/images/works/tw2.jpg'
import Section from '../components/section'
import { AttachmentIcon } from '@chakra-ui/icons';
import {
    IoLogoGithub
} from 'react-icons/io5'
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
const Works = () =>{
    const { t } = useTranslation();
    return(
        <Layout>
        <Container maxW='container.xl'>
            <Heading as="h3" fontSize="36px" mb={4} align="center">
                {t('works')}

            </Heading>
        <SimpleGrid  columns={[1,1,1]} gap={6}>
             <Section delay={0.1}>
                <WorkGridItem id="https://stupefied-williams-6fd73c.netlify.app/" title="Twitter 2" thumbnail={tw2}>
                    <Badge m="2px" colorScheme="red">2022</Badge>
                    <Badge m="2px" colorScheme="red">MongoDB</Badge>
                    <Badge m="2px" colorScheme="red">Expressjs</Badge>
                   <Badge m="2px" colorScheme="red">React</Badge>
                   <Badge m="2px" colorScheme="red">NodeJs</Badge>
                   <Badge m="2px" colorScheme="red">jwt</Badge>
                   <Badge m="2px" colorScheme="red">Graphql</Badge>
                   <Badge m="2px" colorScheme="red">Apollo</Badge>
                   <Badge m="2px" colorScheme="red">Semantic-ui</Badge>
                   
                   <Text m="8px" fontSize="md">desc</Text>
                   <Box align="left" >
                    <a target="_blank" href="https://stupefied-williams-6fd73c.netlify.app/" >
                            <Button m="4px"  colorScheme="blue" leftIcon={<Icon as={AttachmentIcon}/>}>Twitter 2</Button>
                    </a>
                    <a target="_blank" href="https://github.com/humbertoham/twitter-server" >
                    <Button m="4px"  colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>Server {t("repo")}</Button>
                    </a>
                    <a target="_blank" href="https://github.com/humbertoham/twitter-client" >
                    <Button m="4px" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>Client {t("repo")}</Button>
                    </a>
                </Box>
                </WorkGridItem>
            </Section>
            <Section delay={0.1}>
                <WorkGridItem id="https://thirsty-thompson-1e6f20.netlify.app/" title="React Movies" thumbnail={reactMovies}>
                    <Badge m="2px" colorScheme="red">2021</Badge>
                    <Badge m="2px" colorScheme="red">MovieDBAPi</Badge>
                    <Badge m="2px" colorScheme="red">React</Badge>
                    <Badge m="2px" colorScheme="red">StyledComponents</Badge>
                     <Text m="8px" fontSize="md">desc</Text>
                  <Box align="left" >
                    <a target="_blank" href="https://thirsty-thompson-1e6f20.netlify.app/" >
                            <Button m="4px" colorScheme="blue" leftIcon={<Icon as={AttachmentIcon}/>}>React Movies</Button>
                    </a>
                    
                    <a target="_blank" href="https://github.com/humbertoham/ReactMB.github.io" >
                    <Button m="4px" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>{t("repo")}</Button>
                    </a>
                </Box>
                </WorkGridItem>
            </Section>
            <Section delay={0.2}>
                <WorkGridItem id="https://humbertoham.github.io/simon-game-/" title="Simon Game" thumbnail={simonGame}>
                    <Badge m="2px" colorScheme="red">2021</Badge>
                    <Badge m="2px" colorScheme="red">html</Badge>
                    <Badge m="2px" colorScheme="red">css</Badge>
                    <Badge m="2px" colorScheme="red">JavaScript</Badge>
                    <Badge m="2px" colorScheme="red">Jquery</Badge>
                     <Text m="8px" fontSize="md">desc</Text>
                    <Box align="left" >
                    <a target="_blank" href="https://humbertoham.github.io/simon-game-/" >
                            <Button m="4px" colorScheme="blue" leftIcon={<Icon as={AttachmentIcon}/>}>Simon Game</Button>
                    </a>
                   
                    <a target="_blank" href="https://github.com/humbertoham/simon-game-" >
                    <Button m="4px" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>{t("repo")}</Button>
                    </a>
                </Box>
                    
                </WorkGridItem>
            </Section>
            <Section delay={0.2}>
                <WorkGridItem id="https://humbertoham.github.io/drum-kit/" title="Drum kit" thumbnail={drumKit}>
                    <Badge m="2px" colorScheme="red">2021</Badge>
                     <Badge m="2px" colorScheme="red">html</Badge>
                    <Badge m="2px" colorScheme="red">css</Badge>
                    <Badge m="2px" colorScheme="red">JavaScript</Badge>
                    <Badge m="2px" colorScheme="red">Jquery</Badge>
                     <Text m="8px" fontSize="md">desc</Text>
                   <Box align="left" >
                    <a target="_blank" href="https://humbertoham.github.io/drum-kit/" >
                            <Button m="4px" colorScheme="blue" leftIcon={<Icon as={AttachmentIcon}/>}>Drum Kit</Button>
                    </a>
                    
                    <a href="https://github.com/humbertoham/drum-kit" >
                    <Button m="4px" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>{t("repo")}</Button>
                    </a>
                </Box>
                </WorkGridItem>
            </Section>
            <Section delay={0.3}>
                <WorkGridItem id="https://humbertoham.github.io/tindog/" title="Tindog" thumbnail={tindog}>
                 <Badge m="2px" colorScheme="red">2020</Badge>
                    <Badge m="2px" colorScheme="red">html</Badge>
                    <Badge m="2px" colorScheme="red">css</Badge>
                    <Badge m="2px" colorScheme="red">bootstrap</Badge>
                     <Text m="8px" fontSize="md">desc</Text>
                   <Box align="left" >
                    <a target="_blank" href="https://humbertoham.github.io/tindog//" >
                            <Button m="4px" colorScheme="blue" leftIcon={<Icon as={AttachmentIcon}/>}>Tindog</Button>
                    </a>
                    <a target="_blank" href="https://github.com/humbertoham/tindog" >
                    <Button m="4px" colorScheme="gray" leftIcon={<Icon as={IoLogoGithub}/>}>{t("repo")}</Button>
                    </a>
                   
                </Box>
                </WorkGridItem>
            </Section>
            
            
            
           
        </SimpleGrid>
        </Container>
</Layout>
    )

}

export default Works