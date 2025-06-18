import './FooterStyle.css';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='FUT'>
      <h3>All rights are reserved ©</h3>
      <a
        href="https://www.facebook.com/profile.php?id=61561203922238&rdid=s2yoSMUDnAKl9t0F&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19JGptjg2q%2F#"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        aria-label="Facebook"
      >
        <FaFacebook />
      </a>
    </footer>
  );
}

export default Footer;
