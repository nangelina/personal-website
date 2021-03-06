import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Text } from '@react-three/drei';

import useLayers from '../common/use-layers';

const TEXT_PROPS = {
  fontSize: 2.5,
  font: 'https://fonts.gstatic.com/s/syncopate/v12/pe0pMIuPIYBCpEV5eFdKvtKqBP5p.woff',
};

function MirrorsTitle({ text, layers, ...props }) {
  const group = useRef();

  useEffect(() => {
    group.current.lookAt(0, 0, 0);
  }, []);

  const textRef = useLayers(layers);

  return (
    <group {...props} ref={group}>
      <Text
        ref={textRef}
        depthTest={false}
        material-toneMapped={false}
        material-color="#FFFFFF"
        {...TEXT_PROPS}
      >
        {text}
      </Text>
    </group>
  );
}

MirrorsTitle.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.number),
};

export default MirrorsTitle;
