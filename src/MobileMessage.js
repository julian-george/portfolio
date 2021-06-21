import React from 'react';

import '../static/css/mobilemessage.css';

export default class MobileMessage extends React.Component {
    render() {
        return (
            <div id="mobileMessage">
                <h2>Website Not Supported on This Viewport</h2>
                <p>Unfortunately, my portfolio is not yet usable on mobile viewports. This functionality will come soon, but for now, please use a computer to view my site.</p>
            </div>
        )
    }
}