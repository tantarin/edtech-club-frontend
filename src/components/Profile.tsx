import React from "react";
import { getCurrentUser } from "../services/auth.service";
import {Button, Grid, Paper} from "@mui/material";
import { styled } from '@mui/material/styles';

const Profile: React.FC = () => {
  const currentUser = getCurrentUser();
    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: 360,
        height: 120,
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    }));

    return (
      <>
          <h2 className="mt-5 ml-5">Мой профиль</h2>
          <div className="row justify-content-around mt-5 user-info">
              <div className="col-12 col-md-3">
                  <figure className='avatar avatar-profile'>
                      <img className="rounded-circle img-fluid"   src={`https://picsum.photos/200/300`}
                           alt={`The image alt tag for the big image`}/>
                  </figure>
                  <Button variant="contained" href="#contained-buttons">
                      Редактировать профиль
                  </Button>
              </div>

              <div className="col-12 col-md-5">
                  <h4>Username</h4>
                  <p>{currentUser.username}</p>

                  <h4>Email</h4>
                  <p>{currentUser.email}</p>

                  <h4>Должность</h4>
                  <p>{currentUser.email}</p>

                  <h4>Обо мне </h4>
                  <DemoPaper square={false}>test test</DemoPaper>

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
