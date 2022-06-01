import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import Body from './ThreeBG';

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
            <a href="https://tympanus.net/Development/MenuFullGrid/">
              Previous demo
            </a>
            <a href="https://tympanus.net/codrops/?p=51167">Article</a>
            <a href="https://github.com/emmelleppi/codrops-r3f-mirrors">
              GitHub
            </a>
          </div>
          <div className={styles.frameDemos}>
            <NavLink
              to="/panna"
              activeClassName={styles.frameDemo_current}
              className={styles.frameDemo}
            >
              PANNA
            </NavLink>
            <NavLink
              to="/olga"
              activeClassName={styles.frameDemo_current}
              className={styles.frameDemo}
            >
              OLGA
            </NavLink>
            <NavLink
              to="/pedro"
              activeClassName={styles.frameDemo_current}
              className={styles.frameDemo}
            >
              PEDRO
            </NavLink>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Body scene={1} />} />
            <Route exact path="/panna" element={<Body scene={1} />} />
            <Route exact path="/olga" element={<Body scene={2} />} />
            <Route exact path="/pedro" element={<Body scene={3} />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
