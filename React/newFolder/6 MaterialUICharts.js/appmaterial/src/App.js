import React from "react";
// import component of MUI
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import Checkbox from "@mui/material/Checkbox";
import { FormControlLabel, Radio, Rating, Slider, Box, Switch, TextField } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";

export default function App() {
  return (
    <>
      <h1>Material UI Buttons</h1>

      <h3>Text Button</h3>
      <Button>Click Me</Button>
      <Button color="warning">Click Me</Button>
      <Button color="success" href="https://google.com">
        Google
      </Button>
      <Button disabled>Google</Button>

      <h3>Contained Button</h3>
      <Button variant="contained" color="secondary">
        Submit
      </Button>
      <Button variant="contained" color="primary">
        Submit
      </Button>
      <Button variant="contained" color="success" size="large">
        Submit
      </Button>

      <h3>Outline Button</h3>
      <Button variant="outlined" color="secondary">
        Submit
      </Button>
      <Button variant="outlined" color="primary" size="small">
        Submit
      </Button>
      <Button variant="outlined" color="warning" size="medium">
        Submit
      </Button>
      <Button variant="outlined" color="info" size="large">
        Submit
      </Button>

      <h3>Button with Icons</h3>
      <Button
        variant="outlined"
        color="info"
        size="large"
        startIcon={<SearchIcon />}
      >
        Search
      </Button>

      <Button
        variant="contained"
        color="warning"
        size="large"
        endIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <h3>Icons Button</h3>
      <IconButton color="primary">
        <DeleteIcon />
      </IconButton>

      <h3>Custom Button</h3>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        Click Me
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "red" }}>
        Submit
      </Button>

      <h3>Button with Event</h3>
      <Button variant="contained" onClick={() => alert("hello")}>
        Submit
      </Button>

      <h3>Button Group</h3>
      <ButtonGroup variant="contained" color="success">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>

      <h3>Vertical Button Group</h3>
      <ButtonGroup variant="contained" color="warning" orientation="vertical">
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </ButtonGroup>

      <h3>Floating Action Button</h3>
      <Fab color="secondary">
        <FavoriteIcon />
      </Fab>
      <Fab color="primary">
        <AddIcon />
      </Fab>
      <Fab color="warning">
        <EditIcon />
      </Fab>
      <Fab variant="extended" color="secondary">
        <NavigationIcon />
        Navigate
      </Fab>

      {/* /////////////////////////////////////////////////////////////// */}
      <h1>Material UI Check Box / Radio Button / Rating / Switch</h1>

      <h3>Basic checkboxes</h3>
      <Checkbox />
      <Checkbox defaultChecked />
      <Checkbox checked={true} />
      <Checkbox checked />
      <Checkbox checked disabled />
      <Checkbox color="secondary" defaultChecked />
      <Checkbox
        color="secondary"
        icon={<FavoriteIcon />}
        checkedIcon={<FavoriteIcon />}
      />
      <Checkbox onChange={() => alert("checkDone")} />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Pakistan"
      />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Pakistan"
        labelPlacement="top"
      />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Pakistan"
        labelPlacement="bottom"
      />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Pakistan"
        labelPlacement="start"
      />
      <FormControlLabel
        control={<Checkbox color="success" />}
        label="Pakistan"
        labelPlacement="end"
      />

      <h3>Radio Buttons</h3>
      <Radio value="male" name="radio-btn" />
      <Radio value="female" name="radio-btn" />
      <FormControlLabel
        control={<Radio color="success" />}
        label="Pakistan"
        labelPlacement="start"
      />
      <RadioGroup row name="use-radio-group" defaultValue="first">
        <FormControlLabel value="first" label="First" control={<Radio />} />
        <FormControlLabel value="second" label="Second" control={<Radio />} />
      </RadioGroup>

      <h3>Rating</h3>
      <Rating /> <br />
      <Rating value={4} /> <br />
      <Rating defaultValue={3.5} precision={0.5} />
     
      <h3>Slider</h3>
      < Slider/>
      < Slider value={5}/>
      < Slider defaultValue={10}/>
      < Slider defaultValue={10} color='secondary'/>
      <Box sx={{height: 100}}>
      < Slider defaultValue={10} color='secondary' orientation='vertical' />
      </Box>

      <h3>Switch</h3>
       <Switch/>
       <Switch defaultChecked/>
       <Switch disabled defaultChecked/>
       <FormControlLabel value="first" label="dark" control={<Switch />} />
      
       <h3>TextField</h3>
      <TextField label='Message'/>
      <TextField label='Message' variant='outlined'/>
      <TextField label='Message' variant='standard' />

      <h3>
        <Box>
          
        </Box>
      </h3>
    </>
  );
}
