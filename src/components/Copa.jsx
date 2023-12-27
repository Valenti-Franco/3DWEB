import React from "react";
import { useGLTF } from "@react-three/drei";
// import { PointLight } from "@react-three/drei";

// export function Copa(props) {
//   const { nodes, materials } = useGLTF("models/trophyCup.gltf");
//   return (
//     <group {...props} dispose={null}>
//       {/* Luz puntual que afecta solo al modelo */}
//       {/* <PointLight color="white" intensity={1} position={[0, 2, 0]} /> */}

//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.wctrophy_body_low_body_0.geometry}
//         material={materials.body}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={3}
//       />
//       <mesh
//         castShadow
//         receiveShadow
//         geometry={nodes.wctrophy_globe_low_globe_0.geometry}
//         material={materials.globe}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={3}
//       />
//     </group>
//   );
// }
// useGLTF.preload("models/trophyCup.gltf");



// export function Copa(props) {
//     const { nodes, materials } = useGLTF("models/World Cup Trophy blend.glb");
//     return (
//       <group {...props} dispose={null}>
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.mesh_0.geometry}
//           material={materials.Metallic}
//           position={[-0.026, -0.009, 8.892]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         />
//       </group>
//     );
//   }

// useGLTF.preload("models/World Cup Trophy blend.glb");
export function Copa(props) {
  const { nodes, materials } = useGLTF("models/copaMundo3.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.003}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wctrophy_body_low_body_0.geometry}
              material={materials.body}
              position={[0, 0, 4.348]}
              rotation={[0, 0, -2.084]}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.wctrophy_globe_low_globe_0.geometry}
              material={materials.globe}
              position={[0, 0, 4.348]}
              rotation={[0, 0, -2.084]}
            />
          </group>
        </group>
      </group>
      <group
        position={[-0.947, 5.112, -4.228]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <group
          position={[24.756, -5.529, 29.611]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3.461}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002.geometry}
            material={materials.Color_D01}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_1.geometry}
            material={materials["Color_D01.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_2.geometry}
            material={materials["Color_D01.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_3.geometry}
            material={materials["Color_D01.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_4.geometry}
            material={materials["Color_D01.004"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_5.geometry}
            material={materials["Color_D01.005"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_6.geometry}
            material={materials["Color_D01.006"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_7.geometry}
            material={materials["Color_D01.007"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_8.geometry}
            material={materials["Color_D01.008"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_9.geometry}
            material={materials["Color_D01.009"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_10.geometry}
            material={materials["Color_D01.010"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0002_11.geometry}
            material={materials["Color_D01.011"]}
          />
        </group>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.002"]}
        position={[0, 0.701, 0]}
        scale={0.779}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.009"]}
        scale={4.483}
      />
      <group
        position={[-1.383, 4.666, -4.36]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <group
          position={[-120.961, -10.38, 43.106]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3.461}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003.geometry}
            material={materials["Color_D01.012"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_1.geometry}
            material={materials["Color_D01.013"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_2.geometry}
            material={materials["Color_D01.014"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_3.geometry}
            material={materials["Color_D01.015"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_4.geometry}
            material={materials["Color_D01.016"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_5.geometry}
            material={materials["Color_D01.017"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_6.geometry}
            material={materials["Color_D01.018"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_7.geometry}
            material={materials["Color_D01.019"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_8.geometry}
            material={materials["Color_D01.020"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_9.geometry}
            material={materials["Color_D01.021"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_10.geometry}
            material={materials["Color_D01.022"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0003_11.geometry}
            material={materials["Color_D01.023"]}
          />
        </group>
      </group>
      <group
        position={[-0.473, 4.693, -4.236]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.025}
      >
        <group
          position={[159.743, 3.341, 47.305]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={3.461}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004.geometry}
            material={materials["Color_D01.024"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_1.geometry}
            material={materials["Color_D01.025"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_2.geometry}
            material={materials["Color_D01.026"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_3.geometry}
            material={materials["Color_D01.027"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_4.geometry}
            material={materials["Color_D01.028"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_5.geometry}
            material={materials["Color_D01.029"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_6.geometry}
            material={materials["Color_D01.030"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_7.geometry}
            material={materials["Color_D01.031"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_8.geometry}
            material={materials["Color_D01.032"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_9.geometry}
            material={materials["Color_D01.033"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_10.geometry}
            material={materials["Color_D01.034"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh_0004_11.geometry}
            material={materials["Color_D01.035"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/copaMundo3.glb");


// export function Copa(props) {
//     const { nodes, materials } = useGLTF("models/trophy.glb");
//     return (
//       <group {...props} dispose={null}>
//         <mesh
        
//           castShadow
//           receiveShadow
//           geometry={nodes.wctrophy_globe_low_globe_0.geometry}
//           material={materials.globe}
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={50}
//         />
       
//         <mesh
//           castShadow
//           receiveShadow
//           geometry={nodes.wctrophy_body_low_body_0.geometry}
//           material={materials.body}
//           rotation={[-Math.PI / 2, 0, 0]}
//           scale={50}
//         />
          

//       </group>
//     );
//   }

// useGLTF.preload("models/trophy.glb");


