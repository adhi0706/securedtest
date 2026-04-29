import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { comparisonData } from '../../pageComponents/product/QuantumVault/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

const ComparisonSection = () => {
    const renderIcon = (type) => {
        switch (type) {
            case 'check': return <FontAwesomeIcon icon={faCheck} className="text-[#00ff88]" />;
            case 'x': return <FontAwesomeIcon icon={faTimes} className="text-red-500/50" />;
            case 'warning': return <FontAwesomeIcon icon={faExclamationTriangle} className="text-yellow-500/70" />;
            default: return null;
        }
    };

    return (
        <section id="comparison" className="py-12 md:py-24 bg-transparent">
            <div className="w-full max-w-7xl px-4 md:px-8 mx-auto">
                <div className="flex flex-col items-center mb-12 md:mb-16">
                    <SectionHeader 
                        label={comparisonData.tag} 
                        title={<>How Quantum Vault <span className="text-[#00ff88]">Compares</span></>} 
                    />
                </div>

                <div className="w-full overflow-x-auto rounded-3xl border border-secondary/10 dark:border-white/5 shadow-2xl">
                    <table className="w-full text-left bg-white dark:bg-[#1e3255] border-collapse">
                        <thead>
                            <tr className="border-b border-secondary/10 dark:border-white/10">
                                <th className="p-6 md:p-10 text-xl font-black text-secondary dark:text-white">Feature</th>
                                <th className="p-6 md:p-10 text-xl font-black text-[#00ff88] text-center bg-[#00ff88]/5">Quantum Vault</th>
                                <th className="p-6 md:p-10 text-xl font-black text-secondary dark:text-[#a0a5b1] text-center">Software KMS</th>
                                <th className="p-6 md:p-10 text-xl font-black text-secondary dark:text-[#a0a5b1] text-center">Manual Key Mgmt</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.rows.map((row, idx) => (
                                <tr key={idx} className="border-b border-secondary/5 dark:border-white/5 hover:bg-secondary/[0.02] dark:hover:bg-white/[0.02] transition-all">
                                    <td className="p-6 md:p-8 font-bold text-secondary dark:text-white text-lg">{row.feature}</td>
                                    <td className="p-6 md:p-8 text-center bg-[#00ff88]/5 text-2xl">{renderIcon(row.vault)}</td>
                                    <td className="p-6 md:p-8 text-center text-xl">{renderIcon(row.software)}</td>
                                    <td className="p-6 md:p-8 text-center text-xl">{renderIcon(row.manual)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ComparisonSection;
