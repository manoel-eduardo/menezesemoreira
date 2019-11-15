import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f5821f',
        },
        secondary: {
            main: '#ffffff',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'whitesmoke',
        },
    },
    typography: {
        h1: {
            fontFamily: 'TypoSquareDemo', 
        },
        h2: {
            fontFamily: 'TypoSquareDemo', 
        },
        h3: {
            fontFamily: 'TypoSquareDemo', 
        },
        h4: {
            fontFamily: 'TypoSquareDemo', 
        },
        h5: {
            fontFamily: 'TypoSquareDemo', 
        },
        h6: {
            fontFamily: 'TypoSquareDemo', 
        },
        fontFamily: 'Roboto'
    },
});

export default theme;