import { Link } from 'react-router-dom'
import styles from './Homepage.module.css'

export default function Homepage() {
  return (
    <div>
      <section className={styles.section}>
        <h1 className={styles.title}>Sanity Tutorial Blog</h1>
        <Link className={styles.link} to="/blog">
          Start Reading
        </Link>
      </section>
    </div>
  )
}
