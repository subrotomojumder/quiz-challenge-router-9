import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Layout/Routes';
// import Home from './component/Home';
// import Blog from './component/Blog';
// import Root from './component/Root';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
