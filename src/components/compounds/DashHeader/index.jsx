import './style.css';
import { Text, SearchBar } from '../../elements';

export const DashHeader = () => (
  <div className="dash-navbar">
    <div>
      <SearchBar />
    </div>
    <div className="name-holder">
      <Text color="white" text="Ifeanyi Omeata" />
      <span className="h-space" />
      <span className="name-icon">IO</span>
    </div>
  </div>
);
