import PropTypes from 'prop-types';

import { Box } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import useLayers from '../common/use-layers';

function Mirror({ SideMaterial, ReflectionMaterial, layers, ...props }) {
  const ref = useLayers(layers);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <Box {...props} ref={ref}>
      <SideMaterial />
      <SideMaterial />
      <SideMaterial />
      <SideMaterial />
      <ReflectionMaterial />
      <ReflectionMaterial />
    </Box>
  );
}

Mirror.propTypes = {
  sideMaterial: PropTypes.element,
  reflectionMaterial: PropTypes.element,
  layers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Mirror;
