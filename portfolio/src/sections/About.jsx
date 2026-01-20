import React from 'react'

const About = () => {
  return (
    <section className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="grid-default-color row-span-2 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200">
             <img
                    src="assets/coding-pov.png"
                    className="
                    absolute
                    z-0
                    scale-[1.75]
                    -right-[5rem]
                    -top-[1rem]
                    md:scale-[3]
                    md:left-50
                    md:inset-y-10
                    lg:scale-[2.5]
                    "
                />
                <div className="absolute bottom-6 left-6 right-6 z-10 max-w-md">
                    <p className="headtext">Hi, I'm Samarjeet</p>
                    <p className="subtext">
                    Over the last 2 years, I developed my frontend and backend dev
                    skills to deliver dynamic and software and web applications.
                    </p>
                </div>
            <div className="absolute z-5 inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
        {/* Grid 3 */}
        <div className="grid-black-color row-span-1 md:col-span-3 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
        {/* Grid 4 */}
        <div className="grid-special-color row-span-1 md:col-span-2 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
        {/* Grid 5 */}
        <div className="grid-default-color row-span-1 md:col-span-4 h-[15rem] md:h-full relative overflow-hidden hover:-translate-y-1 duration-200"></div>
    </div>
    </section>
  )
}

export default About