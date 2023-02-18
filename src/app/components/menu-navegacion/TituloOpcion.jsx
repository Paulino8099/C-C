import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';

export const TituloOpcion = ({ nombreOpcion }) => {
	const { datos, setDatos } = useContext(DatosContext);

	const h3Variants = {
		hidden: {},
		visible: {
			borderRadius: '10px',
			background: 'var(--color-3)',
			border: '1px solid var(--color-3)',
			padding: '0 5px',
			width: '70%',
			color: 'var(--color-2)',
			transform: 'scale(1)'
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};

	return (
		<motion.h3
			variants={h3Variants}
			initial="hidden"
			animate="visible"
			whileTap="tap"
			onClick={() => {
				setDatos({ ...datos, identificadorApartado: nombreOpcion });
			}}
		>
			{nombreOpcion}
		</motion.h3>
	);
};
