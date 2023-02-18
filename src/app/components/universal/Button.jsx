import { motion } from 'framer-motion';

const variants = {
	hidden: {},
	visible: {
		'align-items': 'center',
		'align-self': 'flex-end',
		borderRadius: '10px',
		fontSize: '20px',
		'justify-content': 'space-around',
		placeItems: 'center',
		animation: 'animacion_apartados .5s linear',
		background: 'linear-gradient(90deg, var(--color-6), var(--color-4))',
		border: 'none',
		color: 'var(--color-1)',
		height: '100%',
		opacity: 1,
		outline: 'none',
		transform: 'scale(1)',
		transition: { duration: 0.3, ease: 'linear' },
		width: '100%',

		display: 'flex'
	},
	tap: {
		transform: 'scale(0.95)',
		transition: { duration: 0.01 }
	}
};

export const Button = ({ children, onclick }) => {
	return (
		<motion.button variants={variants} initial="hidden" animate="visible" whileTap="tap" onClick={onclick}>
			{children}
		</motion.button>
	);
};
