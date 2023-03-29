import { GITHUB_LINK } from '../../../constants';

import githubIcon from '../../../assets/github.svg';

import styles from './index.module.scss';
const { footer, githubLink, githubImg } = styles;

export const Footer = () => {
  return (
    <footer className={footer}>
      <a target={'_blank'} className={githubLink} href={GITHUB_LINK} rel="noreferrer">
        <img className={githubImg} src={githubIcon} alt="Гитхаб" />
      </a>
    </footer>
  );
};
