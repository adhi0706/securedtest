const fs = require('fs');
const path = require('path');

const cssDir = 'C:/Users/adith/Downloads/Securedapp2/Securedapp_v2-deploy/src/components/RTM';

const files = fs.readdirSync(cssDir).filter(f => f.endsWith('.css'));

files.forEach(file => {
  const filePath = path.join(cssDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Container backgrounds to transparent so it inherits the site's dark blue
  content = content.replace(/background-color:\s*#0e0f12;/g, 'background-color: transparent;');
  content = content.replace(/background-color:\s*#0b0c0f;/g, 'background-color: transparent;');
  
  // Card backgrounds from dark gray to slightly transparent white
  content = content.replace(/background-color:\s*#12141a;/g, 'background-color: rgba(255, 255, 255, 0.03);');
  
  // Background linear gradient for titles to include transparent overlay if needed?
  // Let's leave text gradients alone, but maybe update border colors
  content = content.replace(/border-bottom:\s*1px solid #1f2128;/g, 'border-bottom: 1px solid rgba(255, 255, 255, 0.05);');
  content = content.replace(/border:\s*1px solid #1f2128;/g, 'border: 1px solid rgba(255, 255, 255, 0.1);');
  content = content.replace(/border-color:\s*#333642;/g, 'border-color: rgba(255, 255, 255, 0.2);');
  
  // Other small fixes for text visibility
  content = content.replace(/border-top:\s*1px solid #1f2128;/g, 'border-top: 1px solid rgba(255, 255, 255, 0.05);');
  content = content.replace(/border-left:\s*4px solid #00d2ff;/g, 'border-left: 4px solid #00d2ff;'); // fine
  content = content.replace(/background-color:\s*#1a1c23;/g, 'background-color: rgba(255, 255, 255, 0.08);');
  content = content.replace(/border-bottom-color:\s*#1f2128;/g, 'border-bottom-color: rgba(255, 255, 255, 0.05);');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
