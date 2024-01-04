import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllAuthors = () => {
    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data)) 
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(() => {
                axios.get('http://localhost:8000/api/authors')
                    .then(res => setAuthors(res.data))  
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Link to='/authors/new'>Create author</Link>
            <table>
                <thead>
                    <tr> 
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors && (authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                                <button onClick={() => deleteAuthor(author._id)}>Delete</button> {/* Fix: Pass function reference */}
                            </td>
                        </tr>
                    )))}
                </tbody>
            </table>
        </div>
    );
};

export default AllAuthors;
