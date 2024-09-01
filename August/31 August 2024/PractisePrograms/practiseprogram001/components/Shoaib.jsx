
import PropTypes from 'prop-types';

const Shoaib = (props) => {
  return (
    <div>
      <h1>My name is {props.name} </h1>
    </div>
  )
}



Shoaib.propTypes = {
    name: PropTypes.string
  };

export default Shoaib
