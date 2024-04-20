import React from 'react';

const WithLogging = ({WrappedComponent}) => {
    const getDisplayName = (WrappedComponent) =>
		WrappedComponent.displayName || WrappedComponent.name || 'Component';
	WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`;

    return class extends React.Component {
        componentDidMount() {
            console.log(`Component ${WrappedComponent.name} is mounted`);
        }
        componentWillUnmount() {
            console.log(`Component ${WrappedComponent.name} is unmounted`);
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default WithLogging;