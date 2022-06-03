import PropTypes from 'prop-types';

import { IcosahedronGeometry, Vector3 } from 'three';

import Title from './Title';

const vertices = [];

const geometry = new IcosahedronGeometry(10);
const positionAttribute = geometry.getAttribute('position');
for (let i = 0; i < positionAttribute.count; i++) {
  const vertex = new Vector3();
  vertex.fromBufferAttribute(positionAttribute, i); // read vertex
  vertices.push(vertex);
}

function MirrorsTitleCopies(props) {
  return (
    <group name="titleCopies">
      {vertices.map((vertex, i) => (
        <Title key={i} name={'titleCopy-' + i} position={vertex} {...props} />
      ))}
    </group>
  );
}

MirrorsTitleCopies.propTypes = {
  layers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MirrorsTitleCopies;
