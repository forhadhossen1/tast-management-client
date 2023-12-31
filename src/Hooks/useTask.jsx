import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();

    const {isLoading, data: allTask = [], refetch } = useQuery({
        queryKey: ['allTask', [user?.email]], // Wrap user?.email in an array
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-Task?email=${user?.email}`);
            console.log(res);
            return res.data;
        },
    });
    return [isLoading,allTask, refetch ]
};

export default useTask;