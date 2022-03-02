import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge, useColorModeValue } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({children}) => (
    <Box>
        <NextLink href="/works">
            <Link color={useColorModeValue('#FBAF00', '#23967F')}>Works</Link>
        </NextLink>
    
    <span>
        &nbsp;
        <ChevronRightIcon/>
        &nbsp;
    </span>
    <Heading display="inline-block" as="h3" fontSize={24} mb={4}>
        {children}
    </Heading>
    </Box>
)

export const WorkImage = ({src,alt}) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4}/>
)

export const Meta = ({children}) => (
    <Badge colorScheme="red" mr={2}>
        {children}
    </Badge>

)