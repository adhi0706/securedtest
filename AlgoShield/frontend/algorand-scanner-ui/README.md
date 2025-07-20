# 🛡️ AlgoShield - Algorand Smart Contract Security Scanner

Professional security analysis platform for Algorand smart contracts with comprehensive vulnerability detection across multiple languages and frameworks.

![AlgoShield](https://img.shields.io/badge/AlgoShield-Security%20Platform-blue)
![Algorand](https://img.shields.io/badge/Algorand-Smart%20Contracts-green)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## 🚀 Features

### 🔍 **Multi-Language Support**
- **PyTeal** - Python-based smart contracts
- **TEAL** - Algorand assembly language
- **TypeScript/JavaScript** - Algorand SDK applications
- **Algopy** - Modern Python framework for Algorand

### 🛡️ **Security Analysis**
- **Access Control** vulnerability detection
- **Arithmetic Overflow/Underflow** checks
- **Timestamp Manipulation** detection
- **Weak Randomness** source identification
- **State Management** issue detection
- **Input Validation** analysis

### 📊 **Professional Reporting**
- **Interactive Dashboard** with security metrics
- **Detailed Vulnerability Reports** with fix suggestions
- **PDF Generation** for professional documentation
- **Scan History** tracking and management
- **Security Score** calculation

### 🎯 **Multiple Input Methods**
- **File Upload** - Drag & drop or file picker
- **Contract Address** - Analyze deployed Algorand contracts
- **GitHub Integration** - Repository cloning and scanning

## 🏗️ **Tech Stack**

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts, Chart.js
- **PDF Generation**: jsPDF
- **File Upload**: React Dropzone
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## 🚀 **Quick Start**

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/algoshield/algoshield-scanner.git
   cd algoshield-scanner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Production Build

```bash
npm run build
npm start
```

## 📖 **Usage**

### 1. **File Upload**
- Drag & drop files onto the upload area
- Click to select files from your computer
- Supports .py, .teal, .ts, .tsx, .js, .jsx files

### 2. **Contract Address Analysis**
- Enter Algorand Application ID (numeric)
- Example: `312769`, `465814065`, `552635992`
- Automatically fetches and analyzes contract code

### 3. **GitHub Repository Scanning**
- Enter GitHub repository URL
- Example: `https://github.com/algorand/pyteal`
- Clones and scans all contract files

### 4. **Configure Analysis**
- Select analyzers (builtin, tealer)
- Set severity threshold
- Choose scan depth and options

### 5. **View Results**
- Interactive vulnerability dashboard
- Detailed line-by-line analysis
- Professional PDF reports
- Historical scan tracking

## 🧪 **Testing Examples**

### Contract Addresses
```
312769          # Algorand Standard Asset
465814065       # AlgoFi Lending Protocol
552635992       # Tinyman AMM Protocol
```

### GitHub Repositories
```
https://github.com/algorand/pyteal
https://github.com/algorand/smart-contracts
https://github.com/algorand-devrel/demo-abi
```

### Sample Vulnerable Contract
```python
from pyteal import *

def approval_program():
    # Missing access control - CRITICAL
    delete_contract = Seq([
        App.globalDel(Bytes("admin")),
        Approve()
    ])
    
    # Weak randomness - HIGH
    random_value = Mod(Global.latest_timestamp(), Int(100))
    
    return Cond(
        [Txn.application_call() == CallConfig.DeleteApplication, delete_contract],
        [Txn.application_call() == CallConfig.UpdateApplication, Approve()],
    )
```

## 🔄 **Development**

### Project Structure
```
src/
├── app/                 # Next.js app directory
│   ├── api/scan/       # API endpoints
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── FileUpload.tsx  # File upload interface
│   ├── ScanResults.tsx # Results display
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
└── styles/             # Component styles
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🚀 **Deployment**

### Environment Variables
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Deployment Platforms
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **Docker**

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 **Support**

- **Issues**: [GitHub Issues](https://github.com/algoshield/algoshield-scanner/issues)
- **Discussions**: [GitHub Discussions](https://github.com/algoshield/algoshield-scanner/discussions)

## 🎯 **Roadmap**

- [ ] Real-time collaboration features
- [ ] CI/CD pipeline integration
- [ ] Advanced vulnerability patterns
- [ ] Enterprise security features
- [ ] Multi-chain support

---

**AlgoShield** - Professional Algorand Smart Contract Security Analysis Platform 🛡️

Built with ❤️ for the Algorand ecosystem