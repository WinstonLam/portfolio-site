const particlesConfig =
{
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
    background: {
        color: "#000"
    },
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

export default particlesConfig;