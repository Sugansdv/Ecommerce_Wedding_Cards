// components/LoginPromptModal.jsx
import React from "react";
import ReactDOM from "react-dom";

const LoginPromptModal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-semibold mb-4">Please Log In</h2>
        <p className="text-sm mb-6">You must log in to proceed to checkout.</p>
        <button
          className="bg-[#FFAB0D] hover:bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};

export default LoginPromptModal;
