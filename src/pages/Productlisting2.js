import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { Button, Table, Tag } from 'antd'
import 'antd/dist/antd.css'
import '../App.css'
import { CloseOutlined, EditOutlined } from '@ant-design/icons'
import axios, { Axios } from 'axios'


function Productlisting2() {

    const [newPro, setnewPro] = useState([])
    const [q, setQ] = useState("")
    const [page, setPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [selectedRows, setselectedRows] = useState('')
    let history = useHistory()


    const URL = 'http://localhost:60665/api/Product'

    //Get data from api
    const getData = async () => {
        const response = await axios.get(URL)
        setnewPro(response.data)

    }

    useEffect(() => {
        getData()
    }, [])

    //define field for table
    const cols = [
        {
            dataIndex: "productid", title: 'ID',
            sorter: (record1, record2) => {
                return record1.productid
                    > record2.productid
            }
        },
        {
            dataIndex: "productname", title: 'Name',
            sorter: (record1, record2) => {
                return record1.productname
                    > record2.productname
            }
        },
        {
            dataIndex: "productdesc", title: 'Description',
            sorter: (record1, record2) => {
                return record1.productdesc > record2.productdesc
            }
        },
        {
            dataIndex: "productstatus", title: 'Status',
            render: (tag) => {
                const color = tag.includes('Active') ? 'Green'
                    : tag.includes('Inactive') ? "Red" : 'White'
                return <Tag color={color} key={tag}>{tag}</Tag>
            },
            sorter: (record1, record2) => {
                return record1.productstatus > record2.productstatus
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={() => onUpdateData(record.productid)} />
                        <CloseOutlined onClick={() => onDeleteData(record.productid)}
                            style={{ color: "red", marginLeft: 30 }} />
                    </>
                )
            }
        }
    ]



    //search box
    function search(rows) {
        const cols = rows[0] && Object.keys(rows[0]);
        return rows.filter((row) =>
            cols.some(
                (col) =>
                    row[col].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
            ))
    }

    //function update

    function onUpdateData(id) {
       // props.
        history.push("/Productupdate/" + id)

    }

    //function delete
    const onDeleteData = (id) => {

        /* Modal.confirm({
             title: 'Confirm to delete?',
             okText: 'Yes',
             okType: 'danger',
             onOk: () => { */
        Axios.delete(`http://localhost:60665/api/Product/${id}`)
            .then(res => {
                const del = newPro.filter(Productid => id !== newPro.productid)
                setnewPro(del)
            })
    }

    return (
        <div className='App'>
            <div className='Header'> <p>Product Type Lisitng</p>
            </div>

            <div className='Search'> <p> Search :
                <input
                    type="text"
                    placeholder="Search here"
                    value={q}
                    onChange={(e) => {
                        setQ(e.target.value);
                    }}
                />
                <select name="option" id="option">
                    <option value="producttypename">Product Type Name</option>
                    <option value="productdesc">Product Description</option>
                    <option value="productstatus">Product Status</option>
                </select>
                {/* testing search */}
                <Button onClick={search(newPro)}>Search</Button>

            </p>
            </div>

            <Table
                dataSource={search(newPro)}
                bordered
                columns={cols}
                pagination={{
                    current: page,
                    pageSize: pageSize,

                    onChange: (page, pageSize) => {
                        setPage(page);
                        setPageSize(pageSize)
                    }
                }}
                rowSelection={{
                    type: 'checkbox',
                    selectedRowKeys: selectedRows,
                    onChange: (keys) => {
                        setselectedRows(keys)
                    },
                    onSelect: (record) => {
                        console.log({ record })
                    }
                }
                }
            />
        </div>
    )
}
export default Productlisting2