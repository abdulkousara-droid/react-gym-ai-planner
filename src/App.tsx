import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.tsx";
import Profile from "./Pages/Profile.tsx";
import Onboarding from "./Pages/Onboarding.tsx";
import Auth from "./Pages/Auth.tsx";
import Account from "./Pages/Account.tsx";
import Navbar from "./compunents/layout/Navbar.tsx";
import { NeonAuthUIProvider } from "@neondatabase/neon-js/auth/react";
import { authClient } from "./lib/auth.ts";
import AuthProvider from "./context/AuthContext.tsx";


function App() {


  return (
      <NeonAuthUIProvider authClient={authClient} defaultTheme="dark">
         <AuthProvider>
          <BrowserRouter>
           <div className="min-h-screen flex flex-col">
               <Navbar/>
                   <main className="flex-1">
                     <Routes>
                       <Route index element={<Home/>}/>
                       <Route path="/onboarding" element={<Onboarding/>}/>
                       <Route path="/profile" element={<Profile/>}/>
                       <Route path="/auth/:pathname" element={<Auth/>}/>
                       <Route path="/account/:pathname" element={<Account/>}/>
                     </Routes>
                   </main>
               </div>
          </BrowserRouter>
         </AuthProvider>
      </NeonAuthUIProvider>
  )
}

export default App
