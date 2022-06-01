import * as THREE from 'three';
import { useMatcapTexture, Octahedron } from '@react-three/drei';

import useSlerp from '../helpers/use-slerp';
import useRenderTarget from '../helpers/use-render-target';

import Title from './Title';
import TitleCopies from './TitleCopies';
import Mirrors from './Mirrors';

function MirrorsScene() {
  const [cubeCamera, renderTarget] = useRenderTarget();
  const group = useSlerp();

  const [matcapTexture] = useMatcapTexture('C8D1DC_575B62_818892_6E747B');

  return (
    <>
      <group name="sceneContainer" ref={group}>
        <Octahedron
          layers={[11]}
          name="background"
          args={[20, 4, 4]}
          position={[0, 0, -5]}
        >
          <meshMatcapMaterial
            matcap={matcapTexture}
            side={THREE.BackSide}
            transparent
            opacity={0.3}
            color="#FFFFFF"
          />
        </Octahedron>
        <cubeCamera
          layers={[11]}
          name="cubeCamera"
          ref={cubeCamera}
          args={[0.1, 100, renderTarget]}
          position={[0, 0, 5]}
        />
        <Title name="title" position={[0, 0, -10]} />
        <TitleCopies layers={[11]} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
      </group>
    </>
  );
}

export default MirrorsScene;
