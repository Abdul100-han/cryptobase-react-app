import React from 'react';
import './SelectStyles.css';
import BoraBora from '../../assets/borabora.jpg';
import BoraBora2 from '../../assets/borabora2.jpg';
import Maldives from '../../assets/maldives.jpg';
import Maldives2 from '../../assets/maldives2.jpg';
import KeyWest from '../../assets/keywest.jpg';
import Maldives3 from '../../assets/maldives3.jpg';

import SelectImg from '../selectImg/SelectImg';

function Select() {
  return (
    <div name='views' className='selects'>
      <div className="container">
        <SelectImg bgImg={BoraBora} test='Bora Bora' />
        <SelectImg bgImg={BoraBora2} test='Emerals Bay' />
        <SelectImg bgImg={Maldives} test='Maldives' />
        <SelectImg bgImg={Maldives2} test='Greneda' />
        <SelectImg bgImg={Maldives3} test='Greneda' />
        <SelectImg bgImg={KeyWest} test='Key West' />
      </div>
    </div>
  );
}

export default Select;
