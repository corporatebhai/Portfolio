import { Globe } from '../components/globe'
import CopyEmailButton from '../components/CopyEmailButton'
import { Frameworks } from '../components/Frameworks'

const About = () => {
  return (
    <section id="about" className="c-space section-spacing scroll-mt-24">
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
                    Over the last 2 years, I developed my frontend
                    skills to deliver dynamic and software and web applications.
                    </p>
                </div>
            <div className="absolute z-5 inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="row-span-1 md:col-span-3 h-72 md:h-full relative overflow-hidden rounded-2xl border border-mint/20 bg-linear-to-br from-mint/18 via-aqua/10 to-white/6 backdrop-blur-xl hover:-translate-y-1 duration-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,219,150,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(51,194,204,0.15),transparent_35%)]" />
          <div className="relative flex h-full flex-col justify-between gap-4 p-6">
            <div className="max-w-md">
              <p className="headtext text-white">GitHub Activity</p>
              <p className="subtext text-white/70">
                A live contribution snapshot from my GitHub profile.
              </p>
            </div>
            <a
              href="https://github.com/corporatebhai"
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              <img
                src="https://ghchart.rshah.org/57db96/corporatebhai"
                alt="GitHub contributions for corporatebhai"
                className="w-full rounded-xl border border-white/12 bg-white/8 p-3 shadow-[0_20px_50px_rgba(3,4,18,0.35)]"
              />
            </a>
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
        <div className="grid-default-color row-span-1 md:col-span-4 h-60 md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
            <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
    </div>
    </section>
  )
}

export default About
