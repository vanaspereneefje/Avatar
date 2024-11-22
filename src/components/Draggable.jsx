import PropTypes from 'prop-types';
import { useDraggable } from '@dnd-kit/core';

function Draggable({ id, children, data }) {
  const {attributes, listeners, setNodeRef, transform} = useDraggable({
    id,
    data: { src: data },
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}

export default Draggable;

Draggable.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    children: PropTypes.node.isRequired,
    data: PropTypes.string.isRequired
};
