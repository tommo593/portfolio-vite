import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SiReact, SiVite, SiTypescript, SiTailwindcss, SiNodedotjs, SiGit, SiJira } from 'react-icons/si';
import { twMerge } from 'tailwind-merge';

// Component: Main DivOrigami Section
export const DivOrigami: React.FC = () => {
  return (
    <section className="flex h-40 flex-col items-center justify-center gap-12 px-4 py-24 md:flex-row">
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-blue-200 text-neutral-900">
            <SiReact />
          </LogoItem>,
          <LogoItem key={2} className="bg-yellow-300 text-neutral-900">
            <SiVite />
          </LogoItem>,
          <LogoItem key={3} className="bg-blue-500 text-neutral-900">
            <SiTypescript />
          </LogoItem>,
          <LogoItem key={4} className="bg-blue-300 text-neutral-900">
            <SiTailwindcss />
          </LogoItem>,
          <LogoItem key={5} className="bg-green-600 text-neutral-900">
            <SiNodedotjs />
          </LogoItem>,
          <LogoItem key={6} className="bg-orange-600 text-neutral-900">
            <SiGit />
          </LogoItem>,
          <LogoItem key={7} className="bg-blue-800 text-neutral-900">
            <SiJira />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

// Constants for timing
const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

// Component: LogoRolodex Props
interface LogoRolodexProps {
  items: React.ReactNode[];
}

// Component: LogoRolodex (Rotating Cards)
const LogoRolodex: React.FC<LogoRolodexProps> = ({ items }) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      style={{
        transform: 'rotateY(-20deg)',
        transformStyle: 'preserve-3d',
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)',
            zIndex: -index,
            backfaceVisibility: 'hidden',
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          initial={{ rotateX: '0deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '-180deg' }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>

        <motion.div
          style={{
            y: '-50%',
            x: '-50%',
            clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)',
            zIndex: index,
            backfaceVisibility: 'hidden',
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: '180deg' }}
          animate={{ rotateX: '0deg' }}
          exit={{ rotateX: '0deg' }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: 'easeInOut',
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: 'translateZ(1px)',
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

// Component: LogoItem Props
interface LogoItemProps {
  children: React.ReactNode;
  className?: string;
}

// Component: LogoItem (Individual Cards)
const LogoItem: React.FC<LogoItemProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        'grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DivOrigami;
