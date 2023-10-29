import { useState, useEffect } from "react"
import { redirect } from "react-router-dom"
import './BookDetails.css'
function ClaimedBookDetail({clickedBookId, setClickedBookId}) {
    const [title, setTitle] = useState('')
    const [blurb, setBlurb] = useState('')
    const [pageCount, setPageCount] = useState('')
    const [year, setYear] = useState('')
    const [imgsrc, setImgSrc] = useState(null)
    const [genre, setGenre] = useState('')
    // reviews
    const [reviewList, setReviewList] = useState([])
    const [reviewAverage, setReviewAverage] = useState(0)
    const [reviewCount, setReviewCount] = useState(0)
    

    useEffect(function () {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + clickedBookId)
            .then(function (res) {
                return res.json()
            })
            .then(function (bookData) {
                // usual fetch setting state stuff
                setTitle(bookData.data.title)
                setBlurb(bookData.data.blurb)
                setPageCount(bookData.data.page_count)
                setYear(bookData.data.year)
                setImgSrc(bookData.data.image)
                setGenre(bookData.data.genre.name)
                setReviewList(bookData.data.reviews)
                
            
            
                // get average of book reviews
                let total = 0;
                let review_count = 0;
                reviewList.forEach(function (review) {
                    total += parseInt(review.rating)
                    review_count ++
                    
                })
                let review_average = total / review_count
                    setReviewAverage(Math.round(review_average))
                    setReviewCount(review_count)
                
                
                
            })
    }, [clickedBookId])
    // problem with function so this is a bandaid to make the review average display
    setTimeout(function() {
        let total = 0;
                let review_count = 0;
                
                reviewList.forEach(function (review) {
                    total += parseInt(review.rating)
                    review_count ++
                    
                })
                let review_average = total / review_count
                    setReviewAverage(Math.round(review_average))
                    setReviewCount(review_count)
    }, 500)

    function detailExit() {
        console.log('redirected')
        // return redirect('/')
        

    }
    

    return (
        // 2 row flex
        <div className="book-detail-wrapper">
            {/* image for left column */}
            <div>
            <img src={imgsrc && imgsrc}/>
            </div>
            {/* flex column for book info */}
            <div className='book-detail-text'>
                <h3>{title}</h3>
                <p>{pageCount}</p>
                <p>{genre}</p>
                <p>{reviewCount} reviews - {reviewAverage}/5 stars</p>
                <p>{blurb}</p>
                <p onClick={detailExit}>CLICK TO EXIT</p>
            </div>
        </div>
    )
}
export default ClaimedBookDetail