import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled, useTheme } from '@mui/material';
import Modal from 'react-modal';



const columns = [
    { id: 'name_student', label: 'Name', minWidth: 150 },
    { id: 'student_email', label: 'Email', minWidth: 150 },
    { id: 'student_phone', label: 'Phone', minWidth: 150 },
    { id: 'student_country', label: 'Country', minWidth: 150 },
    { id: 'student_image', label: 'Image', minWidth: 150 }
  ];
  
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"400px",
      maxWidth:"100%"
    },
  };

  const Image = styled('img')({
    width:"50px",
    height:"50px"
  })


export default function AdminUsersTable() {


    const [imageSrc, setImageSrc] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle the image click event
    const handleImageClick = (src) => {
        setImageSrc(src);
        setIsModalOpen(true);
    };
    
    // Function to handle the modal close event
    const handleCloseModal = () => {
        setImageSrc('');
        setIsModalOpen(false);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const theme = useTheme();
  

  const data=[{
    id:1,
    name:"mohammed",
    email:"moh@gmail.com",
    image:"https://images.pexels.com/photos/16015725/pexels-photo-16015725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    phone:"123456789",
    country:"palestine"
  }]

  return (
    <>
        <Paper sx={{ width: '100%'  , marginTop:"30px"}}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableRow sx={{backgroundColor:theme.palette.secondary.main , color:"white"}}>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={"center"}
                        style={{ top: 57, minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return <TableRow hover role="checkbox"  key={row.id+"demj"}>
                            <TableCell align='center'>
                                {row.name}
                            </TableCell>
                            <TableCell align='center'>
                                {row.email}
                            </TableCell>
                            <TableCell align='center'>
                                {row.phone}
                            </TableCell>
                            <TableCell align='center'>
                                {row.country}
                            </TableCell>
                            <TableCell align='center'>
                                <Image src={row.image} alt={row.name} onClick={() => handleImageClick(row.image)} />
                            </TableCell>
                        </TableRow>
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 15, 20]}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}   style={customStyles}>
            <img src={imageSrc} alt='modal image' width={"100%"}/>
        </Modal>
    </>
  )
}
