import css from './softSkill.module.css';
const skills = [
  'Accurate',
  'Hardworking',
  'Quick learning skills',
  'Individually and in a team',
  'Strong analytical thinking',
];

export default function SoftSkills() {
  return (
    <div className='box'>
      <h2 className='title-box'>Soft skills</h2>
      <ul className={css.list}>
        {skills.map((item) => (
          <li className={`${css.skill} text`}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}
