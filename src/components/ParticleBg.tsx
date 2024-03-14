import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticleBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded: any = (container?: Container) => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        url="http://foo.bar/particles.json"
        particlesLoaded={particlesLoaded}
      />
    );
  }

  return <></>;
};

export default ParticleBg;
