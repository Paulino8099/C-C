import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';
import { Colores } from './colores';
import { BtnOcultar } from '../universal/BtnOcultar';
import { motion } from 'framer-motion';

//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????

export const ModalMenuColores = ({ idCarpeta }) => {
	const { datos, setDatos } = useContext(DatosContext);

	const variants = {
		initial: {},
		visible: {
			background: 'linear-gradient(90deg, var(--color-6), var(--color-4))',
			borderRadius: '15px',
			height: '200px',
			justifySelf: 'center',
			marginTop: datos.modalMenuColores ? '50%' : 0,
			overflow: 'hidden',
			position: 'fixed',
			transform: datos.modalMenuColores ? `scale(1)` : 'scale(0)',
			transition: { duration: 0.3 },
			width: '300px',
			zIndex: datos.modalMenuColores && 700,

			display: 'grid'
		}
	};

	return (
		<motion.div variants={variants} initial="visible" animate="visible">
			<BtnOcultar
				onclick={() => {
					setDatos({
						...datos,
						modalMenuColores: false,
						fondoOpacado: false
					});
				}}
			/>
			<Colores idCarpeta={idCarpeta} />
		</motion.div>
	);
};
