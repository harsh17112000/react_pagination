import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Pagination from 'react-bootstrap/Pagination'

const Paginationdata = () => {


    const [store, setStore] = useState([]);
    // console.log(store);

    const [num, setNum] = useState(10);

    const [pagemore, setPagemore] = useState(1)

    const final = num * pagemore


    const changedata = store.slice(final - num, final);
    console.log(changedata);


    const more = (e) => {
        // console.log(e);
        setPagemore(e);
    }

    const getdata = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await res.json();
        // console.log(data);
        setStore(data)
    }

    const setval = (e) => {
        // console.log(e.target.value);
        setNum(e.target.value)
        setPagemore(1)
    }


    useEffect(() => {
        getdata();
    }, [pagemore])

    return (
        <div className='congainer mt-5'>

            <DropdownButton title="filter with number" className='mb-3'>
                <select name="" id="" onChange={setval}>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                </select>
            </DropdownButton>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        changedata.map((elem, key) => {
                            return (
                                <>
                                    <tr>
                                        <td>{elem.id}</td>
                                        <td>{elem.title}</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                </>
                            )
                        })
                    }


                </tbody>
            </Table>
            <Pagination>
                <Pagination.Item onClick={() => more(1)}>{1}</Pagination.Item>
                <Pagination.Item onClick={() => more(2)}>{2}</Pagination.Item>
                <Pagination.Item onClick={() => more(3)}>{3}</Pagination.Item>
                <Pagination.Item active onClick={() => more(4)}>{4}</Pagination.Item>
                <Pagination.Item onClick={() => more(5)}>{5}</Pagination.Item>
                <Pagination.Item disabled onClick={() => more(6)}>{6}</Pagination.Item>
                <Pagination.Item onClick={() => more(7)}>{7}</Pagination.Item>
            </Pagination>
        </div>
    )
}

export default Paginationdata