import PropTypes from 'prop-types';

const Categories = ({ onCategoryClick }) => {  
    return(
        <div className="clothing-buttons">
            <button onClick={() => onCategoryClick("tops")}>tops</button>
            <button onClick={() => onCategoryClick("bottoms")}>bottoms</button>
            <button onClick={() => onCategoryClick("shoes")}>shoes</button>
        </div>
        );
    }       

export default Categories;

Categories.propTypes = {
    onCategoryClick: PropTypes.func.isRequired
};