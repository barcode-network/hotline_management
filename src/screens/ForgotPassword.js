import React, { useCallback } from "react";
import { withRouter } from "react-router";

const ForgotPassword = ({ history }) => {


    return (

        <div class="flex items-center justify-center h-screen">

            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        E-mail
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                </div>

                <div class="flex flex-col items-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Forgot Password
                    </button>
                    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
                        Back to Login
                    </a>
                </div>
            </form>

        </div>
    );
};

export default withRouter(ForgotPassword);