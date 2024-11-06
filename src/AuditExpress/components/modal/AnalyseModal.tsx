import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  CategoryScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title, CategoryScale);

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  scanId: number | null;
};

const AnalyseModal: React.FC<ModalProps> = ({ isOpen, onClose, scanId }) => {
  const [scanDetails, setScanDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch scan details when the modal opens
  useEffect(() => {
    if (isOpen && scanId !== null) {
      const fetchScanDetails = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.post('http://localhost:8000/getScanByIdAE', {
            id: scanId,
          });

          if (response.status === 200) {
            setScanDetails(response.data);
          } else {
            setError('Failed to fetch scan details.');
          }
        } catch (err) {
          setError('An error occurred while fetching scan details.');
        }
        setLoading(false);
      };

      fetchScanDetails();
    }
  }, [isOpen, scanId]);

  // Prepare data for Chart.js
  const chartData = {
    labels: ['Low', 'Informational', 'Medium', 'High', 'Critical'],
    datasets: [
      {
        label: 'Vulnerabilities',
        data: scanDetails
          ? [
              scanDetails.low || 0,
              scanDetails.informational || 0,
              scanDetails.medium || 0,
              scanDetails.high || 0,
              scanDetails.critical || 0,
            ]
          : [0, 0, 0, 0, 0],
        backgroundColor: ['#1E90FF', '#FFD700', '#FFA500', '#FF4500', '#DC143C'],
        hoverBackgroundColor: ['#5599FF', '#FFEE99', '#FFBB66', '#FF7755', '#E03333'],
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Vulnerabilities Overview',
      },
    },
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 bg-gray-800 bg-opacity-90 flex justify-center items-center z-50'>
      <div className='bg-white w-full h-full md:w-4/5 lg:w-3/5 p-5 rounded-lg shadow-lg overflow-y-auto'>
        <div className='flex justify-between items-center'>
          <button
            className='text-blue-500 font-bold text-xl'
            onClick={onClose}
          >
            Back
          </button>
          <h2 className='text-2xl font-bold'>Scan Details</h2>
        </div>

        {loading ? (
          <p className="text-center mt-5">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 mt-5">{error}</p>
        ) : scanDetails ? (
          <div className="mt-5">
            {/* Contract Info */}
            <p><strong>Company Name:</strong> {scanDetails.company_name}</p>
            <p><strong>Contract Name:</strong> {scanDetails.contract_name}</p>
            <p><strong>Contract Address:</strong> {scanDetails.address}</p>
            <p><strong>Score:</strong> {scanDetails.score}</p>

            {/* Vulnerabilities Chart */}
            <div className='mt-10'>
              <Doughnut data={chartData} options={chartOptions} />
            </div>

            {/* List of Vulnerabilities */}
            <h3 className="mt-10 font-bold text-lg">Vulnerabilities</h3>
            <ul className="list-disc pl-5">
              {scanDetails.vulnerabilities.map((vul: any, idx: number) => (
                <li key={idx} className="mt-2">
                  <strong>{vul.type.toUpperCase()}:</strong> {vul.reason}
                </li>
              ))}
            </ul>

            {/* Source Code */}
            <h3 className="mt-10 font-bold text-lg">Source Code</h3>
            <pre className="bg-gray-100 p-3 mt-2 rounded">{scanDetails.source_code}</pre>
          </div>
        ) : (
          <p className="text-center mt-5">No details available.</p>
        )}
      </div>
    </div>
  );
};

export default AnalyseModal;
