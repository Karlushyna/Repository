
import React from 'react';
import styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import error from '../../assets/images/form/worning.svg';


const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = () => {
	const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        name: data.name,
        email: data.email,
      }),
    })
      .then(response => {
        reset();
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
	return (
		<section name="contact" className={styles.contact}>
			<div className={styles.box}>
				<div className={styles.img}></div>
				<div className={styles.boxForm}>
					<p className={styles.callback}>Request Callback</p>
   
					<form
						name="contact"
						className={styles.form}
						method="POST"
						data-netlify="true"
						data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit(onSubmit)}
					>
						<input type="hidden" name="form-name" value="contact" />
						<input
							name="name"
							className={styles.input}
							type="text"
							placeholder="Enter your name"
							{...register('name')}
						/>
						<input
							name="email"
							className={styles.input}
							type="email"
							placeholder="Enter email*"
							{...register('email', { required: true })}
						/>
						{errors.email && (
							<div className={styles.error}>
								<img src={error} alt="error" />
								<p>This is a required field</p>
							</div>
						)}
						<button className={styles.button} type="submit">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Form;

