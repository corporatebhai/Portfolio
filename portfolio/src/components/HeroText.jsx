import { FlipWords } from "./FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
    const words = ['Secure','Modern','Scalable']
    const variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0}
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* Desktop view */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
            >Hi I'm Samarjeet</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-medium text-neutral-300"
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.2 }}
                >A Developer <br /> Dedicated to Crafting </motion.p>
                <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.5 }}
                >
                    <FlipWords words={words}
                    className='text-8xl font-bold text-white'
                    />
                </motion.div>
                <motion.p className="text-4xl font-medium text-neutral-300"
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.8 }}
                >Web Solutions</motion.p>
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex flex-col md:hidden c-space">
            <motion.p className="text-4xl font-medium"
            variants={variants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
            >Hi I'm #</motion.p>
            <div>
                <motion.p className="text-5xl font-bold text-neutral-300"
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.2 }}
                >Buiilding</motion.p>
                <motion.div
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.5 }}
                ><FlipWords words={words}
                    className='text-8xl font-bold text-white'
                    /></motion.div>
                <motion.p className="text-5xl font-bold text-neutral-300"
                variants={variants}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1.8 }}
                >Web Solutions</motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText