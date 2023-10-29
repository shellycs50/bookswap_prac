import { useState, useEffect } from "react"
import Booklisting from "../Home/Booklisting"
function ClaimedBooks() {


    //  const data_init = [{"id":1,"title":"Voluptas est qui.","author":"Rory Smith","image":"https://via.placeholder.com//600x840.png//00ff44?text=Voluptas+est+qui.","genre":{"id":1,"name":"Thriller"}},{"id":2,"title":"Fugiat deleniti.","author":"Aditya Zieme","image":"https:\/\/via.placeholder.com\/600x840.png\/0022dd?text=Fugiat+deleniti.","genre":{"id":1,"name":"Thriller"}},{"id":3,"title":"Recusandae voluptas.","author":"Chelsea Lynch","image":"https:\/\/via.placeholder.com\/600x840.png\/00ee11?text=Recusandae+voluptas.","genre":{"id":1,"name":"Thriller"}},{"id":4,"title":"Sint autem quaerat.","author":"Rowena Prosacco V","image":"https:\/\/via.placeholder.com\/600x840.png\/002222?text=Sint+autem+quaerat.","genre":{"id":1,"name":"Thriller"}},{"id":5,"title":"Voluptatem enim.","author":"Dr. Zander Hagenes","image":"https:\/\/via.placeholder.com\/600x840.png\/00ff00?text=Voluptatem+enim.","genre":{"id":1,"name":"Thriller"}},{"id":6,"title":"Est eum sapiente.","author":"Dr. Dennis Funk Jr.","image":"https:\/\/via.placeholder.com\/600x840.png\/00ffff?text=Est+eum+sapiente.","genre":{"id":1,"name":"Thriller"}},{"id":7,"title":"Incidunt ab amet.","author":"Lura Smith","image":"https:\/\/via.placeholder.com\/600x840.png\/00ffff?text=Incidunt+ab+amet.","genre":{"id":1,"name":"Thriller"}},{"id":8,"title":"Quidem esse sit.","author":"Brandt Marvin MD","image":"https:\/\/via.placeholder.com\/600x840.png\/008833?text=Quidem+esse+sit.","genre":{"id":1,"name":"Thriller"}},{"id":9,"title":"Saepe eveniet.","author":"Jaylon Price","image":"https:\/\/via.placeholder.com\/600x840.png\/00aa77?text=Saepe+eveniet.","genre":{"id":1,"name":"Thriller"}},{"id":10,"title":"Cumque deleniti.","author":"Ms. Tatyana Mann","image":"https:\/\/via.placeholder.com\/600x840.png\/00ee99?text=Cumque+deleniti.","genre":{"id":1,"name":"Thriller"}},{"id":11,"title":"Consequuntur.","author":"Charity Beahan","image":"https:\/\/via.placeholder.com\/600x840.png\/004422?text=Consequuntur.","genre":{"id":2,"name":"Romance"}},{"id":12,"title":"Quaerat ut saepe.","author":"Prof. Brad Murray PhD","image":"https:\/\/via.placeholder.com\/600x840.png\/004422?text=Quaerat+ut+saepe.","genre":{"id":2,"name":"Romance"}},{"id":13,"title":"Eaque hic.","author":"Kaley Wisoky DVM","image":"https:\/\/via.placeholder.com\/600x840.png\/005588?text=Eaque+hic.","genre":{"id":2,"name":"Romance"}},{"id":14,"title":"Voluptatem eveniet.","author":"Fritz Heller V","image":"https:\/\/via.placeholder.com\/600x840.png\/003344?text=Voluptatem+eveniet.","genre":{"id":2,"name":"Romance"}},{"id":15,"title":"Sed nulla voluptas.","author":"Mr. Eusebio Lehner","image":"https:\/\/via.placeholder.com\/600x840.png\/007799?text=Sed+nulla+voluptas.","genre":{"id":2,"name":"Romance"}},{"id":16,"title":"Eius in ut totam ea.","author":"Theresa Ondricka","image":"https:\/\/via.placeholder.com\/600x840.png\/0055ff?text=Eius+in+ut+totam+ea.","genre":{"id":2,"name":"Romance"}},{"id":17,"title":"Quia quia odio odio.","author":"Abner Huel","image":"https:\/\/via.placeholder.com\/600x840.png\/00dd77?text=Quia+quia+odio+odio.","genre":{"id":2,"name":"Romance"}},{"id":18,"title":"Qui nihil ut velit.","author":"Josefa Hahn III","image":"https:\/\/via.placeholder.com\/600x840.png\/00ff11?text=Qui+nihil+ut+velit.","genre":{"id":2,"name":"Romance"}},{"id":19,"title":"Eaque accusantium.","author":"Prof. Sadie Lind Jr.","image":"https:\/\/via.placeholder.com\/600x840.png\/002222?text=Eaque+accusantium.","genre":{"id":2,"name":"Romance"}},{"id":20,"title":"Quaerat nisi.","author":"Crystel D'Amore","image":"https:\/\/via.placeholder.com\/600x840.png\/00cc99?text=Quaerat+nisi.","genre":{"id":2,"name":"Romance"}},{"id":21,"title":"Quia sit.","author":"Raymundo Simonis","image":"https:\/\/via.placeholder.com\/600x840.png\/00cc33?text=Quia+sit.","genre":{"id":3,"name":"Historical"}},{"id":22,"title":"Et iste nisi.","author":"Bryon Howell","image":"https:\/\/via.placeholder.com\/600x840.png\/006600?text=Et+iste+nisi.","genre":{"id":3,"name":"Historical"}},{"id":23,"title":"Sint quaerat et ad.","author":"Iva Murphy","image":"https:\/\/via.placeholder.com\/600x840.png\/003366?text=Sint+quaerat+et+ad.","genre":{"id":3,"name":"Historical"}},{"id":24,"title":"Optio veniam.","author":"Mr. Adolphus Wilkinson MD","image":"https:\/\/via.placeholder.com\/600x840.png\/00ffcc?text=Optio+veniam.","genre":{"id":3,"name":"Historical"}},{"id":25,"title":"Qui quasi beatae.","author":"Prof. Antonia Hansen","image":"https:\/\/via.placeholder.com\/600x840.png\/00aa66?text=Qui+quasi+beatae.","genre":{"id":3,"name":"Historical"}},{"id":26,"title":"Maiores magnam sint.","author":"Derrick Smitham III","image":"https:\/\/via.placeholder.com\/600x840.png\/000044?text=Maiores+magnam+sint.","genre":{"id":3,"name":"Historical"}},{"id":27,"title":"Optio aut qui.","author":"Jordy Reichel Jr.","image":"https:\/\/via.placeholder.com\/600x840.png\/0000bb?text=Optio+aut+qui.","genre":{"id":3,"name":"Historical"}},{"id":28,"title":"Magni qui illum.","author":"Shanna Gaylord","image":"https:\/\/via.placeholder.com\/600x840.png\/007755?text=Magni+qui+illum.","genre":{"id":3,"name":"Historical"}},{"id":29,"title":"Placeat nihil at et.","author":"Schuyler Bergstrom","image":"https:\/\/via.placeholder.com\/600x840.png\/00ffee?text=Placeat+nihil+at+et.","genre":{"id":3,"name":"Historical"}},{"id":30,"title":"Rerum minus.","author":"Mr. Gunnar Johnston","image":"https:\/\/via.placeholder.com\/600x840.png\/00aaaa?text=Rerum+minus.","genre":{"id":3,"name":"Historical"}},{"id":31,"title":"Ullam minus quis.","author":"Mr. Elmore Dooley","image":"https:\/\/via.placeholder.com\/600x840.png\/00ddee?text=Ullam+minus+quis.","genre":{"id":4,"name":"Non-fiction"}},{"id":32,"title":"Sint dignissimos.","author":"Mrs. Nova Schoen III","image":"https:\/\/via.placeholder.com\/600x840.png\/00aa66?text=Sint+dignissimos.","genre":{"id":4,"name":"Non-fiction"}},{"id":33,"title":"Nulla ea ab eum.","author":"Maeve Barton","image":"https:\/\/via.placeholder.com\/600x840.png\/009977?text=Nulla+ea+ab+eum.","genre":{"id":4,"name":"Non-fiction"}},{"id":34,"title":"Unde voluptas est.","author":"Kaya Durgan","image":"https:\/\/via.placeholder.com\/600x840.png\/00bb55?text=Unde+voluptas+est.","genre":{"id":4,"name":"Non-fiction"}},{"id":35,"title":"Officia sed at a.","author":"Mariano Watsica","image":"https:\/\/via.placeholder.com\/600x840.png\/000066?text=Officia+sed+at+a.","genre":{"id":4,"name":"Non-fiction"}},{"id":36,"title":"Dolorem inventore.","author":"Ms. Oleta Ullrich DVM","image":"https:\/\/via.placeholder.com\/600x840.png\/00bb77?text=Dolorem+inventore.","genre":{"id":4,"name":"Non-fiction"}},{"id":37,"title":"Placeat qui quasi.","author":"Viva Pouros III","image":"https:\/\/via.placeholder.com\/600x840.png\/0055bb?text=Placeat+qui+quasi.","genre":{"id":4,"name":"Non-fiction"}},{"id":38,"title":"Dolores optio.","author":"Francis Mayert","image":"https:\/\/via.placeholder.com\/600x840.png\/0077ee?text=Dolores+optio.","genre":{"id":4,"name":"Non-fiction"}},{"id":39,"title":"Sunt sit laborum.","author":"Valentina Rath","image":"https:\/\/via.placeholder.com\/600x840.png\/00ffff?text=Sunt+sit+laborum.","genre":{"id":4,"name":"Non-fiction"}},{"id":40,"title":"Officia excepturi.","author":"Delilah Hansen","image":"https:\/\/via.placeholder.com\/600x840.png\/006600?text=Officia+excepturi.","genre":{"id":4,"name":"Non-fiction"}},{"id":45,"title":"io academy","author":"Fintan","image":null,"genre":{"id":2,"name":"Romance"}},{"id":46,"title":"io academy test","author":"Fintan","image":null,"genre":{"id":2,"name":"Romance"}},{"id":47,"title":"sdfgsdfgsdfgsdfgsdf","author":"sfdgsdfgssfdgsdfgs","image":"https:\/\/12321312321.com","genre":{"id":2,"name":"Romance"}},{"id":48,"title":"test","author":"test","image":null,"genre":{"id":1,"name":"Thriller"}},{"id":49,"title":"testing forms","author":"cuthbert","image":null,"genre":{"id":1,"name":"Thriller"}},{"id":50,"title":"The book of Cuthbert","author":"Cuthbert Cuthbertson","image":null,"genre":{"id":2,"name":"Romance"}},{"id":51,"title":"cuthbert: The Cuthening","author":"Cuthbert Cuthersson","image":null,"genre":{"id":1,"name":"Thriller"}}]

    



    const [BookData, setBookData] = useState([])

    useEffect(function() {
        fetch('https://book-swap-api.dev.io-academy.uk/api/books?&claimed=1')
            .then(function (res) {
                return res.json()
            })
            .then(function (book_json) {
                setBookData(book_json.data)
                console.log('new check: ', BookData)
                // BookData.forEach(function (item) {
                //     console.log(item)
                // })

            })
    }, [])

    
    return (
        <div>
            <p className='margin-me'>Claimed Books</p>
        <div className="all-books-wrapper">
        


        
        {/* {BookData.length > 0 && <Booklisting key={BookData[0].id} title={BookData[0].title} author={BookData[0].author} genre={BookData[0].genre.name} image={BookData[0].image} /> } */}

        {BookData.length > 0 && BookData.map(book => 
            <Booklisting key={book.id} title={book.title} author={book.author} genre={book.genre.name} image={book.image} />)} 
        
            {/* {BookData.forEach(function (book) {
                <Booklisting key={book.id} title={book.title} author={book.author} genre={book.genre} image={book.image} /> 
            })} */}
        </div>

        </div>
    )
}
export default ClaimedBooks