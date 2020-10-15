import React, { useEffect } from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import '../style/CreateLobby.css';

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
  useEffect(() => {
    setLobbies((lobbies) => lobbies.concat(currentLobby));
  }, [currentLobby]);

  return (
    <div className="create-lobby-form">
      <Formik
        initialValues={{
          game: '',
          lobbySize: 2,
          language: 'En',
          lobbyNotes: '',
          mic: '',
        }}
        validationSchema={Yup.object({
          game: Yup.string()
            .oneOf(
              [
                'League of Legends',
                'CS:GO',
                'Escape From Tarkov',
                'Among Us',
                'Valorant',
                'other',
              ],
              'Invalid Game'
            )
            .required('Required'),
          lobbySize: Yup.number()
            .required()
            .positive('Lobby size must be at least 2')
            .integer()
            .min(2, 'Lobby size must be at least 2')
            .max(15, 'Max lobby size is 15'),
          language: Yup.string()
            .oneOf(
              [
                'English',
                'Chinese',
                'Spanish',
                'Portuguese',
                'Russian',
                'Japanese',
                'Turkish',
                'Other',
              ],
              'Please Select Language'
            )
            .required('Required'),
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
        {(props) => (
          <Form>
            <div>Create a Lobby</div>
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

            <button type="submit">
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateLobby;
