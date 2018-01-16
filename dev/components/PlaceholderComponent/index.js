import React from 'react';
import {connect} from 'react-redux';

class PlaceholderComponent extends React.Component {
    render() {
        return <div>PlaceholderComponent</div>
    }
}

export default connect(null, null)(PlaceholderComponent);