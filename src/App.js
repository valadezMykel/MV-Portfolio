
import NavbarName from './components/NavbarName'
import BackgroundDiv from './components/projectCards/backgroundDiv'
import ScreenSizeContext from './contexts/screenSizeContext'
import SmallNav from './components/SmallNav'

function App() {
  return (
    <ScreenSizeContext>
      <NavbarName />
      <SmallNav />
      <BackgroundDiv />
      <BackgroundDiv isReversed={true}/>
    </ScreenSizeContext>
  );
}

export default App;
