import css from './summery.module.css';

export default function Summery() {
  return (
    <div className='box'>
      <h2 className='title-box'>Summary</h2>
      <ul>
        <li className={`text ${css.list}`}>
          Fullstack Developer with 2+ years of hands-on experience gained
          through team-based development, collaborative projects, and personal
          products. I work with React, React Native, TypeScript, Node.js,
          NestJS, PostgreSQL, and modern frontend and backend technologies.
        </li>
        <li className={`text ${css.list}`}>
          I have experience building responsive web interfaces, mobile
          applications, REST APIs, authentication systems, database schemas, and
          business logic. I am comfortable working with existing codebases,
          integrating frontend applications with backend services, and
          developing features across the full application stack.
        </li>
        <li className={`text ${css.list}`}>
          I focus on maintainable architecture, reusable components, clean code,
          security, and performance. I learn new technologies quickly, work
          effectively both independently and within a team, and enjoy building
          practical products that solve real-world problems.
        </li>
      </ul>
    </div>
  );
}
