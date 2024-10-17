import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import K from '../../api/books'

const BookListPage = () => {

    return (
        <div>
            <Link to="/add-new">Add new book bro!</Link>
            <div className="container mx-auto py-4">
                <h1 className="text-2xl font-bold mb-4">Book List</h1>
                {
                    K.BOOKS.map((book, index) => {
                        console.log(book);
                        return (
                            < div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                <div key={index} className="border p-4 rounded-lg shadow-lg ">
                                    <img src={book.img} alt="book-image" />
                                    <h2 className=" sm:text-5xl font-semibold">{book.title}</h2>
                                    <p className="text-gray-600 text-3xl">{book.author}</p>
                                    <p className="text-red-500 text-2xl">{book.genre}</p>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}
export default BookListPage