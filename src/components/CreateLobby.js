import React, { useEffect } from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import CreateLobbyGame from './CreateLobbyGame';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  createLobbyForm: {
    background: 'pink',
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CustomTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};
const CustomNumInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="number-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CustomSelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const CreateLobby = ({
  lobbies,
  setLobbies,
  currentLobby,
  setCurrentLobby,
}) => {
  const classes = useStyles();

  useEffect(() => {
    setLobbies((lobbies) => lobbies.concat(currentLobby));
  }, [currentLobby]);

  return (
    <div className={classes.createLobbyForm}>
      <Formik
        initialValues={{
          game: '',
          lobbySize: 2,
          language: 'En',
          lobbyNotes: '',
          mic: '',
        }}
        validationSchema={Yup.object({
          game: Yup.string().required('Required'),
          lobbySize: Yup.number()
            .required()
            .positive('Lobby size must be at least 2')
            .integer()
            .min(2, 'Lobby size must be at least 2')
            .max(15, 'Max lobby size is 15'),
          language: Yup.string().required('Required'),
          mic: Yup.string()
            .oneOf(
              ['Mandatory', 'Perfered', 'No Mic'],
              'Please Select Preference'
            )
            .required('Required'),
          lobbyNotes: Yup.string()
            .min(1, 'Must be at least 1 characters')
            .max(140, 'Must be 140 characters or less')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setCurrentLobby(values);
          resetForm();
          setSubmitting(false);
          console.log(lobbies);
        }}
      >
        <Form>
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h5" component="h2" align="center">
                Create a Lobby
              </Typography>
              <Divider variant="middle" />
              <CreateLobbyGame />
              <CustomSelect label="game:" name="game">
                <option value="">Select a Game</option>
                <option value="League of Legends">League of Legends</option>
                <option value="CS:GO">CS:GO</option>
                <option value="Escape From Tarkov">Escape From Tarkov</option>
                <option value="Among Us">Among Us</option>
                <option value="Valorant">Valorant</option>
                <option value="other">other</option>
              </CustomSelect>
              <CustomNumInput
                label="Size"
                name="lobbySize"
                type="number"
                placeholder="1"
              />
              <CustomSelect label="Language" name="language">
                <option value="">Lobby Language</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Russian">Russian</option>
                <option value="Turkish">Turkish</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
                <option value="Other">Other</option>
              </CustomSelect>
              <CustomSelect label="Mic" name="mic">
                <option value="">Mic Preference</option>
                <option value="Mandatory">Mandatory</option>
                <option value="Perfered">Perfered</option>
                <option value="No Mic">No Mic</option>
              </CustomSelect>
              <CustomTextInput
                label="Lobby Notes"
                name="lobbyNotes"
                type="text"
                placeholder="(Max 140 Characters)"
              />
            </CardContent>
            <CardActions>
              <button type="submit">Submit</button>
              {/* <Button size="small">Create</Button> */}
            </CardActions>
          </Card>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateLobby;
