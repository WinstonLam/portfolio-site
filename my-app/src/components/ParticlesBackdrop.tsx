import Particles from "react-particles";
import particlesConfig from "./particles-config";
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
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
            options={{ particlesConfig }}
        />
    );
}

export default ParticlesBackdrop;

