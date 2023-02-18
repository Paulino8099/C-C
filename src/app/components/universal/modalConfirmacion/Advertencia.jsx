import { IoIosWarning } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Descripcion } from './Descripcion';
export const Advertencia = () => {
	const variants = {
		hidden: {},
		visible: {
			background: 'var(--color-1)',
			borderRadius: '15px',
			color: '#ff8300',
			fontSize: '58px',
			fontWeight: 800,
			justifyItems: 'center',
			placeSelf: 'center',
			position: 'absolute',
			textAlign: 'center',
			width: '75%',

			display: 'grid'
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};

	return (
		<motion.span variants={variants} initial="hidden" animate="visible" whileTap="tap">
			<IoIosWarning />
			{<Descripcion />}
		</motion.span>
	);
};
