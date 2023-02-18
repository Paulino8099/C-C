import { useContext } from 'react'; // react
import { DatosContext } from '../../../hooks/storeProvider';
import { motion } from 'framer-motion';
import { MdDeleteForever } from 'react-icons/md';

export const BtnBorrar = ({ idCarpeta }) => {
	const { datos, setDatos } = useContext(DatosContext);


	const variants = {
		visible: {
			position: 'absolute',
			width: '22px',
			height: '22px',
			margin: '3%',
			border: '2px solid var(--color-1)',
			background: 'radial-gradient(var(--color-6), var(--color-4))',
			color: 'var(--color-1)',
			transform: `scale(1)`,
			borderRadius: '50px',
			justifySelf: 'flex-end',
			placeItems: 'center',
			
			display: 'grid',
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};

	return (
		<motion.span
			variants={variants}
			initial="hidden"
			animate="visible"
			whileTap="tap"
			onClick={ ()=>{
				datos.carpetas.splice(idCarpeta, 1)
				setDatos({
					...datos,
					modalMenuColores: false, 
					// carpetas: removiendoCarpetaSeleccionada,
					// modalConfirmacion: {visible: !datos.modalConfirmacion, descripcion: '¿Borrar Permanentemente?'},
				});
			}}
		>
			<MdDeleteForever />
		</motion.span>
	);
};
