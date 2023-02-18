import { useContext } from 'react';
import { DatosContext } from '../../../../hooks/storeProvider';
import { BtnOcultar } from '../BtnOcultar';
import { Advertencia } from './Advertencia';
import { BtnSi } from '../BtnSi';
import { BtnNo } from '../BtnNo';
import { motion } from 'framer-motion';

export const ModalConfirmacion = ({ idCarpeta }) => {
	const { datos, setDatos } = useContext(DatosContext);

	const variants = {
		visible: {
			background: 'linear-gradient(90deg, var(--color-6), var(--color-4))',
			borderRadius: '15px',
			boxShadow: '0 0 10px var(--color-2)',
			height: '50vw',
			overflow: 'hidden',
			placeSelf: 'center',
			position: 'fixed',
			transform: datos.modalConfirmacion.visible ? 'scale(1)' : 'scale(0)',
			transition: { duration: 0.3 },
			width: '75vw',
			zIndex: 5000,

			display: 'grid'
		}
	};

	return (
		<motion.div variants={variants} initial="visible" animate="visible">
			<BtnOcultar
				onclick={() => {
					setDatos({
						...datos,
						modalConfirmacion: false,
						fondoOpacado: false
					});
				}}
			/>
			<Advertencia />
			<BtnNo />
			<BtnSi />
		</motion.div>
	);
};
