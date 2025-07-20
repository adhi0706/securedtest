#!/usr/bin/env python3
"""
Setup script for Algorand Multi-Language Vulnerability Scanner
"""

from setuptools import setup, find_packages
import os

# Read README
readme_path = os.path.join(os.path.dirname(__file__), 'README.md')
if os.path.exists(readme_path):
    with open(readme_path, "r", encoding="utf-8") as fh:
        long_description = fh.read()
else:
    long_description = "Algorand Multi-Language Vulnerability Scanner"

# Read requirements
requirements_path = os.path.join(os.path.dirname(__file__), 'requirements.txt')
if os.path.exists(requirements_path):
    with open(requirements_path, "r", encoding="utf-8") as fh:
        requirements = [line.strip() for line in fh if line.strip() and not line.startswith("#")]
else:
    requirements = [
        "aiofiles>=23.0.0",
        "click>=8.0.0",
        "pyyaml>=6.0",
        "jsonschema>=4.0.0",
        "rich>=13.0.0",
        "pathspec>=0.11.0",
        "py-algorand-sdk>=2.0.0",
        "pyteal>=0.20.0",
    ]

setup(
    name="algorand-scanner",
    version="0.1.0",
    description="Algorand Multi-Language Vulnerability Scanner",
    long_description=long_description,
    long_description_content_type="text/markdown",
    python_requires=">=3.8",
    install_requires=requirements,
    extras_require={
        "dev": [
            "pytest>=7.0.0",
            "pytest-asyncio>=0.21.0",
            "black>=22.0.0",
            "flake8>=4.0.0",
            "mypy>=1.0.0",
        ],
        "analyzers": [
            "tealer>=0.1.0",  # Will be installed separately
        ]
    },
    entry_points={
        "console_scripts": [
            "argus=algorand_scanner.cli.main:main",
            "argus-scan=algorand_scanner.cli.main:main",
        ],
    },
    include_package_data=True,
    package_data={
        "algorand_scanner": ["config/.yaml", "config/.json"],
    },
    # 🔧 The Fix: Only include your scanner package!
    packages=find_packages(include=["algorand_scanner", "algorand_scanner.*"]),
)