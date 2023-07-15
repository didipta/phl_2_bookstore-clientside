/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useNewbookQuery } from '../../redux/features/book/bookApi'
import Banner from './Banner'
import Topproduct from './Topproduct'

const Home = () => {
    const { data, isLoading, error } = useNewbookQuery(undefined)

    return (
        <div>
            <Banner />
            {!isLoading ? (
                <Topproduct data={data.data} />
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Home
