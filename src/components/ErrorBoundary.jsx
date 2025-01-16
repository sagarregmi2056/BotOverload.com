import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('3D Model Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div className="text-white">Something went wrong loading the 3D model.</div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 