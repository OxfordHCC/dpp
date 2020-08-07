import React from 'react';
import { connect } from 'react-redux';
import { toggle } from '../actions/settings/detectionServices';
import { FakeButton } from './settings';
import { Checkbox } from 'semantic-ui-react';

const detectionServiceList = ({ services, toggleService }) => {
	return (
		<div className="detection-list">
          {
			  services.map(serv => (
				  <FakeButton key={serv.id}>
					<Checkbox toggle
							  label={serv.name}
							  onChange={() => toggleService(serv.id) }
							  checked={serv.status}/>
				  </FakeButton>
			  ))
		  }
		</div>
	);
};

const connectState = (state) => ({
	services: state.settings.detectionServices
});

const connectDispatch = (dispatch) => ({
	toggleService: (name) => dispatch(toggle(name))
});


export default connect(connectState, connectDispatch)(detectionServiceList);
