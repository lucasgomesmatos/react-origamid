import * as C from './style';
import PropTypes from 'prop-types';

export const Button = (props) => {
  return (
    <C.Button style={{ margin: props.margin, width: props.width }}>
      Clique Aqui
    </C.Button>
  );
};

Button.defaultPros = {
  margin: '10px',
};

Button.prototype = {
  width: PropTypes.number.isRequired,
};
