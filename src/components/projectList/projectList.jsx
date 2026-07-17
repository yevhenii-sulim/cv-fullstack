import css from './projectList.module.css';

const projects = [
  {
    title: 'User Authentication & Management System',
    link: 'https://github.com/yevhenii-sulim/user_authentication_management_system',
    description: {
      text:
        'Built a backend service for user authentication and account management. Implemented user registration, login, profile retrieval, and profile update functionality.\n\n' +
        'Added password hashing, JWT-based authentication, protected routes, middleware, guards, request validation, and centralized error handling. Structured the application into reusable modules and separated controllers, services, authentication logic, and data access responsibilities.',
      technologies: 'Node.js, TypeScript, NestJS, PostgreSQL, JW',
    },
  },
  {
    title: 'RSS News Aggregator',
    link: 'https://github.com/yevhenii-sulim/news-api',
    description: {
      text:
        'Built a backend service that collects articles from external RSS feeds, processes them, and stores them in a database. Implemented CLI commands for importing news and a REST API for retrieving stored articles.\n\n' +
        'Added scheduled cleanup of outdated records, duplicate prevention, data validation, logging, and error handling. Profiled the application, identified performance bottlenecks, and optimized data processing and database operations.',
      technologies:
        'Node.js, TypeScript, NestJS, PostgreSQL, RSS parsing, REST API, CLI commands, scheduled tasks, Git.',
    },
  },
  {
    title: 'Inkluvo Backend',
    link: 'Private repo',
    description: {
      text:
        'Developed the backend API for a mobile accessibility map application that helps users find and evaluate accessible places.\n\n' +
        'Implemented authentication, user roles, CRUD operations for places, comments, complaints, photos, and accessibility-related data. Designed PostgreSQL database schemas and migrations using Drizzle ORM.\n\n' +
        'Built business logic for calculating accessibility scores based on entrance accessibility, ramps, lifts, elevators, doors, parking, restrooms, thresholds, and other accessibility parameters. Added request validation, route protection, error handling, filtering, geolocation-based place queries, and integration with the React Native application.',
      technologies:
        'Node.js, TypeScript, NestJS, PostgreSQL, Drizzle ORM, JWT, REST API, class-validator, Cloudinary, Docker, Git.',
    },
  },
  {
    title: 'Marketplace',
    link: 'https://yevhenii-sulim.github.io/marketplace/',
    description: {
      text: 'Worked as the primary frontend developer and implemented most of the application’s user interface. Built pages, reusable components, forms, navigation, filtering, pagination, modals, notifications, and interactive UI elements.\n\nIntegrated REST APIs with Axios and managed server state using TanStack React Query. Used Redux Toolkit, React Redux, and Redux Persist for global and persistent application state. Implemented form handling and validation with Formik and Yup.\n\nDeveloped the interface using React, React Router, Material UI, MUI Joy, Emotion, and styled-components. Also worked with date pickers, carousels, loading states, transitions, and responsive layouts. Focused on reusable architecture, code maintainability, performance, and a consistent user experience.\n\nTechnologies: React, JavaScript, Redux Toolkit, React Redux, Redux Persist, TanStack React Query, React Router, Axios, Material UI, MUI Joy, Emotion, styled-components, Formik, Yup, Day.js, Swiper.',
      technologies:
        'React, JavaScript, Redux Toolkit, React Redux, Redux Persist, TanStack React Query, React Router, Axios, Material UI, MUI Joy, Emotion, styled-components, Formik, Yup, Day.js, Swiper',
    },
  },
  {
    title: 'Team challenge',
    link: 'https://teamchallenge.io/',
    description: {
      text:
        'Worked as a junior frontend developer within an established production codebase. Developed and improved React components and application features, fixed UI issues, and extended existing functionality while following the project’s architecture and coding standards.\n\n' +
        'Worked with React and TypeScript, integrated REST APIs using Axios, and managed asynchronous server data with TanStack React Query. Used Material UI and Emotion to build and maintain responsive interface components.\n\n' +
        'Contributed to forms and validation using Formik and Yup, multilingual functionality with i18next and react-i18next, routing with React Router, and authentication flows based on Auth0. Also worked with file uploads, image galleries, Markdown content, notifications, and existing Stripe-related frontend components.\n\n' +
        'Used Git-based team workflows and project tooling including ESLint, Prettier, Husky, lint-staged, TypeScript, and Webpack-related configuration. Quickly learned the structure of a large existing application and implemented changes while maintaining code quality and compatibility with the current codebase.',
      technologies:
        'React, TypeScript, React Router, TanStack React Query, Axios, Material UI, Emotion, Formik, Yup, i18next, Auth0, Stripe frontend integration, Git, ESLint, Prettier, Husky.',
    },
  },
  {
    title: 'SaveMeUp',
    link: 'https://play.google.com/store/apps/details?id=com.savemeup',
    description: {
      text:
        'Developed a mobile application using React Native as part of a team. I was responsible for the frontend, including navigation, screens, reusable components, and integration with backend APIs.\n\n' +
        'Integrated native Android functionality written in Kotlin with the assistance of ChatGPT, reviewed the generated code, and connected it with the JavaScript layer. Managed application state with Zustand and focused on performance, code reuse, and application stability.',
      technologies:
        'React Native, JavaScript, Zustand, Kotlin integration, Android Studio, REST API, Git.',
    },
  },
  {
    title: 'Inkluvo Mobile App',
    link: 'https://inkluvo.com.ua/',
    description: {
      text:
        'Built the frontend of a mobile accessibility map application for people who use wheelchairs. Implemented an interactive Mapbox map with custom markers, clustering, place selection, place details screens, accessibility forms, comments, photo upload flow, and user location handling.\n\n' +
        'Managed application state with Zustand, persisted selected user data with AsyncStorage, integrated REST APIs, and worked on caching, map performance, and reusable component architecture.',
      technologies:
        'React Native, TypeScript, Mapbox, Zustand, AsyncStorage, REST API, Axios, Android Studio, Git.',
    },
  },
];

export default function ProjectList() {
  return (
    <div className={`box ${css.projects}`}>
      <h2 className='title-box'>Project experience</h2>
      <ul>
        {projects.map(({title, link, description}) => (
          <li className={css.list}>
            <h3 class={css.project}>{title}</h3>
            <a
              href={link}
              className={`${css.link} text`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {link}
            </a>

            <p className='text'>{description.text}</p>
            <p className='text'>
              <strong>Technologies:</strong> {description.technologies}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
