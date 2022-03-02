import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools"

const styles = {
    global: props => ({
        body:{
            bg: mode('#fff', '#202023')(props),
            
        }
    })
}

const components ={
    Heading:{
        variants: {
            'section-title': props => ({
              textDecoration: 'underline',  fontSize: 24,
                textUnderlineOffset: 6,
                textDecorationColor:mode('#e2e8f0', '#525252')(props),
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4 
            })
        }
    },
    Link:{
        baseStyle: props => ({
            color: mode('#3d7aed', '#ff63c3')(props),
            textUnderlineOffset:3
        })
    }
}

const fonts = {
    heading: "Poppins"
}

const colors ={
    glassTeal: "#feb2b2"
}

const config = {
    initialColorMode:'dark',
    useSystemColorMode: true
}
const theme = extendTheme({
    config, styles, components, colors, fonts
})

export default theme
