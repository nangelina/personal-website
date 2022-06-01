import { useCallback } from 'react';

// import PropTypes from 'prop-types';
// import { Texture } from '@types/three';

import { mirrorsData } from '../helpers/data';
// import { ThinFilmFresnelMap } from '../helpers/ThinFilmFresnelMap';

import Mirror from './Mirror';

// const thinFilmFresnelMap = new ThinFilmFresnelMap();

function Mirrors({ envMap, layers, ...props }) {
  const SideMaterial = useCallback(
    () => (
      <meshLambertMaterial
        // map={thinFilmFresnelMap}
        color="#AAAAAA"
      />
    ),
    []
  );

  const ReflectionMaterial = useCallback(
    () => (
      <meshLambertMaterial
        // map={thinFilmFresnelMap}
        envMap={envMap}
        color="#FFFFFF"
      />
    ),
    [envMap]
  );

  return (
    <group name="mirrors" {...props}>
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          {...mirror}
          name={`mirror-${index}`}
          SideMaterial={SideMaterial}
          ReflectionMaterial={ReflectionMaterial}
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
