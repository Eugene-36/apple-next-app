import style from './style.module.css';

const Button = ({ title, type, link }) => {
	let additionalClass = '';
	if (type === 'outline') {
		additionalClass = style['button--outline'];
	} else {
		additionalClass = style['button--filled'];
	}
	return (
		<a href={link} className={`${style.button} ${additionalClass}`}>
			{title}
		</a>
	);
};

export default Button;
