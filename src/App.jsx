import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import ThreeBG from './ThreeBG';

import './base.css';
import styles from './App.module.css';

export default function App() {
  return (
    <Router basename="/personal-website">
      <main>
        <div className={styles.frame}>
          <div className={styles.frameTitleWrap}>
            <h1 className={styles.frameTitle}>Awesome Mirror Effect</h1>
            <p className={styles.frameTagline}>
              A react-three-fiber based demo
            </p>
          </div>
          <div className={styles.frameLinks}>
            <a href="/">Projects</a>
            <a href="/">About</a>
            <a href="https://tympanus.net/codrops/2020/09/30/creating-mirrors-in-react-three-fiber-and-three-js/">
              Journal
            </a>
            <a href="/">Contact</a>
          </div>
          <div className={styles.frameDemos}>
            <NavLink
              to="/panna"
              className={({ isActive }) =>
                isActive ? styles.frameDemo_current : ''
              }
            >
              PANNA
            </NavLink>
            <NavLink
              to="/olga"
              className={({ isActive }) =>
                isActive ? styles.frameDemo_current : ''
              }
            >
              OLGA
            </NavLink>
            <NavLink
              to="/pedro"
              className={({ isActive }) =>
                isActive ? styles.frameDemo_current : ''
              }
            >
              PEDRO
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<ThreeBG scene={1} />} />
            <Route exact path="/panna" element={<ThreeBG scene={1} />} />
            <Route exact path="/olga" element={<ThreeBG scene={2} />} />
            <Route exact path="/pedro" element={<ThreeBG scene={3} />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
