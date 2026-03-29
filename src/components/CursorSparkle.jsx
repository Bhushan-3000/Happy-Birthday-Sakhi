import Particles from "react-tsparticles";

export default function CursorSparkle() {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 50 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 2,
          },
          opacity: { value: 0.7 },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "trail",
            },
          },
          modes: {
            trail: {
              delay: 0.05,
              quantity: 5,
              particles: {
                color: { value: "#ff69b4" },
              },
            },
          },
        },
      }}
    />
  );
}