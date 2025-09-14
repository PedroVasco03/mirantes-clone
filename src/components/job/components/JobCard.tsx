interface JobCardProps {
  title: string;
  company: string;
  pillText: string;
  requirements: string;
}

const JobCard: React.FC<JobCardProps> = ({ title, company, pillText, requirements }) => {
  return (
    <article className="job-card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "linear-gradient(90deg,#6ea8ff,#7df3d1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#041017",
              fontWeight: 800,
            }}
          >
            {title.charAt(0).toUpperCase()}
          </div>
          <div>
            <div style={{ fontWeight: 800 }}>{title}</div>
            <div
              style={{
                color: "var(--muted)",
                fontSize: "13px",
                marginTop: "6px",
              }}
            >
              {company}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <div className="pill">{pillText}</div>
          <a className="btn" href="jobs.html">
            Candidatar
          </a>
        </div>
      </div>

      <div style={{ color: "var(--muted)", fontSize: "14px" }}>
        Requisitos: {requirements}
      </div>
    </article>
  );
};

export default JobCard;