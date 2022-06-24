import { Text } from 'components/elements';
import './style.css';
import PropTypes from 'prop-types';

export const RecentPickups = ({ customer, pickupDate, address, measurement }) => (
  <div className="pickup-container">
    <div className="dot-info">
      <div className="dot" style={{ backgroundColor: 'green' }} />
    </div>

    <div className="info">
      <div>
        <Text className="title-info">Name of Customer</Text>
      </div>
      <div>
        <Text>{customer}</Text>
      </div>
    </div>

    {/* 

    <div className="info">
      <div>
        <Text>Points</Text>
      </div>
      <div>
        <Text>{points}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Status</Text>
      </div>
      <div>
        <Text>{status}</Text>
      </div>
    </div> */}

    <div className="info">
      <div>
        <Text>Pickup Date</Text>
      </div>
      <div>
        <Text>{pickupDate}</Text>
      </div>
    </div>

    <div className="info">
      <div>
        <Text>Pickup Location</Text>
      </div>
      <div>
        <Text>{address}</Text>
      </div>
    </div>
    <div className="info">
      <div>
        <Text>Recorded Weight</Text>
      </div>
      <div>
        <Text>{measurement}KG</Text>
      </div>
    </div>
  </div>
);

RecentPickups.propTypes = {
  customer: PropTypes.string,
  measurement: PropTypes.number,
  // points: PropTypes.number,
  address: PropTypes.string,
  pickupDate: PropTypes.string,
  // collectionOfficer: PropTypes.string,
};
