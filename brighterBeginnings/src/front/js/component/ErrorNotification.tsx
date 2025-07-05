import React from 'react';

const ErrorNotification: React.FC = () => {
  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="alert alert-warning shadow-lg w-100 text-center" role="alert" style={{ maxWidth: '600px' }}>
        <h4 className="alert-heading">Something Went Wrong</h4>
        <p className="mb-2">
          It seems like something's off. Please contact Brighter Beginnings Director <strong>Lily</strong> at <a href="tel:4134781019">(413) 478-1019</a>.
        </p>
        <hr />
        <p className="mb-0">We’re working on fixing this issue as soon as we can.</p>
      </div>
    </div>
  );
};

export default ErrorNotification;
