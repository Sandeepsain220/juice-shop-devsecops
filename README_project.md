# DevSecOps Security Pipeline for OWASP Juice Shop

## Project Overview

This repository contains my solution for the **DevSecOps Technical Challenge**, using **OWASP Juice Shop** as the target application.

The objective was to build a secure CI/CD pipeline around the application **without modifying the Juice Shop source code**. The pipeline automates security testing, vulnerability detection, secrets scanning, dependency analysis, container security, and security gating using GitHub Actions.

---

## Objectives

- Integrate Static Application Security Testing (SAST)
- Detect hardcoded secrets before merge
- Scan third-party dependencies for vulnerabilities
- Generate a Software Bill of Materials (SBOM)
- Harden the Docker image
- Scan container images for vulnerabilities
- Implement security gates for High and Critical findings
- Upload security reports to GitHub

---

# Technology Stack

| Category | Tool |
|----------|------|
| CI/CD | GitHub Actions |
| SAST | Semgrep |
| Secret Scanning | Gitleaks |
| SCA | Trivy |
| SBOM | CycloneDX |
| Container Security | Trivy |
| Containerization | Docker |
| Target Application | OWASP Juice Shop |

---

# Repository Structure

```text
.
├── .github/
│   └── workflows/
│       └── devsecops-pipeline.yml
│
├── .semgrep/
│   └── custom-rules.yml
│
├── Dockerfile.hardened
│
├── Risk-Brief.pdf
├── Rollout-Plan.pdf
├── Written_Reflection.pdf
├── Presentation.pptx
│
├── screenshots/
│
└── README_project.md
```

---

# DevSecOps Pipeline

The GitHub Actions pipeline performs the following security checks automatically on every Push and Pull Request.

```
Developer

      │

      ▼

GitHub Push

      │

      ▼

GitHub Actions

      │

 ┌──────────────────────┐
 │ Semgrep SAST         │
 └──────────────────────┘

      │

 ┌──────────────────────┐
 │ Gitleaks             │
 └──────────────────────┘

      │

 ┌──────────────────────┐
 │ Trivy SCA            │
 └──────────────────────┘

      │

 ┌──────────────────────┐
 │ Generate SBOM        │
 └──────────────────────┘

      │

 ┌──────────────────────┐
 │ Docker Image Scan    │
 └──────────────────────┘

      │

 Security Gate

      │

 Deployment
```

---

# Security Controls Implemented

## 1. Static Application Security Testing (SAST)

Tool Used

- Semgrep

Features

- Automatic source code scanning
- Custom JavaScript rules
- JSON Report
- SARIF Report
- GitHub Security Integration
- Severity-based gating

---

## 2. Secret Scanning

Tool Used

- Gitleaks

Features

- Detects hardcoded secrets
- Pipeline fails if secrets are found
- Demonstrated using a fake credential in a test branch

---

## 3. Software Composition Analysis (SCA)

Tool Used

- Trivy

Features

- Dependency vulnerability scanning
- High/Critical vulnerability gate
- SBOM generation
- CycloneDX format

---

## 4. Container Security

Implemented

- Hardened Dockerfile
- Minimal Alpine base image
- Multi-stage build
- Non-root user
- Health check
- Reduced attack surface

---

## 5. Security Gates

Pipeline blocks execution when:

- High vulnerabilities are detected
- Critical vulnerabilities are detected
- Secrets are committed
- Security policy violations occur

---

# Custom Semgrep Rules

Implemented custom JavaScript security rules including:

- Detection of `eval()` usage
- Detection of `child_process.exec()`

These rules demonstrate organization-specific security checks beyond the default Semgrep rules.

---

# Generated Artifacts

Each pipeline execution generates:

- Semgrep JSON Report
- Semgrep SARIF Report
- Trivy Report
- SBOM (CycloneDX)
- GitHub Security Results

---

# Deliverables

This repository contains the following deliverables:

- Risk Brief
- DevSecOps GitHub Actions Pipeline
- Hardened Dockerfile
- Custom Semgrep Rules
- Rollout Plan
- Presentation Slides
- Written Reflection

---

# Future Improvements

Given additional time, the following enhancements could be added:

- OWASP ZAP (DAST)
- CodeQL Analysis
- Infrastructure as Code (IaC) Scanning
- Kubernetes Security
- Container Signing
- Dependency Review
- Supply Chain Security Controls

---

# Author

**Sandeep Sain**

Application Security Engineer

GitHub:
https://github.com/Sandeepsain220

---

# Disclaimer

OWASP Juice Shop is an intentionally vulnerable application developed for security education and testing.

This repository focuses on implementing DevSecOps security controls around the application without modifying the original source code.