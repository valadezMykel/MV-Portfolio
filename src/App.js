
import NavbarName from './components/NavbarName'
import BackgroundDiv from './components/projectCards/backgroundDiv'
import ScreenSizeContext from './contexts/screenSizeContext'
import SmallNav from './components/SmallNav'
import PortfolioImage from './components/ProfileImage'
import InfoCard from './components/infoCard'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <ScreenSizeContext>
      <div style={{backgroundColor: 'rgb(230,225,215)'}}>
        <NavbarName />
        <Container className='mt-5'>
          <PortfolioImage />
        </Container>
      </div>
      <Container>
        <BackgroundDiv />
        <BackgroundDiv isReversed={true}/>
      </Container>
      {/* <SmallNav /> */}
      {/* <InfoCard /> */}
    </ScreenSizeContext>
  );
}

export default App;
