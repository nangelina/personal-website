// import PropTypes from 'prop-types';
// import { Material } from '@types/three';

import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import useLayers from '../helpers/use-layers';
// import { ThinFilmFresnelMap } from '../helpers/ThinFilmFresnelMap';

// const thinFilmFresnelMap = new ThinFilmFresnelMap();

// function SideMaterial() {
//   return <meshLambertMaterial map={thinFilmFresnelMap} color="#AAAAAA" />;
// }

// function ReflectionMaterial({ envMap }) {
//   return (
//     <meshLambertMaterial
//       map={thinFilmFresnelMap}
//       envMap={envMap}
//       color="#FFFFFF"
//     />
//   );
// }

function Mirror({ envMap, layers, ...props }) {
  const ref = useLayers(layers);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <Box {...props} ref={ref}>
      {/* <SideMaterial />
      <ReflectionMaterial envMap={envMap} /> */}
    </Box>
  );
}

// Mirror.propTypes = {
//   sideMaterial: Material,
//   reflectionMaterial: Material,
//   layers: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

export default Mirror;
