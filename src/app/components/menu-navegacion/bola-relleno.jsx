import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';

export const BolaRelleno = () => {
	const { datos } = useContext(DatosContext)
	const variants = {
		visible: {
			borderRadius: '50%',
			position: 'absolute',
			width: '110px',
			height: '110px',
			right: '-55px',
			top: '-55px',
			background: 'var(--color-3)',
			transition: .3,

			display: 'grid'
		},
		noVisible: {
			borderRadius: '50px',
			position: 'absolute',
			width: '0',
			height: '0',
			right: '-55px',
			top: '-55px',
			background: 'var(--color-3)',
			transition: '.3s',

			display: 'grid'
		}
	};

	return <motion.span variants={variants} hidden="noVisible" animate={datos.menuNavegacion ? 'visible' : 'noVisible'} />;
};
