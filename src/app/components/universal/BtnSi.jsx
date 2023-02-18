import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

export const BtnSi = ({ idCarpeta }) => {
	const { datos } = useContext(DatosContext);

	const variants = {
		visible: {
			'align-items': 'center',
			'align-self': 'flex-end',
			borderRadius: '15px',
			'justify-content': 'space-evenly',
			justifySelf: 'center',
			'margin-bottom': '3%',
			'margin-right': '-65px',
			background: 'var(--color-1)',
			color: '#00ff00',
			height: datos.modalConfirmacion ? '20px' : 0,
			padding: datos.modalConfirmacion ? '3px 5px' : 0,
			position: 'absolute',
			transform: 'scale(1)',
			transition: { duration: 0.1 },
			width: datos.modalConfirmacion ? '50px' : 0,
            fontSize: '18px',

			display: 'flex'
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};
	
	return (
		<motion.div
			variants={variants}
			initial="hidden"
			whileTap="tap"
			animate="visible"
			onClick={datos.accionBtnSi}
		>
			<HiOutlineCheckCircle /> <h3>Sí</h3>
		</motion.div>
	);
};
