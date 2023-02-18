import { motion } from 'framer-motion';

export const Titulo = () => {
	const variants = {
		hidden: {},
		visible: {
			alignSelf: 'center',
			background: 'linear-gradient(90deg, var(--color-4), var(--color-6), var(--color-4), var(--color-6))',
			border: '2px solid var(--color-6)',
			borderRadius: '15px',
			boxShadow: 'inset 0 0 5px #000',
			fontSize: '6.5vw',
			height: 'min-content',
			justifySelf: 'center',
			marginRight: '-30px',
			padding: '2px 7px',
			position: 'absolute',
			textAlign: 'center',
			webkitBackgroundClip: 'text',
			webkitTextFillColor: 'transparent',
			width: 'max-content'
		}
	};

	return (
		<motion.h1 variants={variants} initial="visible" animate="visible" onClick={() => {}}>
			Contabilidad Cintix
		</motion.h1>
	);
};
