import { createBrowserRouter, RouterProvider } from "react-router-dom";


import Dashboard from "./scenes/dashboard";
import BaseScene from "./scenes/BaseScene";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import FAQ from "./scenes/FAQ";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

const routes = createBrowserRouter(
  [
    {
      path:"/",
      element:<BaseScene/>,
      children:[
        {index:true, element:<Dashboard/>},
        {path:"/team", element:<Team/>},
        {path:"/contacts", element:<Contacts/>},
        {path:"/invoices", element:<Invoices/>},
        {path:"/form", element:<Form/>},
        {path:"/calendar", element:<Calendar/>},
        {path:"/faq", element:<FAQ/>},
        {path:"/bar", element:<Bar/>},
        {path:"/pie", element:<Pie/>},
        {path:"/line", element:<Line/>},
        {path:"/geography", element:<Geography/>},
        
      ]
    }
  ]
)

function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>
  );
}

export default App;
