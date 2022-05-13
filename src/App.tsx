import { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from '~react-pages';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="font-sans px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <Router>
        <Routes />
      </Router>
      <Footer />
    </main>
  );
}

function Routes() {
  return <Suspense fallback={<p>Loading...</p>}>{useRoutes(routes)}</Suspense>;
}
