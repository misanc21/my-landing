import React, { useState } from 'react';
import { makeStyles, TextField, Typography, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form'


const Formulario = () => {
    const classes = useStyles()
    const [sended, setSended] = useState(false)
    const [data, setData] = useState({
        email: '',
        message: ''
    })
    const { email, message } = data
    const { register, handleSubmit, errors } = useForm()

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const submitForm = () => {
        console.log('submited')
        setSended(true)
        setData({
            email: '',
            message: ''
        })
    }
    return (
        <>
            <Typography variant="h5" className={classes.title}>Contact me!</Typography>
            {!sended ?
                <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
                    <TextField
                        id="email-input"
                        label="Email"
                        type="email"
                        autoComplete="your email"
                        variant="filled"
                        name="email"
                        value={email}
                        inputRef={
                            register({
                                required: {
                                    value: true,
                                    message: "This field is required"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        onChange={handleChange}
                    />
                    {errors.email && <Typography variant="body1" className={classes.inputError}>{errors.email.message}</Typography>}
                    <TextField
                        id="message-email"
                        label="Message"
                        multiline
                        rows={4}
                        variant="filled"
                        name="message"
                        className={classes.input}
                        value={message}
                        inputRef={register({
                            required: {
                                value: true,
                                message: "This field is required"
                            }
                        })}
                        onChange={handleChange}
                    />
                    {errors.message && <Typography variant="body1" className={classes.inputError}>{errors.message.message}</Typography>}
                    <Button variant="contained" type="submit" className={classes.button}>
                        Send
                    </Button>
                </form>
                :
                <Typography variant="h6" className={classes.response}>I response you soon, thank you!</Typography>
            }
        </>
    );
}

const useStyles = makeStyles((theme) => ({
    form: {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        padding: '.5rem 3rem',
        [theme.breakpoints.down('sm')]: {
            padding: '.5rem',
        }
    },
    input: {
        marginTop: '1rem'
    },
    inputError: {
        marginBottom: '1rem',
        color: 'red'
    },
    response: {
        color: '#541aa1',
    },
    title: {
        color: '#541aa1',
        fontWeight: 'bold',
        marginBottom: '0'
    },
    button: {
        marginTop: '1rem',
        marginBottom: '.5rem',
        backgroundColor: '#541aa1',
        color: 'white',
        fontWeight: 'bold'
    },
}));

export default Formulario;