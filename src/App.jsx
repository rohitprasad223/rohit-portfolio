import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer.jsx"
import ScrollToHash from "./components/ScrollToHash";



import ParticleBackground from "./effects/ParticleBackground"
import CustomCursor from "./effects/CustomCursor"

function App() {

return (

<div className="bg-slate-900 text-white">
<ScrollToHash />
<CustomCursor/>
<ParticleBackground/>
<Navbar/>
<Hero/>
<About/>
<Education/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
</div>

)

}

export default App