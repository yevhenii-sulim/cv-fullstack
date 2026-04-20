import css from './education.module.css';

export default function Education() {
  return (
    <div className='box'>
      <h2 className='title-box'>Education</h2>
      <div>
        <h3 className={css.project}>Master of engineering</h3>
        <p className={css.text}>
          Kharkiv National University of Construction and Architecture, faculty
          of Sanitary Engineering, specialty - heat and gas supply and
          ventilation
        </p>
        <p>2008 - 2013</p>
      </div>
    </div>
  );
}
