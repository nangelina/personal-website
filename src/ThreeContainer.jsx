import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { Canvas } from '@react-three/fiber';
import { useProgress, Html } from '@react-three/drei';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ color: '#FFFFFF' }}>{progress}% loaded</span>
    </Html>
  );
}

function ThreeContainer({ children }) {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
      <color attach="background" args={['#000']} />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <ambientLight intensity={0.4} />
    </Canvas>
  );
}
ThreeContainer.propTypes = {
  scene: PropTypes.number.isRequired,
};

export default ThreeContainer;
