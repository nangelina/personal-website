import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';

import ThreeContainer from './ThreeContainer';
import MirrorsScene from './components/Mirrors/Scene';

import './base.css';
import styles from './App.module.css';

function Link({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive && styles.frameDemo_current}
    >
      {children}
    </NavLink>
  );
}

export default function App() {
  return (
    <Router basename="/personal-website">
      <main>
        <div className={styles.frame}>
          <div className={styles.frameTitleWrap}>
            <h1 className={styles.frameTitle}>Angelina Nguyen</h1>
            <p className={styles.frameTagline}>
              A @react-three/fiber based demo
            </p>
          </div>
          <div className={styles.frameLinks}>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className={styles.frameDemos}>
            <Link to="/hello">HELLO</Link>
            <Link to="/olga">OLGA</Link>
            <Link to="/pedro">PEDRO</Link>
          </div>
        </div>
        <div className={styles.content}>
          <Routes>
            <Route
              path="/"
              element={
                <ThreeContainer>
                  <MirrorsScene />
                </ThreeContainer>
              }
            />
            <Route
              exact
              path="/hello"
              element={
                <ThreeContainer>
                  <MirrorsScene />
                </ThreeContainer>
              }
            />
            <Route
              exact
              path="/olga"
              element={<ThreeContainer></ThreeContainer>}
            />
            <Route
              exact
              path="/pedro"
              element={<ThreeContainer></ThreeContainer>}
            />
          </Routes>
        </div>
      </main>
    </Router>
  );
}
