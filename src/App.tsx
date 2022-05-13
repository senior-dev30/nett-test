import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '~react-pages';

export default function App() {
  return (
    <main className="h-full bg-container">
      <Router>
        <Routes />
      </Router>
    </main>
  );
}

function Routes() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}
