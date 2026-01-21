import { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'

const About = () => {
  const grid2Container=useRef()
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color row-span-2 md:col-span-3 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
             <img
                    src="assets/coding-pov.png"
                    className="
                    absolute
                    z-0
                    scale-[1.75]
                    -right-20
                    -top-4
                    md:scale-[3]
                    md:left-50
                    md:inset-y-10
                    lg:scale-[2.5]
                    "
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 max-w-md">
                    <p className="headtext">Hi, I'm Samarjeet Kumar</p>
                    <p className="subtext">
                    Over the last 2 years, I developed my frontend and backend dev
                    skills to deliver dynamic and software and web applications.
                    </p>
                </div>
            <div className="absolute z-5 inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color row-span-1 md:col-span-3 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div
          ref={grid2Container}
           className="flex items-center justify-center w-full h-full">
            <p className="flex items-end text-5xl text-gray-500">CODE IS CRAFT</p>
            <Card 
            style={{rotate : '75deg', top: '30%', left: '20%'}}
            text='GRASP' 
            containerRef={grid2Container} />
            <Card 
            style={{rotate : '-30deg', top: '60%', right: '45%'}}
            text='SOLID' 
            containerRef={grid2Container} />
            <Card
            style={{rotate : '90deg', bottom: '30%', left: '70%'}}
             text='Design Principles'
             containerRef={grid2Container} />
            <Card
            style={{rotate : '-45deg', top: '55%', right: '0%'}}
             text='Design Patterns'
             containerRef={grid2Container} />
            <Card
            style={{rotate : '20deg', top: '10%', left: '38%'}} 
             text='SRP'
             containerRef={grid2Container} />
             <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/React.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/Next.js.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/JavaScript.png"
              containerRef={grid2Container}
            />
           </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color row-span-1 md:col-span-3 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in Mumbai, and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color row-span-1 md:col-span-2 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color row-span-1 md:col-span-4 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
    </div>
    </section>
  )
}

export default About