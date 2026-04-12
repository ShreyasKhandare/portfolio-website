import "./styles/SkillsCarousel.css";

type Skill = {
  name: string;
  icon?: string; // SimpleIcons CDN URL, or undefined for dot badge
};

// SimpleIcons CDN — white icons on dark bg
const si = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/c2a4ff`;

const row1: Skill[] = [
  { name: "Python",          icon: si("python") },
  { name: "LangChain",       icon: si("langchain") },
  { name: "FastAPI",         icon: si("fastapi") },
  { name: "Streamlit",       icon: si("streamlit") },
  { name: "OpenAI",          icon: si("openai") },
  { name: "Docker",          icon: si("docker") },
  { name: "GitHub Actions",  icon: si("githubactions") },
  { name: "n8n",             icon: si("n8n") },
  { name: "AWS EC2",         icon: si("amazonaws") },
  { name: "Azure",           icon: si("microsoftazure") },
  { name: "Render",          icon: si("render") },
  { name: "LangGraph",       icon: undefined },
  { name: "ChromaDB",        icon: undefined },
  { name: "RAG",             icon: undefined },
];

const row2: Skill[] = [
  { name: "React",           icon: si("react") },
  { name: "TypeScript",      icon: si("typescript") },
  { name: "JavaScript",      icon: si("javascript") },
  { name: "Node.js",         icon: si("nodedotjs") },
  { name: "C#",              icon: si("csharp") },
  { name: "ASP.NET",         icon: si("dotnet") },
  { name: "SQL Server",      icon: si("microsoftsqlserver") },
  { name: "MongoDB",         icon: si("mongodb") },
  { name: "MySQL",           icon: si("mysql") },
  { name: "Next.js",         icon: si("nextdotjs") },
  { name: "Express",         icon: si("express") },
  { name: "Vercel",          icon: si("vercel") },
  { name: "Cohere",          icon: undefined },
  { name: "SQLite",          icon: si("sqlite") },
];

function SkillBadge({ name, icon }: Skill) {
  return (
    <div className="skill-badge">
      {icon ? (
        <img
          src={icon}
          alt={name}
          width={18}
          height={18}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <span className="skill-dot" aria-hidden="true" />
      )}
      <span>{name}</span>
    </div>
  );
}

const SkillsCarousel = () => {
  // Duplicate arrays for seamless infinite loop
  const track1 = [...row1, ...row1];
  const track2 = [...row2, ...row2];

  return (
    <section className="skills-carousel-section" aria-label="Skills and tools">
      <p className="skills-carousel-label">Skills &amp; Tools</p>

      {/* Row 1 — scrolls left */}
      <div className="skills-carousel-overflow">
        <div className="skills-carousel-track sk-left">
          {track1.map((skill, i) => (
            <SkillBadge key={i} {...skill} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="skills-carousel-overflow">
        <div className="skills-carousel-track sk-right">
          {track2.map((skill, i) => (
            <SkillBadge key={i} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
