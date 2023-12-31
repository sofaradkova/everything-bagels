'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className="px-[8vw] py-4 relative mb-[65px]"
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between items-center lg:gap-8 gap-4`}>
      <img
        src="/main-logo.svg"
        alt="main-logo"
        className="w-[72px] h-[72px] object-contain"
      />
      <div className="flex justify-between w-[327px] gap-[32px] text-black">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/catering">Catering</Link>
        <a href="/aboutus">About Us</a>
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
