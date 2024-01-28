import phone from '../../../assets/icons/phone.svg';
import addUser from '../../../assets/icons/addUser.svg';
import hospitalLight from '../../../assets/icons/hospitalLight.svg';
import protectionLight from '../../../assets/icons/protectionLight.svg';
import homeLight from '../../../assets/icons/homeLight.svg';
import back from '../../../assets/icons/back.svg';
import family from '../../../assets/icons/family.svg';
import check from '../../../assets/icons/check.svg';
import none from '../../../assets/icons/none.svg';
import next from '../../../assets/icons/next.svg';
import prev from '../../../assets/icons/prev.svg';

const icons = {
  phone,
  protectionLight,
  addUser,
  hospitalLight,
  homeLight,
  back,
  family,
  check,
  none,
  next,
  prev,
};

const Icon = ({ iconName, innerClass }) => {
  return (
    <>
      <img className={innerClass} src={icons[iconName]} />
    </>
  );
};

export default Icon;
