import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/Nav.module.css'
import { faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <a href="./">Home</a>
            <a href="./shows">All shows</a>
            <a href="./tags">Tags</a>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search"></input>
                <button>
                    <FontAwesomeIcon className="search" icon={faSearch} />
                </button>
            </div>
            <div className={styles.dropdown}>
                <button className={styles.dropbtn}>
                    Login
                    <FontAwesomeIcon className="Caretdown" icon={faCaretDown} />
                </button>
                <div className={styles.dropdown_content}>
                    <a href="./login">Login</a>
                    <br />
                    <a href="./register">Register</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;