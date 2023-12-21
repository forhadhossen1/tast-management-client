import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const {data: allTask =[], refetch} = useQuery({
        queryKey : ['allTask', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/allTask?email=${user?.email}`)
            console.log(res);
            return res.data;
        }
    })
    return [refetch, allTask]
};

export default useTask;