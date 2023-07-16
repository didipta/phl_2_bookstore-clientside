/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useRef } from 'react';
import { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useUpdatebookMutation } from '../../redux/features/book/bookApi';
import { toast } from 'react-hot-toast';
type Inputs = {
    Title: string
    Author: string
    Genre: string
    Publication_Date: Date
    postby: string
    image: string
    Reviews: []
}
const Editmodal = ({id,data}:any) => {
    const ref=useRef();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Inputs>();

    useEffect(() => {
        reset(data)
    },[data])
    const [updatebook] = useUpdatebookMutation()
    const onSubmit = (data:Inputs) => {
        updatebook({id,data}).then((res:any)=>{
            toast.success("Update success")
            ref.current.click();
        }
        ).
        catch((err)=>{
            toast.error(err.message)
        }
        )

    }
    return (
        <div>
        {/* The button to open modal */}


    {/* Put this part before </body> tag */}
    <input type="checkbox" id={`edit-${id}`} className="modal-toggle" />
    <div className="modal">
    <div className="modal-box">
    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="card-title">Add Book</h2>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Title', { required: true })}
                    />
                    {errors.Title && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Author Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Author', { required: true })}
                    />
                    {errors.Author && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Genre Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('Genre', { required: true })}
                    />
                    {errors.Genre && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Publication Date</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"

                        {...register('Publication_Date', { required: true })}
                     
                        />
                
                    {errors.Publication_Date && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">image</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        className="input input-bordered"
                        {...register('image', { required: true })}
                    />
                    {errors.image && (
                        <span className="text-xs text-red-500">
                            This field is required
                        </span>
                    )}
                </div>

                <div className="form-control mt-6">
                    <input
                        type="submit"
                        value="Save"
                        className="btn btn-neutral font-bold"
                        
                    />
                </div>
            </form>
        <div className="modal-action">
        <label htmlFor={`edit-${id}`} ref={ref} className="btn">Close!</label>
        </div>
    </div>
    </div>
    </div>
    );
};

export default Editmodal;