
import '../cssComponents/Skills.css';

const skills = [
  { name: 'Core Java', percent: 80 },
  { name: 'HTML & CSS', percent: 90 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React.js', percent: 80 },
  { name: 'MySQL', percent: 85 },
  { name: 'Git & GitHub', percent: 80 },
  {name: 'AI&ML',percent:60},
  {name:'AWS',percent:50},
];

function SkillSection() {
  return (
    <section id='skills' className="skill-section">
      <h2>My Skills</h2>
      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-title">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="skill-bar-background">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillSection;
