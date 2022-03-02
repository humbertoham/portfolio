import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    Icon
} from '@chakra-ui/react'

import {HamburgerIcon} from '@chakra-ui/icons'
import { defaultConfig } from 'next/dist/server/config-shared'

import { IoLogoGithub, IoLogoLinkedin, IoMail } from 'react-icons/io5'

import ThemeToggleButton from './theme-toggle-button'

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

const LinkItem = ({href, path, children}) =>{
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href}>
            <Link p={2} bg={active ? 'glassTeal' : undefined}
            color={active? '#202023' : inactiveColor}>
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props
    const { t } = useTranslation();
    return(
        <Box position="static" p={5} as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')}
         zIndex={1} {...props}>
           <Container display="flex" p={2} maxW="container.xl" wrap="wrap" align="center" justify="space-between">
            <Flex align="center" mr={5}>
                <Heading as='h1' size="lg">
                    <Logo/>
                </Heading>
            </Flex>
            <Stack fontSize='xl' direction={{base: 'column', md:'row'}}
            display={{base:'none', md:'flex'}}
            width={{base:'full', md:'auto'}}
            alignItems="center" 
            flexGrow={1} mt={{base:4, nmd:0}}>
                 <a style={{padding:"8px"}} href="mailto: hamduranhumberto@gmail.com">
                <IoMail size="32px"/>
            </a>
            <a style={{padding:"8px"}}  target="_blank" href="https://www.linkedin.com/in/humberto-ham-dur%C3%A1n-447470233/">
                <IoLogoLinkedin size="32px"/>
            </a>
              <a style={{padding:"8px"}}  target="_blank" href="https://github.com/humbertoham">
                <IoLogoGithub size="32px"/>
            </a>
            <LinkItem href="/" path={path}>{t("abou")}</LinkItem>
            <LinkItem  href="/works" path={path}>
            {t('works')}
            </LinkItem>
            <LinkItem href="/resume" path={path}>
                Resume
            </LinkItem>
            <LinkItem href="#contact">{t("co")}</LinkItem>
            </Stack>
            
             
            <Box flex={1} align="right">
               <ThemeToggleButton />
                <Box ml={2} mt={-2} display={{base: 'inline-block', md: 'none'}}>
                    
                    <Menu  >
                        <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label='Options'
                        mt={5}/>
                        <MenuList bg={useColorModeValue('#ffffff', '#202023')}>
                            <NextLink href="/" passHref>
                                <MenuItem as={Link}>
                                    {t('abou')}
                                </MenuItem>
                                
                            </NextLink>
                            <NextLink href="/works" passHref>
                                <MenuItem as={Link}>
                                    {t('works')}
                                </MenuItem>
                                
                            </NextLink>
                            <NextLink href="/resume" passHref>
                                <MenuItem as={Link}>
                                    Resume
                                </MenuItem>
                                
                            </NextLink>
                            <NextLink href="#contact" passHref>
                                <MenuItem as={Link}>
                                    {t('co')}
                                </MenuItem>
                                
                            </NextLink>
                        </MenuList>
                        
                    </Menu>
        
                </Box>
                
            </Box>
           </Container>
        </Box>
    )
}

export default Navbar;