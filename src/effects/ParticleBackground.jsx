import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function ParticleBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // correct usage for v3
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              area: 800,
            },
          },

          color: {
            value: "#3b82f6",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#3b82f6",
            opacity: 0.3,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1.2,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: {
              min: 1,
              max: 3,
            },
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },

          modes: {
            grab: {
              distance: 140,
              links: {
                opacity: 0.6,
              },
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticleBackground;