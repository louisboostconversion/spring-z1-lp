import './Certifications.css'

export default function Certifications() {
  return (
    <section className="certs section">
      <div className="section-inner">
        <div className="certs-list">
          <div className="cert-item">
            <div className="cert-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="8" y="4" width="24" height="32" rx="2" />
                <path d="M14 16h12M14 20h12M14 24h8" />
                <text x="16" y="14" fontSize="8" fill="currentColor" stroke="none" fontWeight="700">B</text>
              </svg>
            </div>
            <div className="cert-text">
              <strong>Entreprise certifiée</strong><br />
              B Corp
            </div>
          </div>

          <div className="cert-item">
            <div className="cert-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20 4C14 8 10 14 10 22c0 6 4 14 10 14s10-8 10-14c0-8-4-14-10-18z" />
              </svg>
            </div>
            <div className="cert-text">
              <strong>Fabriqué en France et en Europe</strong><br />
              avec amour
            </div>
          </div>

          <div className="cert-item">
            <div className="cert-icon">
              <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="20" cy="20" r="14" />
                <path d="M14 20c2-4 6-6 10-4" />
                <path d="M18 14c0 4-2 8-4 10" />
              </svg>
            </div>
            <div className="cert-text">
              <strong>Formules clean</strong><br />
              Sans matières controversées
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
