import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./pages/about";
import Blog from "./pages/blog";
import BlogItem from "./pages/blogItem";
import Contact from "./pages/contact";
import Faq from "./pages/faq";
import Gallery from "./pages/gallery";
import Home from "./pages/home";
import Prices from "./pages/price";
import Service from "./pages/service";
import ServiceItem from "./pages/serviceItem";
import Shop from "./pages/shop";
import Testimonials from "./pages/testimonial";


const routes = [
  {
    path:'/',
    component: Home,
    exact: true
  },
  {
    path:'/home',
    component: Home,
    exact: true
  },
  {
    path:'/about',
    component: About,
    exact: true
  },
  {
    path:'/testimonials',
    component: Testimonials,
    exact: true
  },
  {
    path:'/service',
    component: Service,
    exact: true
  },
  {
    path:'/serviceItems',
    component: ServiceItem,
    exact: true
  },
  {
    path:'/price',
    component: Prices,
    exact: true
  },
  {
    path:'/gallery',
    component: Gallery,
    exact: true
  },
  {
    path:'/blog',
    component: Blog,
    exact: true
  },
  {
    path:'/blogItems',
    component: BlogItem,
    exact: true
  },
  {
    path:'/shop',
    component: Shop,
    exact: true
  },
  {
    path:'/faq',
    component: Faq,
    exact: true
  },
  {
    path:'/contact',
    component: Contact,
    exact: true
  },
]



function Routes({history}) {
  return (
    <Router history={history}>
     <Switch>
        {
          routes.map(({path, component, exact})=>(
            <Route path={path} component={component} exact={exact} />
          ))
        }
     </Switch>
    </Router>
  );
}

export default Routes;
