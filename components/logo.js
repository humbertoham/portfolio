import Link from 'next/link'


import { Text,Image,Box, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'



const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height:30px;
    line-height: 20px;
    padding: 10px;
    margin-top: 35px;

`
// to do image problem

/*<Image src="public/images/profilePicture.jpg" width={20} heigth={20} layout="responsive"
                     alt="profilePicture" objectFit='contain'/> 
                   */

const Logo = () => {
    
    return (
        <Link href="/">
            <a>
                <LogoBox>
                    
                   <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                    <Image   maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profilePicture.jpg" alt="Profile Picture"/>
                </Box>  
                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='Poppins' fontWeight="bold" ml={6}>
                    Humberto Ham
                </Text>
                </LogoBox>
            </a>
        </Link>

    )
}

export default Logo;