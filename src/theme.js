import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
import teal from '@material-ui/core/colors/teal';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: blueGrey[900],
      },
      secondary: {
        main: teal[500],
      },
    },
  });

  export default Theme