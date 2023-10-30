
import './Booklisting.css'
import { useNavigate } from 'react-router-dom'


function Booklisting({title, author, genre, image, id,}) {
    const navigate = useNavigate();

    function BookClick() {
        // setClickedBookId(id)
        
        console.log('redirect attempt, url = ', `/books/${id}`)
        navigate('/books/' + id)
    }
    
    

    
    return (
        <a className='book-link' onClick={BookClick}>
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