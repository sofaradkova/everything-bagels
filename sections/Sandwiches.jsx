'use client';

import { motion } from 'framer-motion';
import { Ingredients, DarkButton, TitleText } from '../components';

import styles from '../styles';
import { staggerContainer, slideIn, fadeIn } from '../utils/motion';
import { ingredientsList } from '../constants';

const Sandwiches = () => (
  <section className={`${styles.paddings} relative z-10 h-[900px] mt-[450px]`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className={`${styles.innerWidth} flex flex-col items-center`}
    >
      <TitleText title={<p>Choose Your Sandwich</p>} textStyles="text-center text-main-brown" />
      <div
        className="flex-[0.75] flex justify-center flex-col"
      >
        <div className="mt-[31px] flex flex-col">
          {ingredientsList.map((sandwich, index) => (
            <div className={`flex ${index % 2 ? 'flex-row-reverse' : 'flex-row'} gap-6 mx-auto ${index % 2 ? 'left' : 'right'}`}>
              <motion.div
                variants={slideIn(`${index % 2 ? 'right' : 'left'}`, 'tween', 0.2, 1)}
                className="flex justify-center flex-col"
              >
                <Ingredients
                  key={sandwich.name}
                  index={index}
                  {...sandwich}
                />
              </motion.div>
              <motion.div
                variants={slideIn(`${index % 2 ? 'left' : 'right'}`, 'tween', 0.2, 1)}
                className={`flex-1 ${styles.flexCenter} relative w-[45vw]`}
              >
                <img
                  src={`${sandwich.imgUrl}`}
                  alt={`${sandwich.imgUrl}`}
                  className={`w-[90%] h-[90%] object-contain absolute ${index % 2 ? 'right-[3.5vw]' : 'left-[3.5vw]'}`}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="text-center"
      >
        <DarkButton title="View All Sandwiches" buttonStyle="bg-light-brown mt-[50px]" />
      </motion.div>

    </motion.div>
  </section>
);

export default Sandwiches;
