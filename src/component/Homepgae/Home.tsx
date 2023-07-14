/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Banner from './Banner';
import Topproduct from './Topproduct';
import { useGetUserQuery } from '../../redux/features/user/userSlice';

const Home = () => {

    const {data, isLoading, error }= useGetUserQuery(undefined);

    if(!isLoading)
    {
        console.log(data);
    }
  
    return (
        <div>
            <Banner/>
            <Topproduct/>
        </div>
    );
};

export default Home;