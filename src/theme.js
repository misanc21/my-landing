import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: deepPurple[900],
      },
      secondary: {
        main: teal[500],
      },
    },
  });

  export default Theme