import Education from '../components/education/education';
import HardSkill from '../components/hardSkills';
import Language from '../components/language';
import Learning from '../components/learning/learning';
import Profile from '../components/profile';
import ProjectList from '../components/projectList/projectList';
import SoftSkills from '../components/softSkills';
import Summery from '../components/summery';
import css from './main.module.css';

export default function Main() {
  return (
    <div className={css.wrapper}>
      <Profile />
      <div className={css.container}>
        <Language />
        <HardSkill />
        <SoftSkills />
        <Summery />
        <ProjectList />
        <Education />
        <Learning />
      </div>
    </div>
  );
}
