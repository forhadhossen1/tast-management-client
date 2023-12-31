import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from '../../../public/task-logo.png';


const Navbar = () => {
    const { user, logOut, loading } = useAuth();

    if (loading) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
        }}>
            <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 flex justify-center items-center"></div>
        </div>

    }

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
    </>

    return (
        <div className="navbar  z-10 text-black ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} alt="logo" className="h-[50px] md:h-[50px]" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>


            <div className="navbar-end">
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        {announcement.length === 0 ? (
                            <span className="badge badge-sm indicator-item bg-red-600 text-white">0</span>
                        ) : (
                            <span className="badge badge-sm indicator-item bg-red-600 text-white">{announcement.length}</span>
                        )}
                    </div>
                </label> */}


                {
                    user ? <div className="dropdown dropdown-end ml-5">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full bg-blue-300">
                                <img src={user?.photoURL
                                } />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-md w-52 bg-gray-300">
                            <h4 className="text-center font-bold py-4">
                                {user?.displayName}
                            </h4>
                            <Link to='/dashboard'>
                                <li className="pb-5 font-bold"><NavLink to='/dashboard'>Dashboard</NavLink></li>
                            </Link>
                            <button onClick={handleLogOut} className="btn btn-sm px-6 py-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-none">Log Out</button>

                        </ul>
                    </div>

                        :

                        <Link to='/login'><button className="btn bg-blue-500 text-white hover:text-black">Login</button></Link>
                }

            </div>
        </div>
    );
};

export default Navbar;