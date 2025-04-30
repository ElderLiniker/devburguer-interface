

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Row } from './row';
import { useEffect, useState } from 'react';
import { api } from "../../../services/api"

import { Filter, FilterOptions } from "./styles"

import { orderStatusOptions } from './orderStatus';




export function Orders() {

  const [orders, setOrders] = useState([])



  const [filteredOrders, setfilteredOrders] = useState([])
  const [activeStatus, setactiveStatus] = useState(0)

  const [rows, setRows] = useState([])



  useEffect(() => {
    async function loadOrders() {

      const { data } = await api.get("orders")
      console.log(data)

      setOrders(data)
      setfilteredOrders(data)
    }
    loadOrders()
  }, [])



  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products.map(product => ({
        ...product,
        quantity: Number(product.quantity), // conversão aqui
      })),
    };
  }
  useEffect(() => {

    const newRows = filteredOrders.map((order) => createData(order))

    setRows(newRows)

  }, [filteredOrders])



  function handlestatus(status) {
    if (status.id === 0) {
      setfilteredOrders(orders)
    }
    else {
      const newOrders = orders.filter((order) => order.status === status.value)

      setfilteredOrders(newOrders)
    }

    setactiveStatus(status.id)

  }

  useEffect(() => {
    if (activeStatus === 0) {
      setfilteredOrders(orders)
    }
    else {

      const statusIndex = orderStatusOptions.findIndex((item) => item.id === activeStatus,

      )
      const newFilterOrders = orders.filter((order) => order.status === orderStatusOptions[statusIndex].value,)
      setfilteredOrders(newFilterOrders)
    }

  }, [orders])






  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOptions key={status.id}
            onClick={() => handlestatus(status)}
            $isActiveStatus={activeStatus === status.id}

          >
            {status.label}
          </FilterOptions>))}

      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />

              <TableCell >Pedido</TableCell>
              <TableCell >Cliente</TableCell>
              <TableCell >Data do Pedido</TableCell>
              <TableCell >Status</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders} />

            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}