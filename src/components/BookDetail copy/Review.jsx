function Review({name, rating, review}){
    return (
        <div className='review-wrapper'>
            <p>review by: {name ? name : 'No Name Provided'}</p>
            <p>rating: {rating ? rating : 'No Rating Provided'}</p>
            <p>review: {review ? review : 'No Review Provided'}</p>
            <p></p>
        </div>
    )
}
export default Review