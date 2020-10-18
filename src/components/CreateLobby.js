import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Form, Field } from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import Box from '@material-ui/core/Box';
import * as yup from 'yup';

import { gameTitles } from '../data/gameSelection';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const CreateLobby = ({
  lobbies,
  setLobbies,
  currentLobby,
  setCurrentLobby,
  setLobbyCreating,
}) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        gameSelect: '',
        lobbySize: 2,
        language: 'English',
        micPreference: '',
        lobbyNotes: '',
      }}
      validationSchema={yup.object({
        gameSelect: yup.string().required('Required'),
        lobbySize: yup
          .number()
          .integer()
          .required('Required')
          .min(2, 'Lobby size must be at least 2')
          .max(15, 'Max lobby size is 15'),
        language: yup.string().required('Required'),
        micPreference: yup.string().required('Required'),
        lobbyNotes: yup
          .string()
          .max(140, 'Notes must be 140 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setLobbies((lobbies) => lobbies.concat(values));
          setLobbyCreating(false);
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Box margin={1}>
            <FormControl className={classes.formControl}>
              <Field
                component={TextField}
                name="gameSelect"
                label="Select a Game"
                select
                margin="normal"
                // helperText=""
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {gameTitles.map((option) => (
                  <MenuItem key={option.title} value={option.title}>
                    {option.title}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="number"
              label="Lobby Size"
              name="lobbySize"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              label="Lobby Language"
              name="language"
            />
          </Box>
          <Box margin={1}>
            <FormControl className={classes.formControl}>
              {/* <InputLabel>Age</InputLabel> */}
              <Field
                component={TextField}
                name="micPreference"
                label="Mic Preference"
                select
                margin="normal"
                // helperText=""
                InputLabelProps={{
                  shrink: true,
                }}
              >
                <MenuItem key="Mandatory" value="Mandatory">
                  Mandatory
                </MenuItem>
                <MenuItem key="Preferred" value="Preferred">
                  Preferred
                </MenuItem>
                <MenuItem key="No Mic" value="No Mic">
                  No Mic
                </MenuItem>
              </Field>
            </FormControl>
          </Box>

          <Box margin={1}>
            <Field
              component={TextField}
              type="text"
              label="Lobby Notes"
              name="lobbyNotes"
              variant="outlined"
              multiline
              rows="3"
            />
          </Box>
          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
          {isSubmitting && <LinearProgress />}
        </Form>
      )}
    </Formik>
  );
};

export default CreateLobby;
