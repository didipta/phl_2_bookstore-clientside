/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { Link } from 'react-router-dom'

/* eslint-disable @typescript-eslint/no-unused-vars */
const Productcard = ({ item }: any) => {
    return (
        <div>
            <Link
                to={`/book/details/${item._id}`}
                className="card bg-base-100 shadow-sm"
            >
                <figure>
                    <img src={item?.image} alt="Shoes" className=" w-40 h-40" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title custorm-name2">{item?.Title}</h2>
                    <samp className="badge badge-secondary">NEW</samp>
                    <p className="custorm-name mb-2">Author:{item?.Author}</p>
                    <p className="custorm-name mb-2">Genre:{item?.Genre}</p>
                    <p className="custorm-name mb-2">
                        Publication Date:
                        {new Date(
                            item?.Publication_Date || Date.now()
                        ).toLocaleDateString()}
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default Productcard
