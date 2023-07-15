/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Productcard from '../Product/Productcard'

const Topproduct = ({ data }: any) => {
    return (
        <div className="my-10">
            <h1 className="text-3xl text-center font-bold">Top Product</h1>
            <div className="grid grid-cols-1 justify-center gap-8 p-4 lg:grid-cols-4 md:grid-cols-3">
                {data?.map((item: any) => (
                    <Productcard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default Topproduct
