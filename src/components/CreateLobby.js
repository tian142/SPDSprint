import React, { useState, useEffect } from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';
import Card from './Card';
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

const CreateLobby = () => {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState('');

  useEffect(() => {
    setCards((cards) => cards.concat(currentCard));
  }, [currentCard]);

  return (
    <div className="create-lobby-form">
      <Formik
        initialValues={{
          name: '',
          specialPower: '',
          game: '',
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(3, 'Must be at least 3 characters')
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          specialPower: Yup.string()
            .oneOf(
              ['flight', 'invisibility', 'wealthy bat guy', 'other'],
              'Invalid Special Power'
            )
            .required('Required'),
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
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setCurrentCard(values);
          resetForm();
          setSubmitting(false);
          console.log(cards);
        }}
      >
        {(props) => (
          <Form>
            <div>Create a Lobby</div>
            <CustomSelect label="game:" name="game">
              <option value="League of Legends">League of Legends</option>
              <option value="CS:GO">CS:GO</option>
              <option value="Escape From Tarkov">Escape From Tarkov</option>
              <option value="Among Us">Among Us</option>
              <option value="Valorant">Valorant</option>
              <option value="other">other</option>
            </CustomSelect>
            <CustomSelect label="Special Power" name="specialPower">
              <option value="">Select a Special Power</option>
              <option value="flight">flight</option>
              <option value="invisibility">invisibility</option>
              <option value="wealthy bat guy">wealthy bat guy</option>
              <option value="other">other</option>
            </CustomSelect>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Frank"
            />
            <button type="submit">
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
      <Card cards={cards} />
    </div>
  );
};

export default CreateLobby;
