import Particles from "react-particles";
import particlesConfig from "./particles-config";
import { useCallback } from "react";
import { ZIndex, type Container, type Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticlesBackdrop = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: 0,
                },
                backgroundMode: {
                    enable: false
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 0
                    },
                    collisions: {
                        enable: false
                    },
                    color: {
                        value: "#ffffff"
                    },
                    shape: {
                        type: "circle"
                    },
                    opacity: {
                        value: { min: 0.3, max: 0.8 }
                    },
                    size: {
                        value: { min: 1, max: 10 }
                    },
                    move: {
                        enable: true,
                        size: true,
                        speed: 3,
                        direction: "none",
                        outModes: {
                            default: "destroy"
                        },
                        trail: {
                            enable: true,
                            fillColor: "#000000",
                            length: 3
                        }
                    }
                },
                detectRetina: true,

                emitters: {
                    direction: "none",
                    rate: {
                        delay: 0.25,
                        quantity: 10
                    },
                    position: {
                        x: 50,
                        y: 50
                    },
                    size: {
                        width: 0,
                        height: 0
                    },
                    spawnColor: {
                        value: "#ff0000",
                        animation: {
                            h: {
                                enable: true,
                                speed: 5
                            },
                            l: {
                                enable: true,
                                speed: 0,
                                offset: {
                                    min: 20,
                                    max: 80
                                }
                            }
                        }
                    }
                }
            }
            }
        />
    );
}

export default ParticlesBackdrop;

