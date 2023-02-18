import { motion } from 'framer-motion';

export const Logo = () => {
	const variants = {
		hidden: {},
		visible: {
			width: '75px',
			height: '30px',
			'margin-top': '5px',
			'margin-left': '5px',
			'align-self': 'flex-start',

			'grid-column': 1 / 2,
			'grid-row': 1 / 9
		},
		active: {}
	};

	return (
		<motion.img
			variants={variants}
			initial="visible"
			animate="visible"
			src="./img/svg/logo.svg"
			alt="logo-cintix"
		/>
	);
};
