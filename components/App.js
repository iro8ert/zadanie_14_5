var contacts = [
	{
		id: 1, 
		firstName: 'Robert',
		lastName: 'Nowaczyk',
		email: 'robert_nowaczyk@o2.pl',
	},
	{
		id: 2,
		firstName: 'Jan',
		lastName: 'Kowalski',
		email: 'kowalski@jan.pl',
	},
	{
		id: 3,
		firstName: 'Adam',
		lastName: 'Nowak',
		email: 'nowak@nowakadam.pl',
	},
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: '',
};



var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts}, {})
			)
		)
	}
});

