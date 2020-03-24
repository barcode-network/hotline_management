import React, { useContext } from "react";
import firebase from "../config/firebase";
import Navbar from '../components/Navbar'

import { AuthContext } from '../context/Auth'

const Home = () => {



  const auth = useContext(AuthContext);
  // console.log(auth)
  const { currentUser } = auth



  return (
    <>
      <Navbar />
      <div class="container w-full flex-wrap mx-auto px-2 pt-8 lg:pt-16 mt-16">

        <div class="w-full  p-8 mt-2 lg:mt-0 text-gray-900 leading-normal bg-white border border-gray-400 border-rounded">

          <div class="font-sans">
            <h1 class="font-sans break-normal text-gray-900 pt-2 pb-2 text-xl">Homepage</h1>
            <hr class="border-b border-gray-200" />
          </div>

          <p class="py-6">
            👋 Welcome back, {currentUser.email}.
            </p>
        </div>
      </div>

    </>
  );
};

export default Home;
