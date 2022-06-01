// import PropTypes from 'prop-types';
// import { Texture } from '@types/three';

import { mirrorsData } from '../helpers/data';

import Mirror from './Mirror';

function Mirrors({ envMap, layers, ...props }) {
  return (
    <group name="mirrors" {...props}>
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          {...mirror}
          name={`mirror-${index}`}
          envMap={envMap}
        />
      ))}
    </group>
  );
}

// Mirrors.propTypes = {
//   envMap: Texture,
//   layers: PropTypes.arrayOf(PropTypes.number).isRequired,
// };

export default Mirrors;
