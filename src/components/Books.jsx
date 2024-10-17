import K from "../api"

import React from 'react'

const Books = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Book List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Books.map((book) => (
                    <div key={book.id} className="border p-4 rounded-lg shadow-lg">
                        <h2 className="text-xl font-semibold">{book.title}</h2>
                        <p className="text-gray-600">{book.author}</p>
                        <p className="text-gray-500">{book.genre}</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Books