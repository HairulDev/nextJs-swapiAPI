import React from 'react';
import { MainStyled } from '../pages/styled';
import styles from '../styles/Home.module.css';

const Loader: React.FC = () => (
  <div className={styles.container}>
    <MainStyled>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-700" />
      </div>
    </MainStyled>
  </div>
);

export default Loader;
