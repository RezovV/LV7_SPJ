import axios from "axios";
import { useState, useEffect } from "react";


const readURL = "http://localhost:8080/LV7_SPJ/read.php";


const Ucitaj = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get(readURL).then((response) => {
            setPost(response.data);
            console.log(response.data);
        })
    }, [])
    
    if (!post) return null;
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>R. br</th>
                        <th>Naziv</th>
                        <th>Proizvodac</th>
                        <th>Model</th>
                        <th>Cijena</th>
                        <th>Količina</th>
                    </tr>
                </thead>
                <tbody>
                    {post.map((artikl) => {
                        return(
                        <tr key={artikl.id}>
                            <td>{artikl.id}</td>
                            <td>{artikl.naziv}</td>
                            <td>{artikl.proizvodac}</td>
                            <td>{artikl.model}</td>
                            <td>{artikl.cijena}</td>
                            <td>{artikl.kolicina}</td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
    )
}

export default Ucitaj