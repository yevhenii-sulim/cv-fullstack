import css from './contacts.module.css';
export default function Contact({icon, text, href, link = null}) {
  return (
    <li className={css.contactList}>
      <a href={href} className={`${css.contactLink} text`}>
        {icon}
        <span>{text}</span>
        {link && <span>( {link} )</span>}
      </a>
    </li>
  );
}
