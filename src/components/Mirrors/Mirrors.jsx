import { useState } from 'react';
// import PropTypes from 'prop-types';
// import { Texture } from '@types/three';
import { useResource } from '@react-three/fiber';

import { ThinFilmFresnelMap } from '../helpers/ThinFilmFresnelMap';
import { mirrorsData } from '../helpers/data';

import Mirror from './Mirror';

function Mirrors({ envMap, layers, ...props }) {
  const [thinFilmFresnelMap] = useState(new ThinFilmFresnelMap());
  const [sideMaterialRef, sideMaterial] = useResource();
  const [reflectionMaterialRef, reflectionMaterial] = useResource();

  return (
    <group name="mirrors" {...props}>
      <meshLambertMaterial
        ref={sideMaterialRef}
        map={thinFilmFresnelMap}
        color="#AAAAAA"
      />
      <meshLambertMaterial
        ref={reflectionMaterialRef}
        map={thinFilmFresnelMap}
        envMap={envMap}
        color="#FFFFFF"
      />
      {mirrorsData.mirrors.map((mirror, index) => (
        <Mirror
          key={`mirror-${index}`}
          layers={layers}
          {...mirror}
          name={`mirror-${index}`}
          sideMaterial={sideMaterial}
          reflectionMaterial={reflectionMaterial}
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
