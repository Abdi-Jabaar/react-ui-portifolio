import { FaBars,  } from "react-icons/fa"
import { FiActivity,  FiCpu, FiFolder, FiHome, FiInfo, FiMenu, FiUser,  } from "react-icons/fi"

const Navbar = ({ scrollToSection, refs }) => {
  return (
    <nav className="sec-bg-color px-20 shadow-lg ">
      <div className='flex justify-between gap-5 text-center p-4 '>
        {/* logo */}
        <div className="flex items-center gap-3 text-2xl font-bold tracking-wider hover:scale-110 transition">
          <FiUser size={30} className="third-color " />
          <h1>Abdi<span className="third-color px-0.5">Jabaar</span></h1>
        </div>
        {/* nav */}
        <div className="hidden md:flex items-center gap-6 font-semibold">
              
            <a  onClick={() => scrollToSection(refs.heroRef)} className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:rotate-[15deg] hover:scale-110 hover:skew-y-3 hover:text-[#00FFE0]">
              <FiHome />
              Home
            </a>
                    
            <a onClick={() => scrollToSection(refs.skillsRef)} className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:rotate-[15deg] hover:scale-110 hover:skew-y-3 hover:text-[#00FFE0]">
              <FiCpu />
            Skils
          </a>
          
                 
            <a onClick={() => scrollToSection(refs.trainingRef)} className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:rotate-[15deg] hover:scale-110 hover:skew-y-3 hover:text-[#00FFE0]">
              <FiActivity /> 
            Trainings
          </a>
          
             
                 
            <a onClick={() => scrollToSection(refs.projectsRef)} className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:rotate-[15deg] hover:scale-110 hover:skew-y-3 hover:text-[#00FFE0]">
              <FiFolder />
            Projects
          </a>
               
                
            <a onClick={() => scrollToSection(refs.aboutRef)} className="flex items-center gap-2 transition-transform duration-300 ease-in-out hover:transform hover:rotate-[15deg] hover:scale-110 hover:skew-y-3 hover:text-[#00FFE0]">
              <FiInfo />
            about
          </a>
        </div>
        {/* icon */}
        <div className="md:hidden hover:scale-110 hover:text-[#00ffe0] transition">
          <button><FiMenu size={30} /></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar