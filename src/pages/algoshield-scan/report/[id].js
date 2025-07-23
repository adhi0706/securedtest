import React, { useEffect, useState } from "react";
import AlgoShield from "../../../AlgoShield";
import { MainLayout } from "../../../AlgoShield/components/sidebar/Layout";
import { useRouter } from "next/router";

const AlgoShieldReport = () => {
  const router = useRouter();
  const { id } = router.query;
  const [scanData, setScanData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      // Get scan data from localStorage
      const storedData = localStorage.getItem(`algoshield_scan_${id}`);
      if (storedData) {
        setScanData(JSON.parse(storedData));
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <AlgoShield>
        <MainLayout>
          <div className="flex items-center justify-center h-64">
            <div className="text-lg">Loading scan results...</div>
          </div>
        </MainLayout>
      </AlgoShield>
    );
  }

  if (!scanData) {
    return (
      <AlgoShield>
        <MainLayout>
          <div className="flex items-center justify-center h-64">
            <div className="text-lg text-red-500">Scan results not found</div>
          </div>
        </MainLayout>
      </AlgoShield>
    );
  }

  const { scanResults, companyName, fileName, timestamp } = scanData;
  const { summary, vulnerabilities, errors } = scanResults;

  return (
    <AlgoShield>
      <MainLayout>
        <div className="p-6 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AlgoShield Scan Report</h1>
            <div className="text-gray-600">
              <p><strong>Company:</strong> {companyName || 'N/A'}</p>
              <p><strong>File:</strong> {fileName}</p>
              <p><strong>Scan Date:</strong> {new Date(timestamp).toLocaleString()}</p>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="text-2xl font-bold text-blue-600">{summary.files_scanned}</div>
              <div className="text-sm text-gray-600">Files Scanned</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="text-2xl font-bold text-red-600">{summary.critical}</div>
              <div className="text-sm text-gray-600">Critical</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="text-2xl font-bold text-orange-600">{summary.high}</div>
              <div className="text-sm text-gray-600">High</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="text-2xl font-bold text-yellow-600">{summary.medium}</div>
              <div className="text-sm text-gray-600">Medium</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
              <div className="text-2xl font-bold text-green-600">{summary.low}</div>
              <div className="text-sm text-gray-600">Low</div>
            </div>
          </div>

          {/* Scan Details */}
          <div className="bg-white rounded-lg shadow border mb-8">
            <div className="p-6 border-b">
              <h2 className="text-xl font-semibold">Scan Details</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><strong>Total Vulnerabilities:</strong> {summary.total_vulnerabilities}</p>
                  <p><strong>Scan Duration:</strong> {summary.scan_duration.toFixed(2)}s</p>
                </div>
                <div>
                  <p><strong>Tools Used:</strong> {summary.tools_used.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vulnerabilities */}
          {vulnerabilities.length > 0 && (
            <div className="bg-white rounded-lg shadow border mb-8">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Vulnerabilities Found</h2>
              </div>
              <div className="p-6">
                {vulnerabilities.map((vuln, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          vuln.severity === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                          vuln.severity === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                          vuln.severity === 'MEDIUM' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {vuln.severity}
                        </span>
                        <span className="text-sm text-gray-600">{vuln.tool}</span>
                      </div>
                      <span className="text-sm text-gray-500">{vuln.file}:{vuln.line}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{vuln.rule_id}</h3>
                    <p className="text-gray-700 mb-2">{vuln.message}</p>
                    {vuln.description && (
                      <p className="text-gray-600 mb-2">{vuln.description}</p>
                    )}
                    {vuln.code_snippet && (
                      <div className="bg-gray-50 p-3 rounded mb-2">
                        <pre className="text-sm overflow-x-auto">{vuln.code_snippet}</pre>
                      </div>
                    )}
                    {vuln.fix_suggestion && (
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="text-sm font-medium text-blue-800 mb-1">Fix Suggestion:</p>
                        <p className="text-sm text-blue-700">{vuln.fix_suggestion}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Errors */}
          {errors && errors.length > 0 && (
            <div className="bg-white rounded-lg shadow border">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold text-red-600">Errors</h2>
              </div>
              <div className="p-6">
                {errors.map((error, index) => (
                  <div key={index} className="text-red-600 mb-2">
                    {error}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* No Vulnerabilities */}
          {vulnerabilities.length === 0 && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-green-600 text-lg font-semibold mb-2">
                🎉 No Vulnerabilities Found!
              </div>
              <p className="text-green-700">
                Your Algorand smart contract appears to be secure based on our analysis.
              </p>
            </div>
          )}
        </div>
      </MainLayout>
    </AlgoShield>
  );
};

export default AlgoShieldReport; 