
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem'
import { useTheme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import './Listing.css'
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
export default function Deposits() {
  const [value, setValue] = React.useState(new Date(''));

  const handleChange2 = (newValue) => {
    setValue(newValue);
  };

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
      
     <InputLabel htmlFor="component-simple">User Id</InputLabel>
     <TextField fullWidth size="small" />
   
        </Grid>
        <Grid item md={4} xs={12}>
      <InputLabel htmlFor="component-simple">Product Id</InputLabel>
     <TextField fullWidth size="small" />
        </Grid>
        <Grid item md={4} xs={12}>  
          <InputLabel htmlFor="component-simple">From Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} sx={{ width: 360 }}>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
        </LocalizationProvider>
        </Grid>
        <Grid item md={4} xs={12}>
        <InputLabel id="demo-multiple-name-label">Status</InputLabel>   
        <FormControl sx={{ width: 360 }}>
        
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          MenuProps={MenuProps}
          size="small"
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
                 </Grid>
        <Grid item md={4} xs={12}>
              
     <InputLabel htmlFor="component-simple">Transction Id</InputLabel>
     <TextField fullWidth size="small" />
        </Grid>
        <Grid item md={4} xs={12}>
              
              <InputLabel htmlFor="component-simple">To Date</InputLabel>
              <LocalizationProvider  dateAdapter={AdapterDateFns}>
      <Stack spacing={3} sx={{ width: 360 }} size="small">
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={value}
         
          onChange={handleChange2}
          renderInput={(params) => <TextField {...params} />}
        />
        </Stack>
        </LocalizationProvider>
                 </Grid>
  
                 <Grid item md={4} xs={12}>
                 <Button  variant="contained" color="success">
                         Search
                 </Button>
                 </Grid>
      </Grid>
      <InputLabel htmlFor="component-simple" className="gridd"><h3>Net Revenu:</h3><p>$9678</p></InputLabel>
    </Box>
  );
}
