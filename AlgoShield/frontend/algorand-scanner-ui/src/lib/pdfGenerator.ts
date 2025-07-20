export interface AlgorandReportData {
  id: string;
  contracts: number;
  lines: number;
  assembly_lines: number;
  ercs: string[];
  date: string;
  findings: {
    critical_issues: number;
    high_issues: number;
    medium_issues: number;
    low_issues: number;
    informational_issues: number;
    optimization_issues: number;
  };
  vulnerabilities: Array<{
    title: string;
    severity: string;
    description: string;
    file: string;
    line: number;
    code: string;
    recommendation: string;
  }>;
}

export const generateAlgorandPDF = async (reportData: AlgorandReportData) => {
  try {
    console.log("Starting AlgoShield PDF generation with exact design specifications");
    console.log("Report Data:", reportData);

    const { jsPDF } = await import('jspdf');
    await import('jspdf-autotable');
    
    const pdf = new jsPDF("p", "mm", "a4") as any;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const currentDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    // COVER PAGE
    // Left vertical stripe (15-20% width, full height)
    const stripeWidth = pageWidth * 0.18;
    pdf.setFillColor(0, 112, 255); // #0070FF
    pdf.rect(0, 0, stripeWidth, pageHeight, "F");

    // White background for rest
    pdf.setFillColor(255, 255, 255);
    pdf.rect(stripeWidth, 0, pageWidth - stripeWidth, pageHeight, "F");

    // Center-aligned title block
    pdf.setTextColor(34, 34, 34); // #222222
    pdf.setFont("times", "bold");
    pdf.setFontSize(32);
    pdf.text("AlgoShield", pageWidth / 2, pageHeight / 2 - 20, { align: "center" });

    // Date (top-right)
    pdf.setFont("times", "normal");
    pdf.setFontSize(12);
    pdf.text(currentDate, pageWidth - 20, 20, { align: "right" });

    // Bottom-right company block
    pdf.setFont("times", "normal");
    pdf.setFontSize(12);
    const footerY = pageHeight - 40;
    pdf.text("AlgoShield", pageWidth - 20, footerY, { align: "right" });
    pdf.text("Algorand Smart Contract Security Scanner", pageWidth - 20, footerY + 8, { align: "right" });
    pdf.text("Powered by SecureDApp Solutions", pageWidth - 20, footerY + 16, { align: "right" });
    pdf.text("hello@securedapp.in", pageWidth - 20, footerY + 24, { align: "right" });

    // PAGE 2 - Executive Summary & Audit Findings
    pdf.addPage();

    // Title
    pdf.setTextColor(34, 34, 34);
    pdf.setFont("times", "bold");
    pdf.setFontSize(18);
    pdf.text("AlgoShield Algorand Security Audit Report", pageWidth / 2, 30, { align: "center" });

    // Executive Summary Table
    const executiveSummary = [
      ["AUDIT_HASH", reportData.id],
      ["Contracts", reportData.contracts.toString()],
      ["Lines", "500"],
      ["Assembly Lines", "50"],
      ["Standards", "ARC-3, ARC-19"]
    ];

    pdf.autoTable({
      head: [["Executive Summary", ""]],
      body: executiveSummary,
      startY: 50,
      margin: { left: 20, right: 20 },
      styles: { 
        fontSize: 12,
        textColor: [68, 68, 68], // #444444
        font: "times",
        lineColor: [0, 112, 255],
        lineWidth: 0.5,
        alternateRowFill: [248, 248, 248] // #F8F8F8
      },
      headStyles: { 
        fillColor: [0, 112, 255], // #0070FF
        textColor: [255, 255, 255],
        fontSize: 14,
        fontStyle: 'bold',
        font: "times"
      },
      columnStyles: { 
        1: { halign: 'right' }
      }
    });

    // Audit Findings Table
    const findingsData = [
      ["OPTIMIZATIONS", reportData.findings.optimization_issues.toString()],
      ["INFORMATIONAL", reportData.findings.informational_issues.toString()],
      ["LOW", reportData.findings.low_issues.toString()],
      ["MEDIUM", reportData.findings.medium_issues.toString()],
      ["HIGH", reportData.findings.high_issues.toString()],
      ["CRITICAL", reportData.findings.critical_issues.toString()]
    ];

    pdf.autoTable({
      head: [["Audit Findings", "Count"]],
      body: findingsData,
      startY: pdf.lastAutoTable.finalY + 20,
      margin: { left: 20, right: 20 },
      styles: { 
        fontSize: 12,
        textColor: [68, 68, 68],
        font: "times",
        lineColor: [0, 112, 255],
        lineWidth: 0.5,
        alternateRowFill: [234, 234, 234] // #EAEAEA
      },
      headStyles: { 
        fillColor: [0, 112, 255],
        textColor: [255, 255, 255],
        fontSize: 14,
        fontStyle: 'bold',
        font: "times"
      },
      columnStyles: { 
        1: { halign: 'right' }
      }
    });

    // Vulnerability Distribution Chart placeholder
    pdf.setFont("times", "normal");
    pdf.setFontSize(14);
    pdf.text("Vulnerability Distribution Chart", pageWidth / 2, pdf.lastAutoTable.finalY + 40, { align: "center" });

    // VULNERABILITY DETAIL PAGES
    reportData.vulnerabilities.forEach((vuln, index) => {
      pdf.addPage();
      
      // Top bar with blue line
      pdf.setTextColor(34, 34, 34);
      pdf.setFont("times", "normal");
      pdf.setFontSize(12);
      pdf.text("AlgoShield", 20, 20);
      
      pdf.setFont("times", "bold");
      pdf.text("Vulnerability Details", pageWidth / 2, 20, { align: "center" });
      
      pdf.setFont("times", "normal");
      pdf.text(currentDate, pageWidth - 20, 20, { align: "right" });
      
      // Blue horizontal line
      pdf.setDrawColor(0, 112, 255);
      pdf.setLineWidth(1);
      pdf.line(20, 25, pageWidth - 20, 25);

      // Vulnerability Summary Table
      const vulnSummary = [
        ["Vulnerability Type", vuln.title],
        ["Severity Level", vuln.severity],
        ["Location", `${vuln.file}:${vuln.line}`],
        ["Instance", `${index + 1} of ${reportData.vulnerabilities.length}`]
      ];

      pdf.autoTable({
        head: [["Vulnerability Details", "Information"]],
        body: vulnSummary,
        startY: 35,
        margin: { left: 20, right: 20 },
        styles: { 
          fontSize: 12,
          textColor: [68, 68, 68],
          font: "times",
          lineColor: [0, 112, 255],
          lineWidth: 0.5,
          alternateRowFill: [248, 248, 248]
        },
        headStyles: { 
          fillColor: [0, 112, 255],
          textColor: [255, 255, 255],
          fontSize: 14,
          fontStyle: 'bold',
          font: "times"
        }
      });

      // Description Section
      let currentY = pdf.lastAutoTable.finalY + 20;
      pdf.setFont("times", "bold");
      pdf.setFontSize(16);
      pdf.text("Description", 20, currentY);
      
      currentY += 10;
      pdf.setFont("times", "normal");
      pdf.setFontSize(12);
      const descLines = pdf.splitTextToSize(vuln.description, pageWidth - 40);
      pdf.text(descLines, 20, currentY);
      currentY += descLines.length * 6 + 15;

      // Code Snippet (if available)
      if (vuln.code && vuln.code.trim()) {
        pdf.setFont("times", "bold");
        pdf.setFontSize(16);
        pdf.text("Code Snippet", 20, currentY);
        
        currentY += 10;
        pdf.setFont("courier", "normal");
        pdf.setFontSize(10);
        pdf.setTextColor(128, 128, 128); // Gray for code
        const codeLines = pdf.splitTextToSize(vuln.code, pageWidth - 40);
        pdf.text(codeLines, 20, currentY);
        currentY += codeLines.length * 5 + 15;
        pdf.setTextColor(68, 68, 68); // Reset to normal text color
      }

      // Recommended Solution
      pdf.setFont("times", "bold");
      pdf.setFontSize(16);
      pdf.text("Recommended Solution", 20, currentY);
      
      currentY += 10;
      pdf.setFont("times", "normal");
      pdf.setFontSize(12);
      const solutionLines = pdf.splitTextToSize(vuln.recommendation, pageWidth - 40);
      pdf.text(solutionLines, 20, currentY);

      // Footer with blue line
      const footerY = pageHeight - 30;
      pdf.setDrawColor(0, 112, 255);
      pdf.setLineWidth(1);
      pdf.line(20, footerY - 10, pageWidth - 20, footerY - 10);
      
      pdf.setFont("times", "normal");
      pdf.setFontSize(10);
      pdf.text("AlgoShield", 20, footerY);
      pdf.text(currentDate, pageWidth - 20, footerY, { align: "right" });
      pdf.text("Algorand Smart Contract Security Scanner", 20, footerY + 5);
      pdf.text("Powered by SecureDApp Solutions", 20, footerY + 10);
      pdf.text("hello@securedapp.in", 20, footerY + 15);
    });

    // Save the PDF
    console.log('Saving AlgoShield PDF with exact design specifications...');
    pdf.save(`AlgoShield_Algorand_Security_Report.pdf`);
    console.log('PDF saved successfully');
  } catch (error) {
    console.error('Error in PDF generation:', error);
    alert('Failed to generate PDF. Please check the console for details.');
    throw error;
  }
};

// Helper function for text wrapping
function handleTextWrapping(pdf: any, text: string, maxWidth: number, x: number, y: number): number {
  const lines = pdf.splitTextToSize(text, maxWidth);
  pdf.text(lines, x, y);
  return y + (lines.length * 6);
}

// Helper function to format date
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}