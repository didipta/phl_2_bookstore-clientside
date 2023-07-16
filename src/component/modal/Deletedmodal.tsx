/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { useDeletebookMutation } from '../../redux/features/book/bookApi'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Deletedmodal = ({ id }: any) => {
    const [updatebook] = useDeletebookMutation()
    const navigate = useNavigate()

    const handleDelete = () => {
        updatebook(id)
            .then((res: any) => {
                toast.success('Delete success')
                navigate('/book')
            })
            .catch((err) => {
                console.log(err.message)
            })
    }
    return (
        <div>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input
                type="checkbox"
                id={`delect-${id}`}
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Delete Book!</h3>
                    <p className="py-4"> Are You sure delete this book?</p>
                    <div className="modal-action">
                        <button
                            className="btn bg-red-600 text-white"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                        <label htmlFor={`delect-${id}`} className="btn">
                            Close!
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deletedmodal
