import { OrbitControls, useScroll } from "@react-three/drei";
import { Copa } from "./Copa";
import { Canvas, useThree,useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

import { AmbientLight } from "three";
import { Escenario } from "./Escenario";
import { Scene } from "./Scene";
import { Trophy } from "./TrophyCup";
import { Avatar } from "./Avatar";
import { animate,useMotionValue } from "framer-motion";
import { framerMotionConfig } from "../../config";
import { PerspectiveCamera } from 'three';

export const Experience = (props) => {
  const { nodes, materials } = useGLTF("models/trophyCup.gltf");
  const lightsRef = useRef([]);
  const {  menuOpened } = props;


  const { viewport } = useThree();
  const data = useScroll();

  const [section, setSection] = useState(0);

  const cameraPositionX = useMotionValue();
  const cameraPositionY = useMotionValue();

  const cameraLookAtX = useMotionValue();


  useEffect(() => {
    // console.log(section)
    if(section === 1) {
      animate(cameraPositionX, menuOpened ? 0.43 : 0, {
        ...framerMotionConfig,
      });
      animate(cameraLookAtX, menuOpened ? -15 :0, {
        ...framerMotionConfig,
      });
    }
    if(section === 2 ) {
      animate(cameraPositionX, menuOpened ? -3.7 : 0, {
        ...framerMotionConfig,
      });
      animate(cameraLookAtX, menuOpened ? 5 :0, {
        ...framerMotionConfig,
      });
    }
    if(section === 0 ) {
      animate(cameraPositionX, menuOpened ? -3 : 0, {
        ...framerMotionConfig,
      });
      animate(cameraLookAtX, menuOpened ? 5 :0, {
        ...framerMotionConfig,
      });
    }
    
  }, [menuOpened,section]);

  useEffect(() => {

    if (section === 1) {
      animate(cameraPositionX, section === 2 ? 1 : 0, {
        ...framerMotionConfig,
      });
      
      animate(cameraLookAtX, section === 2 ? -10 :0, {
        ...framerMotionConfig,
    
      });
    }
    if (section === 2) {
      animate(cameraPositionX, 1, {
        type: "tween",
        duration: 0.5, // Tipo de animación
         // Tipo de animación
        ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
      });
  
      // Animación "tween" de cameraLookAtX desde el valor actual hasta -13
      animate(cameraLookAtX, -13, {
        type: "tween",
        duration: 0.5, // Tipo de animación
        ...framerMotionConfig, // Opciones adicionales de la animación (pueden ajustarse)
      });
    
    }
    if (section === 3) {
      animate(cameraPositionX, 8, {
        type: "tween",
        duration: .8, // Duración de la animación en segundos (puedes ajustarla)
      });
  
      // Animación "tween" de cameraLookAtX desde el valor actual hasta -29
      animate(cameraLookAtX, -29, {
        type: "tween", // Tipo de animación
        duration: 23.5, // Duración de la animación en segundos (puedes ajustarla)
      });
    
      
    }
    
    
    
  }, [section]);

  const characterContainerAboutRef = useRef();

  const [characterAnimation, setCharacterAnimation] = useState("Cheering");
  useEffect(() => {
    if(section === 2){
      setCharacterAnimation("Landing");

    }
    setTimeout(() => {
      setCharacterAnimation(section === 2 ? "Standing" : "Cheering");
    },380);
  }, [section]);

 
  useFrame((state) => {
    let curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection > 3) {
      curSection = 3;
    }

    if (curSection !== section) {
      setSection(curSection);
    }

   
      // Configurar la posición y el punto de mira para la sección 0
      state.camera.position.x = cameraPositionX.get();
      state.camera.lookAt(cameraLookAtX.get(), -1, 22);
    
      // Restaurar el zoom a su valor predeterminado para otras secciones diferentes de 1
      state.camera.zoom = 0.3;
      state.camera.updateProjectionMatrix();
    
    // const position = new THREE.Vector3();
    // characterContainerAboutRef.current.getWorldPosition(position);
    // console.log([position.x, position.y, position.z]);

    // const quaternion = new THREE.Quaternion();
    // characterContainerAboutRef.current.getWorldQuaternion(quaternion);
    // const euler = new THREE.Euler();
    // euler.setFromQuaternion(quaternion, "XYZ");

    // console.log([euler.x, euler.y, euler.z]);
  

    // state.camera.position.x = cameraPositionX.get();
    // state.camera.lookAt(cameraLookAtX.get(), -1, 22);


    const position = new THREE.Vector3();
    characterContainerAboutRef.current.getWorldPosition(position)
  });
  // // Animación para las luces que roden circularmente
  // useFrame((state, delta) => {
  //   if (section === 3){
  //     const time = state.clock.getElapsedTime();
  //     lightsRef.current.forEach((light, index) => {
  //       const angle = (time + index * 128) * .1;
  //       const radius = 360;
  //       light.position.x = Math.cos(angle) * radius;
  //       light.position.z = Math.sin(angle) * radius;
  //     });
  //   }
    
  // });

// useEffect(() => {
  
// if (section === 0){
//   console.log("es 0")
// }
  
// }, [section])


  return (
    <>
      {/* Luces puntuales que roden circularmente */}
      <pointLight ref={(ref) => (lightsRef.current[0] = ref)} color="#fff700da" intensity={0.04} position={[-40, 180, 0]} />
      <directionalLight color="#fff700da" intensity={ .5} position={[-10, 180, 0]} />
      <directionalLight color="#fff700da" intensity={.3} position={[0, -10, -100]} />
{/* 
      {section === 3 ? (
        <> */}
        <pointLight ref={(ref) => (lightsRef.current[6] = ref)} color="ffffff" intensity={1.5} position={[0, 0, 0]} />
        {/* <pointLight ref={(ref) => (lightsRef.current[7] = ref)} color="ffffff" intensity={.8} position={[10, -100, 10]} /> */}
        {/* <pointLight ref={(ref) => (lightsRef.current[8] = ref)} color="fdf50c5a" intensity={0.008} position={[-70, 70, 70]} />
        <pointLight ref={(ref) => (lightsRef.current[9] = ref)} color="fdf50c5a" intensity={0.008} position={[-50, 50, 50]} />
    <pointLight ref={(ref) => (lightsRef.current[10] = ref)} color="fdf50c5a" intensity={0.008} position={[-60, 60, 60]} />  */}
    {/* </>
      ): null} */}
      {/* <pointLight ref={(ref) => (lightsRef.current[1] = ref)} color="#fff700da" intensity={0.01} position={[0, 0, 0]} />
      <pointLight ref={(ref) => (lightsRef.current[2] = ref)} color="white" intensity={.04} position={[0, 0, 100]} />
      <pointLight ref={(ref) => (lightsRef.current[3] = ref)} color="fdf50c5a" intensity={0.001} position={[0, 0, 0]} />


       <pointLight ref={(ref) => (lightsRef.current[4] = ref)} color="fdf50c5a" intensity={0.08} position={[40, 0, 0]} />
      <pointLight ref={(ref) => (lightsRef.current[5] = ref)} color="fdf50c5a" intensity={0.08} position={[30, 30, 30]} />  */}

      
     

 




{/* <ambientLight intensity={1}/>

      {/* */}
       {/* <OrbitControls /> */}
      {/* <pointLight position={[15, 25, 60]} intensity={9.4} />
      <pointLight position={[-35, 25, 0]} intensity={0.4} />
      <pointLight position={[15, 25, 0]} intensity={1.4} /> */}
      
      {/* <Office/> */}
      {/* <Scene/> */}
      {/* <Trophy/> */}
      {/* <Scene/> */}
      {/* <Messi/> */}
      {/* <Copa/> */}
      
      <group
       scale={1}
       position={
        section === 1
          ? [0, 2, -3.3]
          : section === 2
          ? [-1.2, .68, -4.793]
          : section === 3
          ? [6, 2.2, -3.9]
          : [0, 0, 0] // Add the default position when section is not 0 or 1
      }
      >
      <group
         ref={characterContainerAboutRef}
         rotation={[Math.PI / 100, 10, 0]}

        >
      <Escenario section={section}/>
      </group>
      <group
  name="Armature"
  position={
    section !== 2
      ? [0, 3, 0.603]
      : section === 2
      ? [0.9, 4.38, 1.793]
      : [0, 0, 0] // Add the default position when section is not 0 or 1
  }
  rotation={[Math.PI / 2, 0, 3.2]}
  scale={ 

  section !== 2
  ? 0.0018
  : section === 2
  ? 0.0018
  : [0, 0, 0]
  }
>
          {/* <skinnedMesh
            name="low16994Group17395_lambert1_0"
            geometry={nodes.low16994Group17395_lambert1_0.geometry}
            material={materials["lambert1.004"]}
            skeleton={nodes.low16994Group17395_lambert1_0.skeleton}
          />
          <primitive object={nodes.low16994Hips} /> */}
          <Avatar animation={characterAnimation}/>
      </group>

      </group>
     
    
    </>
  );
};
