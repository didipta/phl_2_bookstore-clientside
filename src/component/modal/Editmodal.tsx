/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react';

const Editmodal = ({id,data}:any) => {
    const handeledit = () => {
        console.log("edit",id)
    }
    return (
        <div>
        {/* The button to open modal */}


    {/* Put this part before </body> tag */}
    <input type="checkbox" id={`edit-${id}`} className="modal-toggle" />
    <div className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Book!</h3>
        <p className="py-4"> Are You sure delete this book?</p>
        <div className="modal-action">
            <button className="btn bg-red-600 text-white" onClick={handeledit}>Update</button>
        <label htmlFor={`edit-${id}`} className="btn">Close!</label>
        </div>
    </div>
    </div>
    </div>
    );
};

export default Editmodal;