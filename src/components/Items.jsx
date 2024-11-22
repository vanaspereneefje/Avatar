import PropTypes from 'prop-types';
import Draggable from './Draggable'

const Items = ({ images=[] }) => {  
    return (
        <div className="clothes">
            {images.map((image, index) => (
                <Draggable id={`image-${index}`} key={index} data={image}>
                    <img src={image} width="300"/>
                </Draggable>
            ))}
        </div>
    );
  }

export default Items;

Items.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string),
};