import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../hooks/storeProvider';

export const FondoOpacado = () => {
	const { datos } = useContext(DatosContext);

	const variants = {
		hidden: {},
		visible: {
			zIndex: 500,
			'pointer-events': datos.fondoOpacado ? 'visible' : 'none',
			width: '100vw',
			height: '100vh',
			position: 'fixed',
			transform: 'scale(1)',
			top: 0,
			left: 0,
			background: 'rgba(11, 11, 11, 0.500)',
			opacity: datos.fondoOpacado ? 1 : 0,
			transition: { duration: 1, delay: datos.fondoOpacado ? 0.3 : 0 }
		}
	};

	return (
		<motion.div
			id="FondoOpacado"
			variants={variants}
			initial="visible"
			animate="visible"
			onClick={datos.accionFondoOpacado}
		/>
	);
};
