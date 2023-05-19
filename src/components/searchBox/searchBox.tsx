import React, { useEffect, useState } from "react";
import GetData from "../teachLoadTable/GetData";
import { teachloadChecked } from "../../Props/teachloadProbs";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBox() {

    const [contacts, setContacts] = useState();
    const [search, setSearch] = useState('');

    return (
        <div>
            <Container>
                <h1 className="text-center mt-4">Contact Keeper</h1>
                <Form>
                    <InputGroup className="my-3">

                        <Form.Control
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search contacts"
                        />
                    </InputGroup>
                </Form>

            </Container>
        </div>
    )
  }

export default SearchBox;

// import { useEffect, useState } from "react";
// import axios from "axios";

// function SearchBox() {
//     const [query, setQuery] = useState("");
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         const fetchData = async () => {
//             const res = await axios.get(`http://localhost:5000?q=${query}`);
//             setData(res.data);
//         };
//         if (query.length === 0 || query.length > 2) fetchData();
//     }, [query]);

//     return (
//         <div className="SearchBox">
//             <br/>
//             <br/>
//             <input className="SearchBox"
//                     placeholder="search"
//                     onChange={(e) => setQuery(e.target.value.toLowerCase)}
//             />
//         </div>
//     )
// }

// export default SearchBox;


// import React, { useState } from "react";

// function SearchBox() {

// }

// export default SearchBox;