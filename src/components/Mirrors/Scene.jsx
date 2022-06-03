import { BackSide } from 'three';
import { Octahedron, Stars } from '@react-three/drei';

import useSlerp from '../common/use-slerp';
import useRenderTarget from '../common/use-render-target';

import Title from './Title';
import TitleCopies from './TitleCopies';
import Mirrors from './Mirrors';

const text = 'HELLO';

function MirrorsScene() {
  const [cubeCamera, renderTarget] = useRenderTarget();
  const group = useSlerp();

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
            side={BackSide}
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
        <Title name="title" position={[0, 0, -10]} text={text} />
        <TitleCopies layers={[11]} text={text} />
        <Mirrors layers={[0, 11]} envMap={renderTarget.texture} />
        <ambientLight intensity={0.25} />
        <Stars /* count={5000} */ />
      </group>
    </>
  );
}

export default MirrorsScene;
