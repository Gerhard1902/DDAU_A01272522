import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ListComponent extends Component {
	@action onClick(n){
		this.args.button(n);
	}
}
