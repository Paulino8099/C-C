// react
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';
import { TituloOpcion } from './TituloOpcion';

//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????

export const Opcion = ({ nombreOpcion, icono, id }) => {
	const { datos } = useContext(DatosContext);

	const variants = {
		hidden: {},
		visible: {
			'align-items': 'center',
			fontSize: '23px',
			transform: `scale(${datos.menuNavegacion ? 1 : 0})`,
			justifySelf: 'center',
			'justify-content': 'space-between',
			color: 'var(--color-3)',
			width: '80%',
			transition: { duration: 0.3, delay: id * 0.09, type: 'spring' },

			display: 'flex'
		}
	};
	return (
		<motion.li variants={variants} initial="origin" animate="visible" whileTap="tap" key={id} id={id}>
			{icono}
			<TituloOpcion nombreOpcion={nombreOpcion} />
		</motion.li>
	);
};