import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../../hooks/storeProvider';

export const Descripcion = () => {
    const {datos} = useContext(DatosContext)
	const variants = {
		visible: {
			background: 'linear-gradient(90deg, var(--color-6), var(--color-4))',
			fontSize: '18px',
			webkitBackgroundClip: 'text',
			webkitTextFillColor: 'transparent'
		}
    };
    
	return (
		<motion.h3 variants={variants} initial="hidden" animate="visible" whileTap="tap">
			{datos.modalConfirmacion.descripcion}
		</motion.h3>
	);
};
