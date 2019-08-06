import {red} from '@material-ui/core/colors';
import {createMuiTheme} from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#f5821f',
        },
        secondary: {
            main: '#58595b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#a2a4a7',
        },
    },
    typography: {
        fontFamily: [
            'TypoSquareDemo',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
});

export default theme;