// components/ComingSoonAlert.js
import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ComingSoonAlert = () => {
  const MySwal = withReactContent(Swal);

  const showAlert = () => {
    MySwal.fire({
      title: 'Coming Soon!',
      text: 'This feature is not yet available.',
      icon: 'info',
      confirmButtonText: 'Okay'
    });
  };

  return (
    <button
      onClick={showAlert}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
    >
      Show Alert
    </button>
  );
};

export default ComingSoonAlert;
