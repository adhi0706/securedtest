"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const AlgoShieldProductPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check if AlgoShield frontend is running with a timeout
    const checkAlgoShieldStatus = async () => {
      try {
        // Create a timeout promise
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Timeout')), 3000);
        });

        // Redirect directly to the integrated AlgoShield tool
        window.location.href = '/algoshield';
      } catch (err) {
        // This should not happen since AlgoShield is now integrated
        setIsLoading(false);
        setError('Redirecting to AlgoShield...');
      }
    };

    checkAlgoShieldStatus();
  }, []);

  const startAlgoShield = () => {
    // Instructions to start AlgoShield
    alert(`
AlgoShield is now integrated into the main application!

To access AlgoShield:

1. Simply navigate to /algoshield in your browser
2. Or click the "Get Started" button on the AlgoShield product page
3. No need to start a separate service

The tool is now fully integrated and ready to use!
    `);
  };

  const openAlgoShieldDirectory = () => {
    // Open the AlgoShield directory in file manager
    window.open('file:///home/dawg/fresh-securedapp/Securedapp_v2/AlgoShield/frontend/algorand-scanner-ui');
  };

  if (isLoading) {
    return (
      <>
        <Head>
          <title>AlgoShield - Smart Contract Security Audit</title>
          <meta name="description" content="Secure your Algorand smart contracts with AlgoShield's AI-driven audits" />
        </Head>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#000',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Connecting to AlgoShield...</h1>
            <p>Please wait while we connect to the AlgoShield application.</p>
            <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#ccc' }}>
              This may take a few seconds if AlgoShield is starting up...
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Head>
          <title>AlgoShield - Smart Contract Security Audit</title>
          <meta name="description" content="Secure your Algorand smart contracts with AlgoShield's AI-driven audits" />
        </Head>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: '#000',
          color: '#fff',
          fontFamily: 'Poppins, sans-serif',
          padding: '2rem'
        }}>
          <div style={{ 
            textAlign: 'center', 
            maxWidth: '600px',
            background: '#111',
            padding: '3rem',
            borderRadius: '1rem',
            border: '1px solid #333'
          }}>
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '1rem',
              background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              AlgoShield
            </h1>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#ccc', 
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              AI-powered smart contract security audit solution for Algorand blockchain.
            </p>
            
            <div style={{ 
              background: '#222', 
              padding: '1.5rem', 
              borderRadius: '0.5rem',
              marginBottom: '2rem',
              border: '1px solid #444'
            }}>
              <h3 style={{ color: '#10b981', marginBottom: '1rem' }}>✅ AlgoShield Integrated</h3>
              <p style={{ color: '#ccc', marginBottom: '1rem' }}>
                AlgoShield is now fully integrated into the main application. 
                You can access it directly at /algoshield.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={startAlgoShield}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#3b82f6',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                📋 Show Instructions
              </button>
              
              <button 
                onClick={openAlgoShieldDirectory}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: 'transparent',
                  color: '#fff',
                  border: '1px solid #666',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                📁 Open Directory
              </button>
              
              <button 
                onClick={() => window.location.reload()}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}
              >
                🔄 Retry Connection
              </button>
            </div>

            <div style={{ 
              marginTop: '2rem', 
              padding: '1rem', 
              background: '#1a1a1a', 
              borderRadius: '0.5rem',
              fontSize: '0.9rem',
              color: '#999'
            }}>
              <h4 style={{ marginBottom: '0.5rem', color: '#ccc' }}>Quick Access:</h4>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#3b82f6' }}>Direct Access:</strong>
                <code style={{ 
                  display: 'block', 
                  background: '#000', 
                  padding: '0.5rem', 
                  borderRadius: '0.25rem',
                  marginTop: '0.25rem'
                }}>
                  Navigate to /algoshield in your browser
                </code>
              </div>
              <div>
                <strong style={{ color: '#3b82f6' }}>From Product Page:</strong>
                <code style={{ 
                  display: 'block', 
                  background: '#000', 
                  padding: '0.5rem', 
                  borderRadius: '0.25rem',
                  marginTop: '0.25rem'
                }}>
                  Click "Get Started" on the AlgoShield product page
                </code>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default AlgoShieldProductPage; 