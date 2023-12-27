import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "./components/Interface";
import { Suspense, useEffect, useState, useRef } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import { AmbientLight } from "three";
import { MotionConfig } from "framer-motion";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
    <MotionConfig
    transition={{
      type:"spring",
      mass:5,
      stiffness:500,
      damping:50,
      restDelta:0.0001,
    }}
    >


    
      <Canvas shadows camera={{ position: [12, 6, -5], fov: 12}}>
        {/* <directionalLight intensity={1} position={[0, 10, 0]} /> */}
    <ambientLight intensity={0.2}/>
      {/* <AmbientLight intensity={200}/> */}
        
          {/* Luces puntuales para dar mucha luz */}
          {/* <pointLight position={[15, 25, 60]} intensity={1.5} />
          <pointLight position={[-35, 25, 0]} intensity={1.5} />
          <pointLight position={[15, 25, 0]} intensity={1.5} />
  <directionalLight intensity={0.6} position={[0, 10, 0]} /> */}
        <color attach="background" args={["#333"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} onSectionChange={setSection} />
          <Suspense fallback={null}>
            <Experience section={section} menuOpened={menuOpened}  />
          </Suspense>
          <Scroll html>
            <Interface section={section} menuOpened={menuOpened}  />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
          </MotionConfig>
    </>
  );
}

export default App;