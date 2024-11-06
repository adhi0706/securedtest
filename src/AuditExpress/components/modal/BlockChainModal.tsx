import React, { useState } from 'react';
import Image from 'next/image';
import ethereum from '../../assets/chains/ethereum.png';
import BNB from '../../assets/chains/binance.png';
import Avalanche from '../../assets/chains/avalanche.png';
import Arbitrum from '../../assets/chains/arbitrum.png';
import Optimism from '../../assets/chains/optimism.png';
import Gnosis from '../../assets/chains/gnosis.png';
import Boba from '../../assets/chains/boba.png';
import Base from '../../assets/chains/base.png';
import Linea from '../../assets/chains/lineascan.png';
import Astar from '../../assets/chains/astar.png';
import Celo from '../../assets/chains/celo.png';
import fire from '../../assets/chains/firechain_light.png';
import Polygon from '../../assets/chains/polygon.png';
import BlockchainSelection from './BlockChainSelection'; // Import the selection component

type BlockchainModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (name: string, networkType: string) => void; // Callback for final selection
};

const blockchainIcons = [
    { id: 1, name: 'Ethereum', icon: ethereum },
    { id: 2, name: 'Avalanche', icon: Avalanche },
    { id: 3, name: 'Arbitrum', icon: Arbitrum },
    { id: 4, name: 'Binance', icon: BNB },
    { id: 5, name: 'Polygon', icon: Polygon },
    { id: 6, name: 'Optimism', icon: Optimism },
    { id: 7, name: 'Gnosis', icon: Gnosis },
    { id: 8, name: 'Boba', icon: Boba },
    { id: 9, name: 'Base', icon: Base },
    { id: 10, name: 'Linea', icon: Linea },
    { id: 11, name: 'Celo', icon: Celo },
    { id: 12, name: 'Astar', icon: Astar },
    { id: 13, name: '5ireChain', icon: fire },
];

const BlockchainModal: React.FC<BlockchainModalProps> = ({ isOpen, onClose, onSelect }) => {
    const [selectedBlockchain, setSelectedBlockchain] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    if (!isOpen) return null; // Don't render if modal is closed

    // Filter blockchains based on the search term
    const filteredBlockchains = blockchainIcons.filter(blockchain =>
        blockchain.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle selection from BlockchainSelection
    const handleNetworkSelect = (blockchain: string, network: string) => {
        onSelect(blockchain, network); // Pass selection to parent component
        setSelectedBlockchain(null); // Reset selected blockchain after selection
        onClose(); // Close the modal after selection
    };

    return (
        <div className="inset-0 bg-black bg-opacity-50 z-50 flex fixed justify-center items-center p-4">
            <div className="bg-[#011A3B] p-6 rounded-lg w-full max-w-3xl relative shadow-lg max-h-screen overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold text-white">Select Blockchain</h2>
                    <button onClick={onClose} className="text-white text-lg">
                        ✕
                    </button>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {filteredBlockchains.length > 0 ? (
                        filteredBlockchains.map((blockchain) => (
                            <div
                                key={blockchain.id}
                                className="flex flex-col items-center cursor-pointer group"
                                onClick={() => setSelectedBlockchain(blockchain.name)}
                            >
                                <div className="m-3 p-2 rounded-full bg-gray-200 bg-opacity-20 transition transform group-hover:scale-105">
                                    <Image
                                        src={blockchain.icon}
                                        alt={blockchain.name}
                                        width={50}
                                        height={50}
                                    />
                                </div>
                                <span className="text-sm text-white mt-2">{blockchain.name}</span>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-400">No blockchains found.</p>
                    )}
                </div>

                {/* If a blockchain is selected, render the BlockchainSelection component */}
                {selectedBlockchain && (
                    <BlockchainSelection
                        blockchainName={selectedBlockchain}
                        onClose={onClose}
                        onSelect={handleNetworkSelect} // Handle network selection
                    />
                )}
            </div>
        </div>
    );
};

export default BlockchainModal;
