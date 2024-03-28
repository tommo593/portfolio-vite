import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const Hero: React.FC = () => {
    const [show, setShow] = useState<boolean>(true);

    return (
        <Transition in={show} timeout={1000}>
            {(state: string) => {
                const defaultStyle: React.CSSProperties = {
                    transition: 'opacity 1s ease-out',
                    opacity: 0,
                };

                const transitionStyles: { [key: string]: React.CSSProperties } = {
                    entering: { opacity: 1 },
                    entered: { opacity: 1 },
                    exiting: { opacity: 0 },
                    exited: { opacity: 0 },
                };

                return (
                    <div style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        <img src="logo.jpg" alt="Unga Bunga Dev" title="Unga Bunga Dev" className="m-auto pt-8 pb-8"/>
                    </div>
                );
            }}
        </Transition>
    );
};

export default Hero;


