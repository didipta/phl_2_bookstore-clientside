import Productcard from '../Product/Productcard'

const Topproduct = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl text-center font-bold">Top Product</h1>
            <div className="grid grid-cols-1 justify-center gap-8 p-4 lg:grid-cols-4 md:grid-cols-3">
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
            </div>
        </div>
    )
}

export default Topproduct
