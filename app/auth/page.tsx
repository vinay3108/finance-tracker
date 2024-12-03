"use client";

import { FaGoogle, FaGithub, FaTwitter } from "react-icons/fa";

const socialMediaIcons = [FaGoogle, FaGithub, FaTwitter];

const LoginPage = () => {
    return (
        <div className="relative w-full h-screen bg-gray-100">
            <div className="h-1/2 bg-customOrange">
                <div className='text-center pt-16'>
                    <h1 className='mt-2 text-lg text-black-300 font-semibold'>finance tracker</h1>
                </div>
            </div>
            <div className="h-1/2 bg-white"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-100 h-100 bg-opacity-50 rounded-lg">
                <SignIn />
            </div>
        </div>
    );
};

const SignIn = () => {
    return (
        <>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[400px] h-[400px]">
                <h2 className="mb-2 text-lg font-semibold">Sign In</h2>
                <p className="mb-4 text-gray-600">
                    If you are already registered
                </p>
                <form className="flex flex-col items-center gap-6 mt-16">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 mb-4 border rounded-md border-gray-300 focus:ring-2 focus:ring-orange-300 focus:outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 mb-4 border rounded-md border-gray-300 focus:ring-2 focus:ring-orange-300 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-orange-500 mt-8 text-white p-3 w-56 rounded-xl text-base hover:bg-orange-600"
                    >
                        SIGN IN
                    </button>
                </form>
                <div className="flex justify-around mt-16">
                {socialMediaIcons.map((Icon, index) => (
                    <button 
                    key={index} 
                    className="border-2 rounded-full border-solid border-customOrange h-[56px] w-[56px] flex items-center justify-center"
                    >
                    <Icon />
                    </button>
                ))}
                </div>
            </div>
        </>
    );
};
export default LoginPage;
