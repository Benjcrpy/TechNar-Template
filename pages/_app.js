import '../styles/globals.css'

import { NavBar } from "../components/Componentsindex";

const MyApp = ({ Component, pageProps}) => (
   <div>
      <NavBar />
      <Component {...pageProps} />
   </div>
  
)

export default MyApp
