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
const Allbooks = () => {
    const [page, setPage] = useState(1)

    const handlePageChange = ({ selected }: any) => {
        setPage(selected + 1)
    }
    const { data, isLoading, error } = useGetbookQuery(page)

    return (
        <div>
            <h1 className="text-3xl text-center font-bold">All Books</h1>
            {!isLoading ? (
                <div className="my-5">
                    <div className="grid grid-cols-4 gap-4 p-4">
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
