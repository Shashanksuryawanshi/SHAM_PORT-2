import { motion } from "framer-motion";

import { styles } from "../styles";
import { shambhavi, biotechFlask } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="flex flex-col-reverse sm:flex-row justify-between w-full h-full pb-[350px] sm:pb-[250px] lg:pb-0 z-10">
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Shambhavi</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              Biotechnology Student
            </p>
          </div>
          <div className="flex justify-start sm:justify-center items-start mt-5 sm:-mt-10 md:-mt-20 z-10">
            <img src={shambhavi} alt="profile" className="w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-cover rounded-full border-4 border-[#915EFF] shadow-lg shadow-[#915EFF]/50" />
          </div>
        </div>
      </div>

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className='absolute inset-0 top-[350px] sm:top-[250px] lg:top-[120px] flex justify-center items-center z-0 pointer-events-none'
      >
        <img
          src={biotechFlask}
          alt='biotech-flask'
          className='w-[300px] sm:w-[500px] h-auto object-contain opacity-80'
        />
      </motion.div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
