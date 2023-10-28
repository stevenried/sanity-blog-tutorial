import { Link } from 'react-router-dom'

import styles from './Header.module.css'

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className="logo">
          <Link to="/">
            <h2>Sanity Blog</h2>
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
