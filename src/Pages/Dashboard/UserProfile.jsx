import { FcBusinessman } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";


const UserProfile = () => {

    const { user, loading } = useAuth();

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
    return (
        <div className="flex flex-col min-h-[200px]items-center justify-center">

            <div className="flex justify-center py-2">
                {user && user?.photoURL ? (
                    <img src={user?.photoURL} alt="User" className="w-[200px] rounded-full" />
                ) : (
                    <FcBusinessman className="w-[50px] rounded-full text-8xl" />
                )}
            </div>
            <p className="text-center text-3xl font-bold py-2">Name : {user?.displayName}</p>
            <p className="text-center text-3xl font-bold pb-4">Email : {user?.email}</p>

        </div>
    );
};

export default UserProfile;