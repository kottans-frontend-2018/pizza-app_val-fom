import './create-pizza.scss';

import { parseHTML } from '../../utils';
import { Component } from '../../framework';
import { API_SERVICE } from '../../api';
import Message from '../Message';

export default class CreatePizza extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('pizza__container');

		this.ingredientInputs = null;
		this.sizeInputs = null;

		this.handleFormChange = this.handleFormChange.bind(this);
		this.host.addEventListener('change', this.handleFormChange);
		//TODO: shorten `ev => this.handleSubmit(ev)`
		this.host.addEventListener('submit', ev => this.handleSubmit(ev));

		this.message = new Message();
	}

	handleFormChange(ev) {
		if (!ev.target.matches('[data-canvas]')) return;

		const checkedIngredients = [];
		this.ingredientInputs.forEach(input => {
			if (input.checked) checkedIngredients.push(input.name);
		});

		let size;
		let maxSize = 0;
		this.sizeInputs.forEach(input => {
			if (input.value > maxSize) {
				maxSize = +input.value;
			}
			if (input.checked) {
				size = +input.value;
			}
		});

		this.props.onChange(checkedIngredients, size, maxSize);
	}

	// handleSubmit(ev) {
	// 	ev.preventDefault();
	// 	const pizzaData = {
	// 		username: ev.target.username.value,
	// 		password: ev.target.password.value,
	// 		password_repeat: ev.target.password_repeat.value,
	// 		email: ev.target.email.value,
	// 		store_id: +ev.target.store_id.value,
	// 		store_password: ev.target.store_password.value,
	// 	};

	// 	return API_SERVICE.createPizza(pizzaData)
	// 		.then(response => {
	// 			if (response.success) {
	// 				this.message.update({ response });
	// 				// redirect to '/login'
	// 				setTimeout(() => {
	// 					window.location.hash = '/login';
	// 				}, 1000);
	// 				// TODO: employ callback here. Like so:
	// 				// this.props.onSuccess();
	// 			} else {
	// 				this.message.update({ response });
	// 			}
	// 		})
	// 		.catch(console.error);
	// }

	render() {
		const { ingredients, tags, images } = this.props;

		const html = `
	<form class="create-pizza__form" method="post">
		<label for="pizza-name">Pizza name:</label>
		<input type="text" class="create-pizza__input-text" name="name" id="pizza-name" required min="3" max="24">

		<fieldset>
			<legend class="create-pizza__legend">Pizza size:</legend>
			<div class="create-pizza__fieldset-inner">
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size" value="30" required data-canvas data-size>
					<span class="create-pizza__radio-span">Ø30 cm</span>
				</label>
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size" value="45" required data-canvas data-size>
					<span class="create-pizza__radio-span">Ø45 cm</span>
				</label>
				<label class="create-pizza__radio-label">
					<input class="create-pizza__radio" type="radio" name="size" value="60" checked data-canvas data-size>
					<span class="create-pizza__radio-span">Ø60 cm</span>
				</label>
			</div>
		</fieldset>

		<label for="pizza-description">Description:</label>
		<textarea class="create-pizza__input-text" name="description" id="pizza-description" rows="2"></textarea>
		
		<fieldset>
			<legend class="create-pizza__legend">Ingredients:</legend>
			<div class="create-pizza__fieldset-inner">
			${ingredients.reduce((html, ingredient) => {
				return html += `
					<label class="create-pizza__checkbox-label">
						<input class="create-pizza__checkbox"
							type="checkbox" name="${ingredient.name}"
							value="${ingredient.id}" data-canvas data-ingredient>
						<span class="create-pizza__checkbox-span create-pizza__checkbox-span--ingredient" style="background-image: url(${API_SERVICE.DOMAIN}/${ingredient.image_url})">
							${ingredient.name}
						</span>
					</label>
				`;
			}, '')}
			</div>
		</fieldset>
	
		<fieldset>
			<legend class="create-pizza__legend">Tags:</legend>
			<div class="create-pizza__fieldset-inner">
				${tags.reduce((html, tag) => {
				return html += `
					<label class="create-pizza__checkbox-label">
						<input class="create-pizza__checkbox" type="checkbox" name="${tag.name}">
						<span class="create-pizza__checkbox-span">${tag.name}</span>
					</label>
				`;
			}, '')}
			</div>
		</fieldset>
	
		<div class="create-pizza__button-wrapper">
			<input 
				type="reset" 
				class="button create-pizza__button create-pizza__button--reset" 
				value="Reset Form"
			>
			<input 
				type="submit" 
				class="button create-pizza__button create-pizza__button--submit" 
				value="Create Pizza"
			>
		</div>
	</form>
		`;

		const form = parseHTML(html);
		this.ingredientInputs = form.querySelectorAll('[data-ingredient]');
		this.sizeInputs = form.querySelectorAll('[data-size]');

		return [
			form,
			this.message.update(),
		];
	}
}
