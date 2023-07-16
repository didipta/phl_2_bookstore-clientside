/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useGetbookQuery } from '../../redux/features/book/bookApi'
import Productcard from '../Product/Productcard'
import { PaginationControl } from 'react-bootstrap-pagination-control'
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useAppSelector } from '../../redux/hook'
import { Link } from 'react-router-dom'
const Allbooks = () => {
    const [page, setPage] = useState(1)
    const [search, setSearchs] = useState('')
    const [genre, setGenre] = useState('')
    const [publication, setPublication] = useState('')

    const datas={
        page,
        search,
        genre,
        publication
    }

    const handlePageChange = ({ selected }: any) => {
        setPage(selected + 1)
    }
    const { data, isLoading, error } = useGetbookQuery(datas)
    const { currentUser } = useAppSelector((state) => state.currentuser)

    return (
        <div>
            <div className=" flex justify-between items-center p-4">
                <h1 className="text-3xl text-center font-bold">All Books</h1>
                {currentUser && (
                    <Link to="/book/addbook" className="btn btn-sm btn-primary">
                        Add Book
                    </Link>
                )}
            </div>
            <div className="flex justify-center items-center">
                <input 
                type="text"
                placeholder="Search"
                className="input input-bordered w-1/2"
                onChange={(e)=>setSearchs(e.target.value)}
                />
            </div>
            <div className="flex justify-center items-center gap-3">
               <label>
                     <p
                     className='text-2xl font-bold mb-1'
                     >genre </p>
                     <input type="text" placeholder="Enter genre" className="input input-bordered w-96"
                        onChange={(e)=>setGenre(e.target.value)}
                     
                     />
               </label>
               <label>
                     <p
                     className='text-2xl font-bold mb-1'
                     >publication year </p>
                     <input type="date" placeholder="Enter genre" className="input input-bordered w-96"
                        onChange={(e)=>setPublication(e.target.value)}
                     
                     />
               </label>
            </div>

            {!isLoading ? (
                <div className="my-5">
                    <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-4 p-4">
                        {data?.data.map((item: any) => (
                            <Productcard key={item.id} item={item} />
                        ))}
                    </div>

                    <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'Next'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={data?.meta?.total / data?.meta?.limit}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageChange}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default Allbooks
