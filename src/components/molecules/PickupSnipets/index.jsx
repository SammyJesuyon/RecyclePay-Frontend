import PropTypes from 'prop-types';
// eslint-disable-next-line import/extensions
import { Button, Text } from 'components/elements';

import './style.css';

const PickupSnipet = ({ title, text }) => (
  <div className="snipet__container">
    <div className="snipet__wrapper">
      <Text text={title} color="neutral-60" font-size="16px" line-height="24px" />
      <Text text={text} color="neutral-70" font-size="16px" line-height="24px" />
    </div>
  </div>
);

PickupSnipet.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

export const PickupSnipets = ({ customer, date, address }) => (
  <div className="container">
    <div className="wrapper">
      <div className="div">
        <div className="dot_wrapper">
          <div className="dot" />
        </div>
      </div>
      <div className="pane-info">
        <div className="div">
          <PickupSnipet title="Name of Customer" />
        </div>
        <div>
          <Text>{customer}</Text>
        </div>
      </div>

      <div className="pane-info">
        <div className="div">
          <PickupSnipet title="Pickup Date" />
        </div>
        <div>
          <Text>{date}</Text>
        </div>
      </div>

      <div className="pane-info">
        <div className="div">
          <PickupSnipet title="Pickup Location" />
        </div>
        <div>
          <Text>{address}</Text>
        </div>
      </div>

      <div className="div btn">
        <Button round btnType="secondary" text="Register Pickup" />
      </div>
    </div>
  </div>
);

PickupSnipets.propTypes = {
  customer: PropTypes.string,
  date: PropTypes.string,
  address: PropTypes.string,
};
