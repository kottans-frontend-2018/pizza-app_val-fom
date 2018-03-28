import './user-info.scss';

import { AUTH_SERVICE } from '../../api/auth-login-service';
import { parseHTML } from '../../utils';
import { Component } from '../../framework/';

export default class UserInfo extends Component {
	constructor(props) {
		super(props);

		this.host = document.createElement('div');
		this.host.classList.add('user-info__container');

		// console.log(AUTH_SERVICE.username);
	}

	render() {
		const { userData } = this.props;

		if (!userData) return '';

		const html = `
			<table class="user-info__table">
				<caption>User Info</caption>
				<tbody id="table">
				</tbody>
			</table>
			<div class="user-info__button-wrapper">
				<a href="#/" class="button user-info__button">Pizza List</a>
				<a href="#/logout" 
					class="button user-info__button button--red">
					Log out
				</a>
			</div>
		`;

		const fragment = parseHTML(html);
		const table = fragment.getElementById('table');

		for (let key in userData) {
			const row = parseHTML(`
					<tr>
						<td>${key}:</td>
						<td>${userData[key]}</td>
					</tr>
				`);
			table.append(row);
		}

		return fragment;
	}
}
