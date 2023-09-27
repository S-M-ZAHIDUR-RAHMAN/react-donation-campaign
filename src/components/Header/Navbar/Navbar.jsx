import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
    return (
        <div className="mt-2">
            <nav className="flex flex-col items-center gap-5 md:flex-row md:justify-between lg:flex-row lg:justify-between lg:items-center md:px-4 py-9">
                <div>
                <Logo></Logo>
                </div>
                <ul className="flex gap-10">
                    <li className="hover:border border-red-600 hover:rounded-full hover:px-3 hover:bg-slate-100">
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="hover:border border-red-600 hover:rounded-full hover:px-3 hover:bg-slate-100">
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    
                    <li className="hover:border border-red-600 hover:rounded-full hover:px-3 hover:bg-slate-100">
                        <NavLink
                            to="/statistics"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""
                            }
                        >
                            Statistics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;