import { RouterProvider } from "react-router-dom";

import routes from "./Routes/Routes";

function App() {
  return (
    <div className="h-full bg-gradient-to-b from-gray-800 to-black">
      {/* <NavBar />
      <Home />
      <About />
      
      <Portfolio />
      <Experience />
      <OnlineCertification></OnlineCertification>
      <Contact />
      

      <SocialLinks /> */}
      <RouterProvider router={routes}></RouterProvider>
      
      
    </div>
  );
}

export default App;
