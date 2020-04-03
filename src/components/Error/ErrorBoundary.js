import React, { Component } from "react";
// for handling error , should be a class component
type State = {|
  error: boolean
|};
class ErrorBoundary extends Component<State> {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) return <this.props.FallbackComponent error={error} />;
    return this.props.children;
  }
}

export default ErrorBoundary;
