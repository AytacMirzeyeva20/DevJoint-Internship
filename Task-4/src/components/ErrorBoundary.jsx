import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-pink-50">
          <div className="rounded-2xl bg-white p-10 text-center shadow-lg">
            <h1 className="mb-4 text-3xl font-bold text-red-500">
              Something went wrong 😕
            </h1>

            <p className="mb-5 text-gray-500">
              Please try again.
            </p>

            <button
              onClick={() => window.location.reload()}
              className="rounded-lg bg-pink-500 px-6 py-3 text-white"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;