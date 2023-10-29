
import './Booklisting.css'


function Booklisting({title, author, genre, image, id, setClickedBookId}) {
    

    function BookClick() {
        setClickedBookId(id)
    }
    
    

    
    return (
        <a onClick={BookClick}>
        <div className="book-wrapper">
            
            {image ? (
                <img src={image}/>
                ) : (
                    <p>no image available</p>
                    )}
            


            <p className="title">{title}</p>
            <p>{author}</p>
            <p>{genre}</p>
        </div>
        </a>
    )
}
export default Booklisting