import React from "react";
import { getCurrentUser } from "../../services/auth.service";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {Button, Grid} from "@mui/material";
import { Input  } from '@mui/base/Input';
import styles from "./Profile.module.css"
import {UserPhotoImg} from "../../assets/img";
import clsx from "clsx";
import TextField from "@mui/material/TextField";

const labelClass = "text-gray text-sm m-0"

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
const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
    const [age, setAge] = React.useState('none');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };



    return (
        <>
            <style>
                {`body{
                    background-color: rgb(245 245 245);
                }`}
            </style>
              <div className="flex items-start mx-auto max-w-[900px] flex-col  relative md:gap-16 gap-8 pb-12 -mt-4">
                  <div className={styles.top}>
                      <div className={clsx("shrink-0 max-w-[300px] mx-auto", styles.avatar)}>
                          <figure className='avatar avatar-profile aspect-square m-0'>
                              <img className="rounded-circle img-fluid aspect-square" src={UserPhotoImg}
                                   alt={`The image alt tag for the big image`}/>
                          </figure>
                          <a className="w-full text-white font-bold !no-underline rounded-circle"
                             href="#contained-buttons">
                              Обновить аватар
                          </a>
                      </div>
                  </div>
                  <div className="flex flex-col md:gap-8 gap-4 w-full">
                      <div className="flex justify-center w-full flex-col gap-4">
                          <div className="md:text-left text-center">
                              <h4 className={labelClass}>Email</h4>
                              <p className="text-2xl">{currentUser.email}</p>
                          </div>
                          <div className="md:text-left text-center">
                              <h4 className={labelClass}>Username</h4>
                              <p className="text-2xl">{currentUser.username}</p>
                          </div>
                      </div>
                      <div className="w-full">
                          <h4 className={labelClass}>Должность</h4>
                          <FormControl className="min-w-[120px] w-full mt-2">
                              <Select
                                  value={age}
                                  variant="filled"
                                  onChange={handleChange}
                              >
                                  <MenuItem value="none">
                                      <em>None</em>
                                  </MenuItem>
                                  <MenuItem value={10}>Студент</MenuItem>
                                  <MenuItem value={20}>Преподаватель</MenuItem>
                                  <MenuItem value={30}>Гость</MenuItem>
                              </Select>
                          </FormControl>
                      </div>
                      <div>
                          <h4 className={labelClass}>Обо мне </h4>
                          <TextField multiline variant="filled" className="mt-2 w-full" rows={4}
                                     placeholder="Minimum 3 rows"/>
                      </div>

                      <div className="flex md:flex-row flex-col gap-4">
                          <Button variant="outlined" color="info" className="w-full" size="large" href="#contained-buttons">
                              Мои объявления
                          </Button>
                          <Button variant="outlined" color="info" className="w-full" size="large" href="#contained-buttons">
                              Изменить пароль
                          </Button>
                          <Button variant="outlined" color="info" className="w-full" size="large" href="#contained-buttons">
                              Редактировать
                          </Button>
                      </div>
                  </div>
              </div>
            </>
    );
};
export default Profile;
