import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay, useColorModeValue, Button} from '@chakra-ui/react'
import {Global} from '@emotion/react'

import {AttachmentIcon} from '@chakra-ui/icons'

export const GridItem = ({children, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail}
            alt={title}
            className="grid-item-thumbnail" placeholder='blur'
            loading='lazy'/>
            <LinkOverlay href={href} target="_blank">
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({children, id, title, thumbnail}) => (
    <Box w="100%" bg={useColorModeValue('#fff', '#202023')} borderRadius="16px" boxShadow='xl' p='6' align="center" mb="10px" >
        
            <LinkBox cursor="pointer">
                <a target="_blank" href={id}>
                <Image  src={thumbnail} alt={title} className="grid-item-thumbnail" placeholder='blur'/>
                </a>
             </LinkBox>
                    <Text mt={2} fontSize={24}>
                        {title}
                    </Text>
             
                <Text pb="10px" fontSize={14}>{children}</Text>
            
        
    </Box>
)

export const GridItemStyle = ()=>(
    <Global styles={`
        .grid-item-thumbnail{
            border-radius:12px;
        }
       

    `

}/>
)