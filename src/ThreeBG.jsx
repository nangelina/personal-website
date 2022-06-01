import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html } from '@react-three/drei';

// import Scene1 from './components/Scene1';
// import Scene2 from './components/Scene2';
// import Scene3 from './components/Scene3';
// import Scene1 from './components/Mirrors/Scene';
import Scene1 from './components/FiberDemo/Scene';
import Scene2 from './components/AlligatorDemo/Scene';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress} % loaded</span>
    </Html>
  );
}

function ThreeBody({ scene = 1 }) {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>
        {scene === 1 && <Scene1 />}
        {scene === 2 && <Scene2 />}
        {/* {scene === 3 && <Scene3 />} */}
      </Suspense>
      <ambientLight intensity={0.4} />
    </Canvas>
  );
}
ThreeBody.propTypes = {
  scene: PropTypes.number.isRequired,
};

export default ThreeBody;
