import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import AdbIcon from '@material-ui/icons/Adb';

const useStyles = makeStyles({
  table: {
    maxWidth: 650,
    cursor: 'pointer',
  },

  rowStyle: {
      transition: 'all .1s',
      borderLeft: '3px solid #00D395'
  }
});

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0),
  createData('Ice cream sandwich', 237, 9.0),
  createData('Eclair', 262, 16.0),
  createData('Cupcake', 305, 3.7),
  createData('Gingerbread', 356, 16.0),
  createData('Frozen yoghurtt', 159, 6.0),
  createData('Ice cream sandwichh', 237, 9.0),
  createData('Eclairr', 262, 16.0),
  createData('Cupcakee', 305, 3.7),
];

export default function BasicTable({handleShowData}) {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [rowHoverd, setRowHoverd] = React.useState('');

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleHover= (rowName: string) : void => {
    setRowHoverd(rowName)
  } 

  const handleUndoHover= () : void => {
    setRowHoverd('')
  } 

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset</TableCell>
            <TableCell align="right">Apy</TableCell>
            <TableCell align="right">Wallet</TableCell>
            <TableCell align="right">Collateral</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} style={{height: 80}} className={ rowHoverd === row.name ? `${classes.rowStyle}` : null}>
              <TableCell component="th" scope="row" onMouseEnter={() => handleHover(row.name)} onMouseLeave={handleUndoHover} onClick={handleShowData}>
               <AdbIcon color="primary" style={{marginRight: 10, top: 5, position: 'relative'}} /> {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">
                 <Switch size="small" checked={checked} onChange={toggleChecked} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
