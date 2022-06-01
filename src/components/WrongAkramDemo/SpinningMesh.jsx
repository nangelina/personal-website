import React, { useRef, useState } from 'react';

import { useFrame } from '@react-three/fiber';
import { Box, MeshWobbleMaterial } from '@react-three/drei';

import { useSpring } from '@react-spring/three';

function SpinningMesh() {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);

  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <Box {...props} ref={mesh} castShadow>
      <MeshWobbleMaterial {...props} attach="material" factor={0.6} Speed={1} />
    </Box>
  );
}

export default SpinningMesh;
