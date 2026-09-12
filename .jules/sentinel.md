## 2025-02-23 - [Prevent Reverse Tabnabbing]
**Vulnerability:** Several links across the application (e.g. components/About.jsx, components/Tech.jsx, components/Works.jsx) utilized `target="_blank"` without also setting `rel="noopener noreferrer"`.
**Learning:** Forgetting to add `rel="noopener noreferrer"` to `target="_blank"` links is a common security gap in React that can expose the application to reverse tabnabbing attacks, where a malicious new tab can hijack the `window.opener` object of the original tab. In `window.open`, the window feature string `"noopener,noreferrer"` provides this mitigation.
**Prevention:** Always ensure that `target="_blank"` on links or in `window.open` is accompanied by `noopener` and `noreferrer` protections.
## 2025-02-23 - [Dependabot Auto-Merge]
**Learning:** Added a GitHub Actions workflow to automatically merge Dependabot pull requests. This enhances the security posture by ensuring dependencies are kept up to date automatically, reducing the window of vulnerability for known CVEs in outdated packages.
