/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from 'react-router-dom'
import { useGetsinglebookQuery } from '../../redux/features/book/bookApi'
import { useAppSelector } from '../../redux/hook'

const Book = () => {
    const { id } = useParams()
    const { data, isLoading, error } = useGetsinglebookQuery(id as string|| " ")
    const { currentUser } = useAppSelector((state) => state.currentuser)
    return <div>
        {
            !isLoading ? 
            <div className="card shadow-sm mx-auto my-10">
                <div className="flex justify-center gap-5 p-5">
                    <figure>
                        <img src={data.data.image} alt="" />
                    </figure>
                    <div>
                    <h2 className="card-title text-2xl mb-2">{data.data.Title}</h2>
                    <p className=" text-base my-2">Author: {data.data.Author}</p>
                    <p className="text-base my-2">Genre:{data.data.Genre}</p>
                    <p className="text-base my-2"> Publication Date:{new Date(
                            data?.data?.Publication_Date || Date.now()
                        ).toLocaleDateString()}</p>

                        <button className="btn btn-sm text-white  bg-pink-600 border-none ">Watch</button>
                        {
                            currentUser?.user?._id === data.data.postby._id &&<>
                             <button className="btn btn-sm text-white bg-blue-600 border-none mx-2">Edit</button>
                        <button className="btn btn-sm text-white bg-yellow-600  border-none">Delete</button>
                            </>
                        }
                       
                    </div>
                    
                </div>
                </div>
                :
                <h1>Loading...</h1>

        }
    </div>
}

export default Book
