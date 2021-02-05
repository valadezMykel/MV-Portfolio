
import NavbarName from './components/NavbarName'
import BackgroundDiv from './components/projectCards/backgroundDiv'
import ScreenSizeContext from './contexts/screenSizeContext'
import Home from './components/Home'
import InfoCard from './components/infoCard'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <ScreenSizeContext>
      <div style={{backgroundColor: 'rgb(230,225,215)'}}>
        <NavbarName />
      </div>
      <BrowserRouter>
        <Switch>
          <Route exact path= '/' component={Home} />
        </Switch>
      </BrowserRouter>

      <Container>
        <BackgroundDiv />
        <BackgroundDiv isReversed={true}/>
      </Container>

      {/* <InfoCard /> */}
    </ScreenSizeContext>
  );
}

export default App;
