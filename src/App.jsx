import './App.css'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import FieldBox from './components/FieldBox'
import Tools from './components/Tools'

function App() {


  return (
    <>
      <HeroSection />
      <div className='container'>
        <div className="main-profile">
          <Profile />
          <FieldBox title="Tools">
            <Tools />
          </FieldBox>
          <FieldBox title="Skills">
          </FieldBox>
        </div>
        <FieldBox title="MY WORKS">
        </FieldBox>
      </div>
    </>
  )
}

export default App
