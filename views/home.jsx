const React = require('react');
const Layout = require('./layout.jsx');

const Component = React.createClass({
    render: function () {

        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>Activate the plot device.</h1>
                </body>
            </html>
        );
    }
});


module.exports = Component;
