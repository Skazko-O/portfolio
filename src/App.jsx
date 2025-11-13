import './App.css'
import HeroSection from './components/HeroSection'
import Profile from './components/Profile'
import FieldBox from './components/FieldBox'
import Tools from './components/Tools'
import Skills from './components/Skills'
import MyWorks from './components/MyWorks'

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
            <Skills />
          </FieldBox>
        </div>
        <FieldBox title="MY WORKS">
          <MyWorks />
        </FieldBox>
      </div>
    </>
  )
}

export default App
