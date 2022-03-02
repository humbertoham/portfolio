import { Container, Badge, Link, List, ListItem, useColorModeValue} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work =()=>{
    return (
        <Layout title="tindog">
            <Container>
                <Title>
                    tindog <Badge colorScheme="red">2020</Badge>
                </Title>
                <P>
                    paragraph
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta >Website</Meta>
                        <Link color={useColorModeValue('#FBAF00', '#23967F')} href="https://humbertoham.github.io/tindog/">
                        https://humbertoham.github.io/tindog/ <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Html, Css, Bootstrap</span>
                    </ListItem>

                </List>
                <WorkImage/>
            </Container>
        </Layout>
    )
}

export default Work