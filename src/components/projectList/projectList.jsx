import css from './projectList.module.css';

const projects = [
  {
    title: 'Marketplace',
    link: 'https://yevhenii-sulim.github.io/marketplace/',
    text: 'Worked primarily as the main frontend developer on a web application, being responsible for most of the UI implementation across the project. Built new pages and reusable components, ensuring consistency and maintainability of the interface. Focused on optimizing performance, improving code structure, and refining existing functionality to enhance user experience and application stability.',
  },
  {
    title: 'Team challenge',
    link: 'https://teamchallenge.io/',
    text: 'Contributed to the development and improvement of a web application by building new components and features, as well as extending and refining existing ones. Worked with an established codebase, quickly understanding its structure to implement enhancements and fix issues efficiently. Focused on code optimization, maintainability, and improving overall performance.',
  },
  {
    title: 'SaveMeUp',
    link: 'https://play.google.com/store/apps/details?id=com.savemeup',
    text: 'Developed a mobile application using React Native as part of a team. I was responsible for the frontend, including navigation, screens, and reusable components. Integrated native functionality in Kotlin with the help of ChatGPT and connected it with the JavaScript layer. Managed state with Zustand and optimized app performance.',
  },
  {
    title: 'User Authentication & Management System',
    link: 'https://github.com/yevhenii-sulim/user_authentication_management_system',
    text: 'Built a backend authentication system featuring user registration, login, and profile update functionality. Implemented middleware and guards for route protection, ensuring secure access control for unauthenticated users.',
  },
  {
    title: 'RSS News Aggregator',
    link: 'https://github.com/yevhenii-sulim/news-api',
    text: 'Built a backend service that fetches news from RSS feeds via CLI commands and stores them in a database. Implemented a REST API to serve news to the client, along with automated cleanup of outdated records. Profiled and optimized the application for performance.',
  },
];

export default function ProjectList() {
  return (
    <div className='box'>
      <h2 className='title-box'>Project experience</h2>
      <ul>
        {projects.map(({title, link, text}) => (
          <li className={css.list}>
            <h3 class={css.project}>{title}</h3>
            <a href='link' className='text'>
              {link}
            </a>
            <p className={`${css.text} text`}>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
