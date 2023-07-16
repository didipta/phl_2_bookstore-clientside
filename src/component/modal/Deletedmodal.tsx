/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

const Deletedmodal = ({id}:any) => {

    const handleDelete = () => {
        console.log("deleted",id)
    }
    return (
        <div>
            {/* The button to open modal */}


        {/* Put this part before </body> tag */}
        <input type="checkbox" id={`delect-${id}`} className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">Delete Book!</h3>
            <p className="py-4"> Are You sure delete this book?</p>
            <div className="modal-action">
                <button className="btn bg-red-600 text-white" onClick={handleDelete}>Delete</button>
            <label htmlFor={`delect-${id}`} className="btn">Close!</label>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Deletedmodal;