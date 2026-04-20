import GitHubIcon from '../../icons/gitHub';
import LinkedinIcon from '../../icons/linkedin';
import MailIcon from '../../icons/mail';
import PhoneIcon from '../../icons/phone';
import TelegramIcon from '../../icons/telegram';
import Contact from './contact';
import css from './contacts.module.css';

const contacts = [
  {
    text: 'Linkedin',
    icon: () => <LinkedinIcon />,
    href: 'https://www.linkedin.com/in/sulim-yevhenii/',
    link: 'https://www.linkedin.com/in/sulim-yevhenii/',
  },
  {
    text: 'Github',
    icon: () => <GitHubIcon />,
    href: 'https://github.com/yevhenii-sulim',
    link: 'https://github.com/yevhenii-sulim',
  },
  {
    text: 'Tel',
    icon: () => <PhoneIcon />,
    href: 'tel:+380669231638',
    link: '+38 (066) 92-31-638',
  },
  {
    text: 'Mail',
    icon: () => <MailIcon />,
    href: 'mailto:sulim-evgen@ukr.net',
    link: 'sulim-evgen@ukr.net',
  },
  {
    text: 'Telegram',
    icon: () => <TelegramIcon />,
    href: 'https://t.me/Yevgenii_21',
    link: '@Yevgenii_21',
  },
];

export default function ContactList() {
  return (
    <div className='box'>
      <ul className={css.container}>
        {contacts.map(({text, icon, href, link}) => (
          <Contact text={text} icon={icon()} href={href} link={link} />
        ))}
      </ul>
    </div>
  );
}
