import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, FieldArray } from 'formik';
import { Input, Button } from '../components/index';
import styles from './zets.module.css';
import { FormData } from '../App';



const digitsOnly = (value: any) => /^\d+$/.test(value);
const validations = Yup.object().shape({
  fullname: Yup.string().required('Поле, обязательное для заполнения'),
  age: Yup.string()
    .required('Поле, обязательное для заполнения')
    .test('Digits only', 'В поле должны быть только цифры', digitsOnly),
});



type PropsType = {
  handleData: (formData: FormData) => void
}

export const FormPage = ({ handleData }: PropsType) => {
  
  const submit = (formData: FormData) => {
    handleData(formData);
  }

  return (
    <div className={styles.wrapper}>
      <Formik initialValues={{
        fullname: '',
        age: '',
        childs: [],
      }}
        onSubmit={submit}
        validationSchema = {validations}>

        {({ errors, touched, values }) => (
          <Form>
            <div className={styles.subtitle}> Персональные данные </div>

            <div className={styles.form}>
              <Field
                name='fullname'
                label='Имя'
                error={errors.fullname && touched.fullname}
                errorText={errors.fullname}
                as={Input} />
              <Field
                name='age'
                label='Возраст'
                error={errors.age && touched.age}
                errorText={errors.age}
                as={Input} />
            </div>

            <FieldArray
              name='childs'
              render={arrayHelpers => (
                <React.Fragment>
                  <div className={styles.header}>
                    <div className={styles.subtitle}> Дети (макс. 5) </div>
                    {values.childs.length < 5 &&
                    <Button 
                      plusIcon 
                      type='button' 
                      appearance='outlined'
                      onClick = {() => arrayHelpers.push({fullname: '', age: ''})}> 
                      Добавить ребенка 
                    </Button>}
                  </div>
                  <div className={styles.form}>

                    {values.childs && values.childs.length > 0 && (
                      values.childs.map((child, index) => (
                        <div key={index} className={styles.fieldArray}>
                          <Field
                            name={`childs.${index}.fullname`}
                            label='Имя'
                            as={Input} />
                          <div className={styles.divider} />
                          <Field
                            name={`childs.${index}.age`}
                            label='Возраст'
                            as={Input} />
                          <Button 
                            type='button' 
                            appearance='empty'
                            onClick = {() => arrayHelpers.remove(index)}> 
                            Удалить 
                          </Button>
                        </div>
                      ))
                    )}
                  </div>
                </React.Fragment>
              )}
            />

            <Button type='submit' appearance='primary'> Сохранить </Button>

          </Form>
        )}
      </Formik>
    </div>
  )
}

