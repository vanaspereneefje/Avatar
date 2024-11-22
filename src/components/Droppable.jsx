import PropTypes from 'prop-types';
import {useDroppable} from '@dnd-kit/core';

function Droppable({id, children, className}) {
  const { isOver, setNodeRef } = useDroppable({ id });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  const combinedClassName = `droppable ${className}`;
  
  return (
    <div ref={setNodeRef} style={style} className={combinedClassName}>
      {children}
    </div>
  );
}

export default Droppable;

Droppable.propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.node,
    className: PropTypes.string
};