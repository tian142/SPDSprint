import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Formik, Form, Field } from "formik"
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  Grid,
  Typography,
} from "@material-ui/core"
import { TextField } from "formik-material-ui"
import * as yup from "yup"

import { gameTitles } from "../data/gameSelection"

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 210,
  },
  typography: {
    borderBottom: " 2px solid #8400ed",
    paddingBottom: "6px",
    margin: "5px 0px 15px 0px",
  },
  gridRow: {
    marginBottom: "15px",
  },
  loading: {
    marginBottom: "5px",
  },
}))

const CreateLobby = ({ setLobbies, setLobbyCreating }) => {
  const classes = useStyles()
  return (
    <Formik
      initialValues={{
        gameSelect: "",
        lobbySize: 2,
        language: "English",
        micPreference: "",
        lobbyNotes: "",
      }}
      validationSchema={yup.object({
        gameSelect: yup.string().required("Required"),
        lobbySize: yup
          .number()
          .integer()
          .required("Required")
          .min(2, "Lobby size must be at least 2")
          .max(10, "Max lobby size is 10"),
        language: yup
          .string()
          .required("Required")
          .min(2, "Must be at least 2 characters")
          .max(10, "Must be below 10 characters"),
        micPreference: yup.string().required("Required"),
        lobbyNotes: yup
          .string()
          .max(130, "Notes must be 130 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setLobbyCreating(false)
          setSubmitting(false)
          setLobbies((lobbies) => lobbies.concat(values))
        }, 500)
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Form>
          <Grid container>
            <Grid item sm={12}>
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className={classes.typography}
              >
                Create a Lobby
              </Typography>
              {/* <Divider variant="fullWidth" className={classes.divider} /> */}
            </Grid>
            <Grid item sm={8} className={classes.gridRow}>
              <FormControl className={classes.formControl}>
                <Field
                  component={TextField}
                  name="gameSelect"
                  label="Select a Game"
                  select
                  // margin="normal"
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
            </Grid>
            <Grid item sm={4}>
              <Field
                component={TextField}
                type="number"
                label="Lobby Size"
                name="lobbySize"
                // fullWidth
              />
            </Grid>
            <Grid item sm={8} className={classes.gridRow}>
              <FormControl className={classes.formControl}>
                {/* <InputLabel>Age</InputLabel> */}
                <Field
                  component={TextField}
                  name="micPreference"
                  label="Mic Preference"
                  select
                  // margin="normal"
                  // helperText=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                >
                  <MenuItem key="Mic Mandatory" value="Mic Mandatory">
                    Mandatory
                  </MenuItem>
                  <MenuItem key="Mic Preferred" value="Mic Preferred">
                    Preferred
                  </MenuItem>
                  <MenuItem key="No Mic" value="No Mic">
                    No Mic
                  </MenuItem>
                </Field>
              </FormControl>
            </Grid>
            <Grid item sm={4}>
              <Field
                component={TextField}
                type="text"
                label="Lobby Language"
                name="language"
              />
            </Grid>

            <Grid item sm={12} className={classes.gridRow}>
              <Field
                fullWidth
                component={TextField}
                type="text"
                label="Lobby Notes"
                name="lobbyNotes"
                variant="outlined"
                multiline
                rows="3"
              />
            </Grid>
            <Grid item xs={12} className={classes.loading}>
              {isSubmitting && <LinearProgress color="primary" />}
            </Grid>
            <Grid container alignItems="center" justify="center">
              <Grid item>
                <Button
                  variant="contained"
                  disabled={isSubmitting}
                  onClick={submitForm}
                  color="primary"
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

export default CreateLobby
