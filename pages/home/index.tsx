import React, { useState } from 'react'
import Appbar from 'components/shared/nav'
import Hero from 'components/dashboard/Hero'
import DataTable from 'components/dashboard/DataTable'
import Footer from 'components/dashboard/Footer'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from 'components/shared/modal/Modal'

export default function index() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMd = useMediaQuery(theme.breakpoints.down('sm'));

  const [showModal, setShowModal]= useState<boolean>(false)

  const handleModalClose= () => {
    setShowModal(false)
  }

  const handleShowData= () => {
    setShowModal(true)
  }

  return (
    <div>
      <Appbar handleShowData={handleShowData}/>
      <Hero/>
      <Container style={{display: 'flex', flexDirection: matchesMd ? 'column' : 'row', marginTop: matches ? 50 : -70}}>
        <Box flexGrow={1} borderRadius={5} display="flex" flexDirection="column">
          <Box height={70} style={{background: '#FFF', borderTopLeftRadius: 5, borderTopRightRadius: 5}} display="flex" alignItems="center" pl={2} borderBottom="1px solid #e0e0e0">
           <Typography variant="h6" style={{color: '#070A0E', fontWeight: 600}}>Supply Markets</Typography>
          </Box>
          <DataTable handleShowData={handleShowData} />
        </Box>
        <Box ml={matches ? 0 : 3} mt={matches ? 3 : 0} flexGrow={1} borderRadius={5} display="flex" flexDirection="column">
          <Box height={70} style={{background: '#FFF', borderTopLeftRadius: 5, borderTopRightRadius: 5}} display="flex" alignItems="center" pl={2} borderBottom="1px solid #e0e0e0" >
           <Typography variant="h6" style={{color: '#070A0E', fontWeight: 600}}>Supply Markets</Typography>
          </Box>
          <DataTable handleShowData={handleShowData} />
        </Box>
      </Container>
      <Footer/>
      <Modal isOpen={showModal} handleModalClose={handleModalClose}/>
    </div>
  )
}
