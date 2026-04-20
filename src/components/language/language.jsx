import css from './lng.module.css';

const languages = [
  {language: 'Ukrainian', level: 'native'},
  {language: 'English', level: 'intermediate'},
];

export default function Language() {
  return (
    <div className='box'>
      <h2 className='title-box'>Languages</h2>
      <ul>
        {languages.map(({language, level}) => (
          <li className={css.languageLink}>
            - {language} ({level})
          </li>
        ))}
      </ul>
    </div>
  );
}
