import { Link } from "react-router-dom";
import { Donatebutton } from "../navbar/navcomponents";

function Footer(){
    return (
        <>
            <div className="bg-cilcdarkblue w-screen py-12 min-[1000px]:px-24 min-[900px]:px-16 px-12 flex flex-col h-fit min-[1000px]:gap-x-16 min-[900px]:gap-x-12 gap-x-8 gap-y-8 p-8p">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-row items-center">
                        <Link className="w-fit flex flex-row cursor-pointer items-center" to="/">
                            <img className="h-16 sm:h-24" src="/images/logo.png" alt="CILC Logo"></img>
                            <div className="hidden sm:flex flex-col pl-6">
                                <h1 style={{fontFamily: 'century'}} className="font-light -mb-0.5 text-2xl text-[#fff]">Children's</h1>
                                <h1 style={{fontFamily: 'century'}} className="font-light -mb-0.5 -mt-0.5 text-2xl text-[#fff]">International</h1>
                                <h1 style={{fontFamily: 'century'}} className="font-light -mb-0.5 -mt-0.5 text-2xl text-[#fff]">Learning</h1>
                                <h1 style={{fontFamily: 'century'}} className="font-light -mt-0.5 text-2xl text-[#fff]">Centre</h1>
                            </div>
                        </Link>
                        <div className="grow"/>
                        <Donatebutton/>
                    </div>
                    <hr className="hidden sm:block bg-white"/>
                </div>
                <nav className="hidden sm:flex flex-row gap-x-4 no-wrap w-full px-4">
                    <Link className="w-1/5" to="/about">
                        <p className="text-white w-full text-center hover:underline">About</p>
                    </Link>
                    <Link className="w-1/5" to="/programmes">
                        <p className="text-white w-full text-center hover:underline">Programmes</p>
                    </Link>
                    <Link className="w-1/5" to="/resources">
                        <p className="text-white w-full text-center hover:underline">Resources</p>
                    </Link>
                    <Link className="w-1/5" to="/join-us">
                        <p className="text-white w-full text-center hover:underline">Join Us</p>
                    </Link>
                    <Link className="w-1/5" to="/contact-us">
                        <p className="text-white w-full text-center hover:underline">Contact Us</p>
                    </Link>
                </nav>
            </div>
            <div className="h-16 min-[900px]:h-0"></div>
        </>
    )
}
export default Footer