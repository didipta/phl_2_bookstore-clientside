/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { useParams } from 'react-router-dom'
import {
    useGetsinglebookQuery,
    useSetreviewMutation,
} from '../../redux/features/book/bookApi'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Deletedmodal from '../modal/Deletedmodal'
import Editmodal from '../modal/Editmodal'
import { useSelector } from 'react-redux'
import {
    addToWishlist,
    removeFromWishlist,
} from '../../redux/features/book/wishlist'
import { markCurrentlyReading } from '../../redux/features/book/readlist'

const Book = () => {
    const [review, setReview] = useState('')
    const { id } = useParams()
    const { data, isLoading, error } = useGetsinglebookQuery(
        (id as string) || ' '
    )
    const [setreview] = useSetreviewMutation()
    const { currentUser } = useAppSelector((state) => state.currentuser)

    const dispatch = useAppDispatch()
    const isInWishlist = useSelector((state) =>
        state.wishlist.some((item) => item.id === id)
    )

    const handleWishlistToggle = () => {
        if (isInWishlist) {
            dispatch(removeFromWishlist(id))
        } else {
            dispatch(addToWishlist({ id, data }))
            toast.success('Added to wishlist')
        }
    }

    const handleReview = () => {
        const data = {
            Review_Text: review,
            Reviewer: currentUser?.user?._id,
            Review_Date: new Date(),
        }
        if (!isLoading && data.Review_Text !== '') {
            setreview({ data, id })
                .then((res: any) => {
                    toast.success('Review added')
                    setReview('')
                })
                .catch((err) => {
                    toast.error(err.message)
                })
        }
    }
    const status  = useSelector((state) =>
    state.readlist.find((b) => b.id === id)
  );

  const handleMarkCurrentlyReading = () => {
    dispatch(markCurrentlyReading({ bookId: id }));
    toast.success("Added to currently reading");
  };
    return (
        <div>
            {!isLoading ? (
                <div className="card shadow-sm mx-auto my-10">
                    <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-5 p-5">
                        <figure>
                            <img
                                src={data.data.image}
                                alt=""
                                className=" w-96 border"
                            />
                        </figure>
                        <div className="">
                            <h2 className="card-title text-2xl mb-2">
                                {data.data.Title}
                            </h2>
                            <p className=" text-base my-2">
                                Author: {data.data.Author}
                            </p>
                            <p className="text-base my-2">
                                Genre:{data.data.Genre}
                            </p>
                            <p className="text-base my-2">
                                {' '}
                                Publication Date:
                                {new Date(
                                    data?.data?.Publication_Date || Date.now()
                                ).toLocaleDateString()}
                            </p>

                            <button className="btn btn-sm text-white  bg-pink-600 border-none " onClick={handleMarkCurrentlyReading}>
                            Read
                            </button>
                            <button
                                className="btn btn-sm text-white  bg-pink-600 border-none mx-2"
                                onClick={handleWishlistToggle}
                            >
                                wishlist
                            </button>
                            {currentUser?.user?._id ===
                                data.data.postby._id && (
                                <>
                                    <label
                                        htmlFor={`edit-${id}`}
                                        className="btn btn-sm text-white bg-blue-600 border-none mx-2"
                                    >
                                        Edit
                                    </label>
                                    <label
                                        htmlFor={`delect-${id}`}
                                        className="btn btn-sm text-white bg-yellow-600  border-none"
                                    >
                                        Delete
                                    </label>
                                </>
                            )}
                        </div>
                    </div>

                    {currentUser !== null && (
                        <div>
                            <h2 className="text-2xl font-bold text-center">
                                Reviews
                            </h2>
                            <label className="flex p-5">
                                <input
                                    type="text"
                                    placeholder="Write a review"
                                    className="w-full border-pink-600 border-2 p-2 outline-none"
                                    value={review}
                                    onChange={(e) => setReview(e.target.value)}
                                />
                                <button
                                    className="w-20 bg-pink-600 text-white font-bold py-2 px-5"
                                    onClick={handleReview}
                                >
                                    Add
                                </button>
                            </label>

                            <div className="shadow-lg py-2 px-5 flex flex-col gap-3">
                                {data.data.Reviews.map((item: any) => (
                                    <>
                                        <div className="card shadow-sm bg-slate-200 px-5 py-2">
                                            <h2 className="card-title text-base font-bold">
                                                {item?.Reviewer?.Name}
                                            </h2>
                                            <p className="text-base mx-2 my-1">
                                                {item.Review_Text}
                                            </p>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </div>
                    )}
                    <Deletedmodal id={id} />
                    <Editmodal id={id} data={data.data} />
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}

export default Book
