import './register-form.scss';

import { Component } from '../../framework';
import { getStoreList, createUser } from '../../utils/api';
import { errorHandler } from '../../utils/';

export default class RegisterForm extends Component {
	constructor() {
		super();

		this.state = {
			stores: [],
		}

		this.host = document.createElement('div');
		this.host.classList.add('login-form__container');

		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.getStores();
	}

	getStores() {
		return getStoreList()
			.then(stores => this.updateState({ stores }));
	}

	handleSubmit(ev) {
		ev.preventDefault();
		const userData = {
			username: ev.target.username.value,
			password: ev.target.password.value,
			password_repeat: ev.target.password_repeat.value,
			email: ev.target.email.value,
			store_id: +ev.target.store_id.value,
			store_password: ev.target.store_password.value,
		};

		return createUser(userData)
			.then(res => {
				if (res.success) {
					// redirect to '/login'
				} else {
					errorHandler(res);
				}
			})
			.catch(console.error);
	}

	render() {
		const { stores } = this.state;

		const options = stores.map(store => {
			let selected = '';
			if (store.id == 2) selected = 'selected';
			return `<option value="${store.id}" ${selected}>${store.name}</option>`;
		}).join('');

		return `
<form class="register-form" method="post">
	<label for="username">Username:</label>
	<input type="text" class="register-form__name" name="username" id="username" required>
	<label for="email">Email:</label>
	<input type="email" class="register-form__email" name="email" id="email" required>
	<label for="password">Password:</label>
	<input type="password" class="register-form__password" name="password"
		id="password" required>
	<label for="password_repeat">Confirm password:</label>
	<input type="password" class="register-form__password" name="password_repeat"
		id="password_repeat" required>
	<label for="store_id">Choose your store:</label>
	<select class="register-form__store_id" name="store_id"
		id="store_id" required>
		${options}
	</select>
	<label for="store_password">Store password:</label>
	<input type="password" class="register-form__store_password" name="store_password"
		id="store_password" required>
	<input type="submit" class="button register-form__button button--register"
		value="Sign up">
</form>
		`;
	}
}
