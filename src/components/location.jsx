import React from 'react';

export default class Location extends React.Component {
  render() {
    return(
      <div>
        <h3>Location Component</h3>
        <p>{this.props.location.location_area.name}</p>
        {this.props.location.version_details.map(versionDetails =>
          <p>{versionDetails.version.name}</p>
        )}

      </div>
    )
  }
}
