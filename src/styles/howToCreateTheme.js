// Let's invite our friend: withStyles()
import { withStyles } from '@material-ui/core/styles'


// We define the styles. This is a function which receive a theme object
const styles = theme => ({
  // This is the class we are going to use
  bigErrorText: {
    color: theme.palette.error.main,
    fontSize: theme.typography.display3.fontSize
  }
})


// Our sample component, which consumes the classes (and its styles)
let ErrorAdvice = props => (
  <span className={props.classes.bigErrorText}>
    It's big and dangerful!
  </span>
)


// We inject the styles into the component using withStyles()
ErrorAdvice = withStyles(styles)(ErrorAdvice)
