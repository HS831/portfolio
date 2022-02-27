import { createTheme } from '@material-ui/core/styles';
const black = "#21325E";
const darkPink = "#A13333";

const theme =  createTheme({
    palette: {
        common: {
            black: `${black}`,
            darkPink: `${darkPink}`
        },
        primary: {
            main: `${black}`,
        },
        secondary: {
            main: `${darkPink}`,
        }
    },
    typography: {
        h3: {
            fontWeight: "300"
        }
    }
});

export default theme;