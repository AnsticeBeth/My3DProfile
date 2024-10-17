import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from '../Loader';

const Computers = ({isMobile}) => {
  const computer = useGLTF('./MyAvatar/Anstice.gltf');
  return (
    <mesh>
      <hemisphereLight intensity={4} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20, 100, 10]}
      angle={0.12}
      penumbra={1}
      intensity={10}
      castShadow
      shadow-mapSize={1024}
      decay={false}/>
      <primitive object={computer.scene}
      scale={isMobile ? 0.5 : 1}
      position={isMobile ? [0, -2.25, 0] : [0, -4.25, 0]}
      rotation={[-0.01, -0.2, 0.01]} />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);



    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })
  return (
    <Canvas
    frameloop="demand"
    camera={{ position: [20, 2, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
      <OrbitControls 
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
      <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas>
  )

}

export default ComputersCanvas