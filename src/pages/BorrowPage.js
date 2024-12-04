import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getResourceById, borrowResource } from '../utils/api';
// Your BorrowPage component code...

function BorrowPage() {
  const { id } = useParams();
  const [resource, setResource] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [message, setMessage] = useState('');

  // Fetch the resource details when the component mounts
  useEffect(() => {
    const fetchResource = async () => {
      const data = await getResourceById(id);
      setResource(data);
    };
    fetchResource();
  }, [id]);

  const handleBorrow = async () => {
    try {
      await borrowResource(id, startDate, endDate);
      setMessage('Borrow request submitted successfully!');
    } catch (error) {
      setMessage('Error submitting borrow request. Please try again.');
    }
  };

  if (!resource) return <div>Loading...</div>;

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-8">Borrow "{resource.name}"</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-orange"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-orange"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message (optional)
          </label>
          <textarea
            id="message"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-dark-orange"
          ></textarea>
        </div>
        <button
          onClick={handleBorrow}
          className="bg-dark-orange text-white font-medium py-3 px-6 rounded-lg hover:bg-orange-500"
        >
          Submit Borrow Request
        </button>
      </div>
    </div>
  );
}

export default BorrowPage;