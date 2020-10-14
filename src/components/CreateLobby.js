import React, { useState, useEffect } from 'react';
import { Formik, useField, Form } from 'formik';
import * as Yup from 'yup';

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
    <div>
      <Formik
        initialValues={{
          name: '',
          specialPower: '',
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
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // console.log(JSON.stringify(values.name, null, 2));
          // setCards(cards.concat(JSON.stringify(values.name, null, 2)));
          setCurrentCard(values);
          // setCards((cards) => cards.concat(currentCard));
          resetForm();
          setSubmitting(false);
          console.log(cards);
        }}
      >
        {(props) => (
          <Form>
            <h1>Sign Up</h1>
            <CustomTextInput
              label="Name"
              name="name"
              type="text"
              placeholder="Frank"
            />
            <CustomSelect label="Special Power" name="specialPower">
              <option value="">Select a Special Power</option>
              <option value="flight">flight</option>
              <option value="invisibility">invisibility</option>
              <option value="wealthy bat guy">wealthy bat guy</option>
              <option value="other">other</option>
            </CustomSelect>
            <button type="submit">
              {props.isSubmitting ? 'Loading...' : 'Submit'}
            </button>
            {/* <pre>{JSON.stringify(props.values, null, 2)}</pre> */}
          </Form>
        )}
      </Formik>
      <Card cards={cards} />
    </div>
  );
};

export default CreateLobby;
