/**
 * git clone
 * react router
 * css framework install
 * eslintrc edit
 * app.jsx clean
 * router set in main.jsx and routes
 * create layout-->Main.jsx
 * 
 * used moment js
 * https://github.com/brillout/awesome-react-components
 * https://github.com/leandrowd/react-responsive-carousel
 * npm i react-responsive-carousel
 * https://swiperjs.com/demos
 *   npm i swiper
 * https://github.com/smastrom/react-rating
 * npm i @smastrom/react-rating
 * 
 * https://github.com/staylor/react-helmet-async
 * https://www.npmjs.com/package/react-helmet-async
 * npm i react-helmet-async
 * 
 * 
 * import {HelmetProvider } from 'react-helmet-async'; in main route
 * <React.StrictMode>
    <HelmetProvider>
    <div className="max-w-screen-lg mx-auto">
      <RouterProvider router={router} />
    </div>
    </HelmetProvider>
  </React.StrictMode>
  menu page e :import {Helmet} from 'react-helmet-async';
    jekhane jekhane title lagbe:
        <Helmet>
        <title>Bistro | Menu</title>
        <link rel="canonical" href="https://www.tacobell.com/" /> 
        </Helmet>

 *
 * */
/**
 * https://github.com/keske/react-parallax-component
 * https://www.npmjs.com/package/react-parallax
 * npm install react-parallax-component
 * 
 * 
 * */ 
/**
 * https://www.npmjs.com/package/react-tabs
 * npm install --save react-tabs
 * */ 
/**
 * https://www.npmjs.com/package/react-simple-captcha
 * npm i react-simple-captcha
 * https://formik.org/
 * */ 
/**
 * https://tanstack.com/query/latest/docs/react/quick-start
 * tanstack useeffect nijer moto kore handle kore, so useeffect likhe lage na
 * main.jsx e set up korbo,
 * then dashboard-->AllUsers-->
      const {data: users = [], refetch} = useQuery(['users'],async()=>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
 * */ 
/**
 * post: first e index e giye kothay post korbo seta create kore felbo, tarpor sei localhost er route e client theke post korte thakbo
 * 
 * */ 