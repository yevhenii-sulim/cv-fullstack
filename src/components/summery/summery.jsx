import css from './summery.module.css';

export default function Summery() {
  return (
    <div className='box'>
      <h2 className='title-box'>Summary</h2>
      <ul>
        <li className={`text ${css.list}`}>
          Backend Developer with hands-on experience building server-side
          applications through personal projects. I focus on creating reliable
          APIs, working with databases, and implementing clean backend
          architecture.
        </li>
        <li className={`text ${css.list}`}>
          I have experience designing RESTful services, managing data
          persistence, and writing efficient server logic. I enjoy structuring
          code for maintainability and building backends that integrate smoothly
          with frontend applications.
        </li>
        <li className={`text ${css.list}`}>
          I learn new technologies quickly and pay close attention to code
          quality, security, and performance. While my team experience comes
          from frontend development, I bring strong collaboration skills and I'm
          eager to apply them as I grow into backend roles through real-world
          challenges.
        </li>
      </ul>
    </div>
  );
}
