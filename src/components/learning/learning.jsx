import css from './learning.module.css';

export default function Learning() {
  return (
    <div className='box'>
      <h2 className='title-box'>Courses</h2>
      <ul class='box-singl'>
        <li className={css.list}>
          <h3 class={css.project}>UDEMY (react native)</h3>
          <p className='text'> - Frontend developer (2025)</p>
        </li>
        <li className={css.list}>
          <h3 class={css.project}>UDEMY (nest)</h3>
          <p className='text'> - Backend developer (2024)</p>
        </li>
        <li className={css.list}>
          <h3 class={css.project}>IT School GoIT (express, react)</h3>
          <p className='text'> - Fullstack developer (2023 - 2024)</p>
        </li>
      </ul>
    </div>
  );
}
