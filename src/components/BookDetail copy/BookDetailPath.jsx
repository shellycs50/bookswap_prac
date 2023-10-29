import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import Review from "./Review"
import './BookDetails.css'
function BookDetailPath() {
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
    const [claimed, setClaimed] = useState(null)
    const {id} = useParams()
    
    const navigate = useNavigate()

    useEffect(function () {
        

        
        fetch('https://book-swap-api.dev.io-academy.uk/api/books/' + id)
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
                setClaimed(bookData.data.claimed_by_name)
                
                
            
            
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
    }, [])
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
        navigate('/');
        // return redirect('/')
        

    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [returnEmail, setReturnEmail] = useState('')
    const [reviewname, setReviewName] = useState('')
    const [reviewText, setReviewText] = useState('Review')

    // ** CLAIM BOOK FORM SUBMIT
    function claimAttempt(event) {
        // submit claim request for relevant book
        console.log('submitted')
        event.preventDefault()
        console.log(event.target.name.value)
        let submitted_email = event.target.email.value
        let submitted_name = event.target.name.value

        fetch('https://book-swap-api.dev.io-academy.uk/api/books/claim/' + id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: submitted_name,
                email: submitted_email,
            }),
        })
        .then((res) => {
            if (res.ok) {
                console.log('Claim request submitted successfully.');
                // Successfully Claimed
            } else {
                console.error('Failed to submit claim request.');
                // Error in Claiming
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // Some other error. issue apology.
            console.log('something else went wrong with claiming')
        });
        

    }

        // ** RETURN BOOK FORM SUBMIT
    function returnAttempt(event) {
        console.log('tried to return a book')
        event.preventDefault();

        let submitted_email = event.target.returnemail.value

        fetch('https://book-swap-api.dev.io-academy.uk/api/books/return/' + id, {
            method: 'PUT',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: submitted_email,
            }),
        })
        .then((res) => {
            if (res.ok) {
                console.log('Return request submitted successfully.');
                // Successfully Claimed
            } else {
                console.error('Failed to submit return request.');
                // Error in Claiming
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // Some other error. issue apology.
            console.log('something else went wrong with returning')
        });
    }
    
    // ** REVIEW BOOK FORM SUBMIT
    function reviewSubmit(event) {
        event.preventDefault()
        console.log('tried to submit a review')
        console.log(`REVIEW DETAILS: name: ${event.target.reviewname.value}, rating: ${parseInt(event.target.rating.value)}, review: ${event.target.review.value}, book_id: ${id} `)
        fetch('https://book-swap-api.dev.io-academy.uk/api/reviews', {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'name': event.target.reviewname.value,
                'rating': parseInt(event.target.rating.value),
                'review': event.target.review.value,
                'book_id': id,
            }),
        })
        .then((res) => {
            if (res.ok) {
                console.log('Review submitted successfully.');
                // Successfully Claimed 
            } else {
                console.error('Failed to submit Review.');
                // Error in Claiming -> add functionality for handling like if (event.target.reviewname.value == '' etc) render the book page again WITH an element that informs the user of their mistake
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // Some other error. issue apology.
            console.log('something else went wrong with Reviewing')
        });


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
                
                
                {/* if book is claimed render return book form, else render claim book form */}

                {claimed ? (
                    <>
                    <h3>Return this Book</h3>
                    <p> Enter {claimed}'s Email Address:</p>
                    <form className='claim-book' onSubmit={returnAttempt}>
        
                    <label htmlFor="returnemail" value={returnEmail} onChange={setReturnEmail}>Email:</label>
                    <input type="email" id='returnemail'></input>
                    <input type='submit' value='Return'></input>

                </form>
                <p onClick={detailExit}>CLICK TO EXIT</p>
                </>
                ) : (
                    <>
                <h3>Claim this book:</h3>
                <form className='claim-book' onSubmit={claimAttempt}>
                    <label htmlFor="name" value={name} onChange={setName}>Name:</label>
                    <input type="text" id='name'></input>
                    <label htmlFor="email" value={email} onChange={setEmail}>Email:</label>
                    <input type="email" id='email'></input>
                    <input type='submit' value='Claim'></input>

                </form>
                
                </>
                )}

                {/* end of conditional claim or return form display */}
                <p>{blurb}</p>
                {/* now for review writing */}
                <div className='reviews'>
                <h3>Reviews</h3>
                    <form onSubmit={reviewSubmit}>
                    <label htmlFor="reviewname" value={reviewname} onChange={setReviewName}>Name:</label>
                    <input type="text" id='reviewname'></input>
                    <label htmlFor="review" value={reviewText} onChange={setReviewText}>Review:</label>
                    <input type='text' id='review'></input>
                    <label htmlFor='rating'>Rating:</label>

                    <select name="rating" id="rating">
                    <option value='1'>1 Star</option>
                    <option value='2'>2 Stars</option>
                    <option value='3'>3 Stars</option>
                    <option value='4'>4 Stars</option>
                    <option value='5'>5 Stars</option>
                    </select>

                    <input type='submit' value='Review'></input>
                    </form>

                    {reviewList.length > 0 ? (
                        <>
                        {reviewList.map(review => 
                        <Review key={review.id} name={review.name} rating={review.rating} review={review.review} />
                            // <div className='review-wrapper'>
                            //     <p>review by: {review.name ? review.name : 'No Name Provided'}</p>
                            //     <p>rating: {review.rating ? review.rating : 'No Rating Provided'}</p>
                            //     <p>review: {review.review ? review.review : 'No Review Provided'}</p>
                            //     <p></p>
                            // </div>
                            )}
                        </>

                    ) : (
                        <>
                        <p>No Reviews Yet!</p>
                        </>
                    )}

                    <p onClick={detailExit}>Return Home</p>
                </div>
                
            </div>
            
        </div>
    )
}
export default BookDetailPath