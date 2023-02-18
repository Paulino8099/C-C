import { Carpeta } from './carpeta/carpeta';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { DatosContext } from '../../../../hooks/storeProvider';

export const Carpetas = () => {
	const { datos } = useContext(DatosContext)
	const [carpetas, setCarpetas] = useState(datos.carpetas)

	useEffect(() => {
		setCarpetas(datos.carpetas)
	}, [datos.carpetas])

	const variants = {
		hidden: {},
		visible: {
			background: 'var(--color-5)',
			borderRadius: '15px',
			height: '90%',
			overflowY: 'auto',
			position: 'absolute',
			width: '100%',

			display: 'grid',
			gridTemplateColumns: 'repeat(2, minmax(auto, 100%))'
		},
		exit: {
			transform: 'scale(0)',
			transition: { duration: 0.2, type: 'string' }
		}
	};

	return (
		<motion.ul
			id="carpetas"
			variants={variants}
			initial="visible"
			animate="visible"
		>
			<AnimatePresence>
				{carpetas?.map((carpeta) => (
				<Carpeta
					idCarpeta={carpeta.id}
					colorFondo={carpeta.color}
					cantidad={carpeta.cantidad}
					key={carpeta.id}
				/>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};
