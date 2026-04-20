import ContactList from '../contactList';
import css from './profile.module.css';
export default function Profile() {
  return (
    <div className='box'>
      <h1 className='title'>
        Evgeniy
        <br />
        Sulim <br />
        <span className={css.special}>fullstack developer</span>
      </h1>
      <div className={css.img}>
        <img src='/img.png' alt='User profile' />
        <ContactList />
      </div>
    </div>
  );
}
