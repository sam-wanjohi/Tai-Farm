import React, { useState } from 'react';

const InquiryBox = () => {
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit inquiry logic
    alert(`Inquiry submitted: ${inquiry}`);
  };

  return (
    <div>
      <h2>Inquiry Box</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          placeholder="Type your inquiry here"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InquiryBox;
