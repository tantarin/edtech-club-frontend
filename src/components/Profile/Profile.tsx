import React from "react";
import { getCurrentUser } from "../../services/auth.service";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import {Button, Grid} from "@mui/material";
import "./Profile.css"
import {UserPhotoImg} from "../../assets/img";


const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const blue = {
        100: '#DAECFF',
        200: '#b6daff',
        400: '#3399FF',
        500: '#007FFF',
        600: '#0072E5',
        900: '#003A75',
    };

    const grey = {
        50: '#F3F6F9',
        100: '#E5EAF2',
        200: '#DAE2ED',
        300: '#C7D0DD',
        400: '#B0B8C4',
        500: '#9DA8B7',
        600: '#6B7A90',
        700: '#434D5B',
        800: '#303740',
        900: '#1C2025',
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
    );



    return (
      <>
          <div style={{width: "100%",
          display: "flex",
          justifyContent: "center"}}>
            <h2 className="mt-5">Мой профиль</h2>
          </div>
          <div className="row justify-content-around mt-5 user-info">
              <div className="col-12 col-md-3">
                  <figure className='avatar avatar-profile'>
                      <img className="rounded-circle img-fluid" src={UserPhotoImg}
                           alt={`The image alt tag for the big image`}/>
                  </figure>
                  <Button variant="contained" href="#contained-buttons">
                      Редактировать профиль
                  </Button>
              </div>

              <div className="col-12 col-md-5">
                  <h4 className={"inProfileLabel"}>Username</h4>
                  <p>{currentUser.username}</p>

                  <h4 className={"inProfileLabel"}>Email</h4>
                  <p>{currentUser.email}</p>

                  <h4 className={"inProfileLabel"}>Должность</h4>
                  <FormControl sx={{minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">Должность</InputLabel>
                      <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          value={age}
                          label="Должность"
                          onChange={handleChange}
                      >
                          <MenuItem value="">
                              <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Студент</MenuItem>
                          <MenuItem value={20}>Преподаватель</MenuItem>
                          <MenuItem value={30}>Гость</MenuItem>
                      </Select>
                  </FormControl>

                  <h4 className={"inProfileLabel"}>Обо мне </h4>
                  <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />

                  <Grid container direction="column" spacing={2}>
                      <Grid item>
                          <Button variant="contained" href="#contained-buttons">
                              Мои объявления
                          </Button>
                      </Grid>
                      <Grid item>
                          <Button variant="contained" href="#contained-buttons">
                              Изменить пароль
                          </Button>
                      </Grid>
                  </Grid>
              </div>
          </div>
      </>
  );
};

export default Profile;
