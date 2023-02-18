import { BolaRelleno } from './bola-relleno';
import { Btn } from './btn';
import { Opciones } from './Opciones';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';

export const MenuNavegacion = () => {
	const { datos } = useContext(DatosContext);

	const variants = {
		initial: {},
		visible: {
			justifyItems: 'flex-end',
			borderRadius: datos.menuNavegacion ? '15px' : '5px',
			zIndex: datos.menuNavegacion && 700,
			background: 'radial-gradient(var(--color-6), var(--color-4))',
			height: datos.menuNavegacion ? '300px' : '48px',
			overflow: 'hidden',
			position: 'absolute',
			right: '5px',
			top: 'calc(75px / 2 - 48px / 2)',
			transition: { duration: 0.3, delay: datos.menuNavegacion ? 'box-shadow 3' : 'box-shadow 0' },
			width: datos.menuNavegacion ? '200px' : '40px',

			display: 'grid'
		}
	};

	return (
		<motion.div variants={variants} initial="visible" animate="visible">
			<BolaRelleno />
			<Btn />
			<Opciones />
		</motion.div>
	);
};
