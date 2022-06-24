import './style.css';
import PropTypes from 'prop-types';
import { Text, SearchBar } from '../../elements';

export const DashHeader = ({ name, initial }) => (
  <div className="dash-navbar">
    <div>
      <SearchBar />
    </div>
    <div className="name-holder">
      <Text text={name} />
      <span className="h-space" />
      <span className="name-icon">{initial}</span>
      <Text color="white" text="Ifeanyi Omeata" />
      <span className="h-space" />
      <span className="name-icon">IO</span>
    </div>
  </div>
);

DashHeader.propTypes = {
  name: PropTypes.string,
  initial: PropTypes.string,
};
