

const Banner = () => {
    return (
        <div className="m-0 lg:mx-5 md:mx-3">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img
                        src="https://wowslider.com/sliders/demo-76/data1/images/bookshelf349946_1280.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img
                        src="https://www.shutterstock.com/image-photo/open-book-on-table-education-260nw-1813887353.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img
                        src="https://t4.ftcdn.net/jpg/05/44/54/69/360_F_544546950_Xi80k2ppry7rqKQQYsSNVmuaAILUiki9.jpg"
                        className="w-full"
                    />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img
                        src="https://static.vecteezy.com/system/resources/thumbnails/006/296/747/small/bookshelf-with-books-biography-adventure-novel-poem-fantasy-love-story-detective-art-romance-banner-for-library-book-store-genre-of-literature-illustration-in-flat-style-vector.jpg"
                        className="w-full"
                    />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">
                    1
                </a>
                <a href="#item2" className="btn btn-xs">
                    2
                </a>
                <a href="#item3" className="btn btn-xs">
                    3
                </a>
                <a href="#item4" className="btn btn-xs">
                    4
                </a>
            </div>
        </div>
    )
}

export default Banner
