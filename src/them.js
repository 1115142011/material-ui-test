import { red } from '@material-ui/core/colors'
import { createMuiTheme } from '@material-ui/core/styles'
// import { zhCN } from '@material-ui/core/locale'

// import { Theme } from '@material-ui/core/styles/createMuiTheme'
// import { Breakpoint } from '@material-ui/core/styles/createBreakpoints'


 
const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: '#0A1E74',
      },
      secondary: {
        main: '#B1B6D8',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#E9E9FF',
        primary: '#E9E9FF',
      },
    },
    typography: {
      pxToRem: (value) => value,
      h5: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight:'16px'
      },
      body1:{
        fontSize:14,
        lineHeight:'16px'
      },
      h6:{
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight:'15px'
      },
      caption:{
        lineHeight:'12px'
      },
    },
    overrides: {
      MuiInputBase: {
        root: {
          height: 45,
          background: '#fafafa',
          paddingLeft: 8,
        },
      },
    },
  }
)

export default theme
