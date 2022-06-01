import { useMemo } from 'react';
import PropTypes from 'prop-types';

import { IcosahedronGeometry } from 'three';

import Title from './Title';

function TitleCopies({ layers }) {
  const vertices = useMemo(() => {
    const y = new IcosahedronGeometry(10);
    return y.vertices;
  }, []);

  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title
          key={i}
          name={'titleCopy-' + i}
          position={vertex}
          layers={layers}
        />
      ))}
    </group>
  );
}

TitleCopies.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default TitleCopies;
