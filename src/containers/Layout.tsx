
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import NavMenu from '../components/NavMenu'

export function Layout(props: any) {
  return (
    <div>
      <NavMenu />
      <br />
      <CssBaseline />
      <Container>{props.children}</Container>
    </div>
  )
}