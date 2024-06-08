import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { routes } from './routes';

function App() {
  const element = useRoutes(routes);

  return (
    <>
      <div className="container-App">
        {element}
        <Toaster position="bottom-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
