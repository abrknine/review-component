'use client'; 

import React from 'react';

export default function DownloadButton() {
  const handleDownload = () => {

    const pdfFileUrl = `/assets/Abhishek.pdf`;

  
    const link = document.createElement('a');
    link.href = pdfFileUrl;
    link.download = 'Abhishek.pdf'; 

    document.body.appendChild(link);

   
    link.click();

    
    document.body.removeChild(link);
  };

  return (
<button onClick={handleDownload} className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Download Resume
</button>

  );
}