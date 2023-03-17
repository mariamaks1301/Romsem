import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';


const Form = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
      } = useForm({
        mode: "onBlur"
      });
    

    const registerUser = (e)=>{
        e.preventDefault()
        
        // let newUser = {
        //     login,
        //     email,
        //     phone,
        //     password: e.target[3].value,
        // }
        

    }

    return (
        <div className='content'>
            <form noValidate className='form' onSubmit={handleSubmit(registerUser)}>
                <h2 className='form__title'>Регистрация</h2>

                <label  className='form__label'>
                    <input {...register('login', {
                        required: {
                            message: "Поле логин, обязательно к заполнению",
                            value: true,
                        }, 
                        maxLength: {
                            message: 'Максимальная длина 10 символов',
                            value: 10,
                        },
                        minLength: {
                            message: 'Минимальная длина 3 символа',
                            value: 3,
                        },
                    })} className='form__field'  type="text" placeholder='Введите логин' />
                    <p className='form__error'>{errors.login && errors.login.message}</p>
                </label>
                


                <label  className='form__label'>
                    <input {...register( 'email', {
                        required: {
                            message: "Поле email, обязательно к заполнению",
                            value: true
                        },
                        pattern: {
                            message: 'Введите email верно',
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        },

                    })} className='form__field' type="email" placeholder='Введите Email' />
                    <p className='form__error'>{errors.email && errors.email.message}</p>
                </label>

                <label className='form__label'>
                    <InputMask
                        mask={`+\\9\\96(999)99-99-99`}
                        type='tel'
                        {...register('phone', {
                            required: {
                                value: true,
                                message: 'Это поле обязательное',
                            },
                            pattern: {
                                value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/,
                                message: 'Заполните номер телефона',
                            },
                        })}
                        className='form__field'
                        placeholder={'Введите номер телефона'}
                    />
                    <p className='form__error'>{errors.phone && errors.phone.message}</p>
                </label>

                <label  className='form__label'>
                    <input {...register('password', {
                        required: {
                            message: "Поле password, обязательно к заполнению",
                            value: true,
                        },
                        maxLength: {
                            message: "Максимальная длина 20 символов",
                            value: 20,
                        },
                        minLength: {
                            message: "Минимальная длина 7 символа",
                            value: 7
                        },
                        pattern: {
                            message: 'Пароль должен содержать хотя бы одну заглавную букву и одну цифру',
                            value: /(?=.*[0-9])(?=.*[a-z]){6,}/g,
                        },
                    })} className='form__field' type="password" placeholder='Придумайте пароль' />
                    <p className='form__error'>{errors.password && errors.password.message}</p>
                </label>

                <label  className='form__label'>
                    <input {...register('passwordAgain', {
                        required: {
                            message: 'Повторите пароль',
                            value: true,
                        },
                        validate: v => {
                            if (getValues('password') !== v) {
                                return 'Ваш пароль не совпадает!'
                            }
                        },
                    })} className='form__field' type="password" placeholder='Повторите пароль' />
                    <p className='form__error'>{errors.passwordAgain && errors.passwordAgain.message}</p>
                </label>

                <button className='form__btn' type='submit'>Зарегестрироваться</button>


                <p className='form__text'>У меня уже есть
                    <Link className='form__text-link' to="/login"> аккаунт</Link>
                </p>


            </form>
            
        </div>
    );
};

export default Form;