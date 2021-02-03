
import Navbar from './components/Navbar'
import BackgroundDiv from './components/projectCards/backgroundDiv'
import ScreenSizeContext from './contexts/screenSizeContext'


function App() {
  return (
    <ScreenSizeContext>
      <Navbar />
      <BackgroundDiv />
    </ScreenSizeContext>
  );
}

export default App;
