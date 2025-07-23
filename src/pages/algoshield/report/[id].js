import React, { useEffect, useState, useMemo } from "react";
import AlgoShield from "../../../AlgoShield";
import { MainLayout } from "../../../AlgoShield/components/sidebar/Layout";
import { useRouter } from "next/router";

const AlgoShieldReport = () => {
  const router = useRouter();
  const { id } = router.query;
  const [scanData, setScanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [severityFilter, setSeverityFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('desc');

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

  // Extract data safely with defaults
  const { scanResults, companyName, fileName, timestamp } = scanData || {};
  const { summary, vulnerabilities = [], errors = [] } = scanResults || {};

  // Filter and sort vulnerabilities - always call this hook
  const filteredAndSortedVulnerabilities = useMemo(() => {
    if (!vulnerabilities || vulnerabilities.length === 0) {
      return [];
    }
    
    let filtered = vulnerabilities;
    
    // Apply severity filter
    if (severityFilter !== 'ALL') {
      const severityOrder = { 'CRITICAL': 4, 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
      const filterLevel = severityOrder[severityFilter];
      filtered = vulnerabilities.filter(vuln => severityOrder[vuln.severity] >= filterLevel);
    }
    
    // Sort by severity (descending by default)
    const severityOrder = { 'CRITICAL': 4, 'HIGH': 3, 'MEDIUM': 2, 'LOW': 1 };
    filtered.sort((a, b) => {
      const aLevel = severityOrder[a.severity];
      const bLevel = severityOrder[b.severity];
      return sortOrder === 'desc' ? bLevel - aLevel : aLevel - bLevel;
    });
    
    return filtered;
  }, [vulnerabilities, severityFilter, sortOrder]);

  // Render loading state
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

  // Render error state
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
          {summary && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-blue-600">{summary.files_scanned || 0}</div>
                <div className="text-sm text-gray-600">Files Scanned</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-red-600">{summary.critical || 0}</div>
                <div className="text-sm text-gray-600">Critical</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-orange-600">{summary.high || 0}</div>
                <div className="text-sm text-gray-600">High</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-yellow-600">{summary.medium || 0}</div>
                <div className="text-sm text-gray-600">Medium</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-green-600">{summary.low || 0}</div>
                <div className="text-sm text-gray-600">Low</div>
              </div>
            </div>
          )}

          {/* Scan Details */}
          {summary && (
            <div className="bg-white rounded-lg shadow border mb-8">
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold">Scan Details</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p><strong>Total Vulnerabilities:</strong> {summary.total_vulnerabilities || 0}</p>
                    <p><strong>Scan Duration:</strong> {summary.scan_duration ? summary.scan_duration.toFixed(2) + 's' : 'N/A'}</p>
                  </div>
                  {/* Removed Tools Used display as requested */}
                </div>
              </div>
            </div>
          )}

          {/* Vulnerabilities */}
          {vulnerabilities.length > 0 && (
            <div className="bg-white rounded-lg shadow border mb-8">
              <div className="p-6 border-b">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <h2 className="text-xl font-semibold">Vulnerabilities Found</h2>
                  
                  {/* Filter Controls */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium text-gray-700">Severity:</label>
                      <select
                        value={severityFilter}
                        onChange={(e) => setSeverityFilter(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="ALL">All Severities</option>
                        <option value="CRITICAL">Critical & Above</option>
                        <option value="HIGH">High & Above</option>
                        <option value="MEDIUM">Medium & Above</option>
                        <option value="LOW">Low & Above</option>
                      </select>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-medium text-gray-700">Sort:</label>
                      <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="desc">High to Low</option>
                        <option value="asc">Low to High</option>
                      </select>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      Showing {filteredAndSortedVulnerabilities.length} of {vulnerabilities.length} vulnerabilities
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                {filteredAndSortedVulnerabilities.map((vuln, index) => (
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
          {filteredAndSortedVulnerabilities.length === 0 && vulnerabilities.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
              <div className="text-yellow-600 text-lg font-semibold mb-2">
                🔍 No Vulnerabilities Match Your Filter
              </div>
              <p className="text-yellow-700">
                Try adjusting your severity filter to see more results.
              </p>
            </div>
          )}
          
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