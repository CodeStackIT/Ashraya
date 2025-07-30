import React from 'react';
import menuqr from '/qr.png'; // 👈 Adjust the path as needed

const QrMenuSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-8 bg-black text-white">
      <div className="md:w-1/2 p-4 flex flex-col justify-center items-center text-center">
        <h2 className="text-2xl font-semibold mb-2 text-white font-mono">
          Scan the QR to see full menu items
        </h2>
        <p className="text-white text-base max-w-md">
          This is a special layout where both the text and image are aligned to the center.
          You can add any descriptive content here.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={menuqr}
          alt="QR Code for Menu"
          className="w-40 md:w-56 lg:w-64 h-fit rounded shadow"
        />
      </div>
    </div>
  );
};

export default QrMenuSection;
