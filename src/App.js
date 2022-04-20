
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import './App.css';
import AfterLogin from './EmployeeLogin/AfterLogin';
import AfterLoginLayout from './EmployeeLogin/AfterLoginLayout';
import Index from './EmployeeLogin/Index';
import LayOut from './EmployeeLogin/LayOut';
import OwnerLogin from './EmployeeLogin/OwnerLogin';
import Registration from './EmployeeLogin/Registration';

function App() {

  function RequireAuth({ children }: { children: JSX.Element }) {

    if (sessionStorage.getItem("OwnerLogin") === null) {
      return <Navigate to="/Login" replace />;
    }
    return children;
  }
  function RequireAuth1({ children }: { children: JSX.Element }) {

    if (sessionStorage.getItem("OwnerLogin") != null) {
      return <Navigate to="/Employee" replace />;
    }

    return children;
  }


  let routes: RouteObject[] = [
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Index /> },
        {
          path: "/Registration",
          element: <Registration />,

        },
        {
          path: "/Login",
          element: <RequireAuth1>
            <OwnerLogin />
          </RequireAuth1>

        },

      ],
    },
    { path: "*", element: <p>There's nothing here!</p> },
    {
      path: "/Employee", element: <AfterLoginLayout />,
      children: [
        {
          index: true, element: <RequireAuth>
            <AfterLogin />
          </RequireAuth>
        }
      ]
    }
  ];
  let element = useRoutes(routes);


  return (
    <div className="">
      {element}
    </div>
  );
}

export default App;
