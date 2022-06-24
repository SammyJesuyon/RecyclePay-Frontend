import { Button, FullRound, Text } from 'components';
import PropTypes from 'prop-types';
import './Modal.css';

export const Modal = ({ setOpenModal }) => (
  <div className="modalBackground">
    <div className="modalContainer">
      <div className="titleCloseBtn">
        <Button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          <Text text="X" />
        </Button>
      </div>
      <div className="body">
        <Text.Heading size={20} weight={300} text="What is the total weight of this pickup?" />
      </div>

      <div className="footer">
        <FullRound />
        <Button btnType="primary" text="Submit" onClick={() => setOpenModal(false)} />
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  setOpenModal: PropTypes.func,
};
