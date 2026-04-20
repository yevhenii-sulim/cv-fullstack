import css from './hardSkill.module.css';

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'REST API',
  'React',
  'React native',
  'Next',
  'Nest',
  'Express',
  'Redux/toolkit, redux/thunk',
  'Zustand',
  'Material UI',
  'PostgreSQL',
  'Drizzle ORM',
  'OOP principles and patterns',
  'Git',
];

export default function HardSkill() {
  return (
    <div className='box'>
      <h2 className='title-box'>Hard skills</h2>
      <ul className={css.list}>
        {skills.map((item) => (
          <li className={`${css.skill} text`}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
