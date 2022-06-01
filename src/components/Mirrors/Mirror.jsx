// import PropTypes from 'prop-types';
// import { Material } from '@types/three';

import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import useLayers from '../helpers/use-layers';

function Mirror({ sideMaterial, reflectionMaterial, layers, ...props }) {
  const ref = useLayers(layers);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <Box
      {...props}
      ref={ref}
      material={[
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        reflectionMaterial,
        reflectionMaterial,
      ]}
    />
  );
}

// Mirror.propTypes = {
//   sideMaterial: Material,
//   reflectionMaterial: Material,
//   layers: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

export default Mirror;
