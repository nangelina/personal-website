import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Text } from '@react-three/drei';

import useLayers from '../helpers/use-layers';

const TEXT_PROPS = {
  fontSize: 2.5,
  font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff',
};

function Title({ layers, ...props }) {
  const group = useRef();

  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  const textRef = useLayers(layers);

  return (
    <group {...props} ref={group}>
      <Text
        ref={textRef}
        name="text-panna"
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        {...TEXT_PROPS}
      >
        HELLO
      </Text>
    </group>
  );
}

Title.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.number),
};

export default Title;
