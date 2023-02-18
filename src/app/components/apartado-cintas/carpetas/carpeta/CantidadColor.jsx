import { useContext, useState, useEffect } from 'react';
import { DatosContext } from '../../../../../hooks/storeProvider';
import { motion } from 'framer-motion';

export const CantidadColor = ({ idCarpeta }) => {
	const { datos } = useContext(DatosContext);
	const nombreColor = datos.carpetas[idCarpeta]?.nombreColor
	const cantidadColor = datos.carpetas[idCarpeta]?.cantidad
	const longitudNombreColor = nombreColor?.length

	const [agrandar, setAgrandar] = useState(false) 
	const [cantidad, setCantidad] = useState('')
	const [nombreColorState, setNombreColor] = useState('')

	useEffect(() => {
		setNombreColor(nombreColor)
		setCantidad(cantidadColor)
	},
		[nombreColor, cantidadColor]
	)


	const variants = {
        visible: {
            position: 'absolute',
			width:
				agrandar ? '100%' : 
				((longitudNombreColor >= 6 && longitudNombreColor <= 8) && ('60%')) ||
				((longitudNombreColor >= 9 && longitudNombreColor <= 12) && ('75%')) ||
				(longitudNombreColor >= 13 && '85%'),
			height: agrandar ? '100%' : 'auto',
			border: agrandar ? '0px solid transparent'  : '2px solid var(--color-1)',
			borderRadius: agrandar ? 0 : (longitudNombreColor > 10 ? '10px' : '50px'),
			'text-justify': 'center',
			placeSelf: 'center',
			placeItems: 'center',
			padding: '5px',
			color: datos.carpetas[idCarpeta]?.colorBooleano ? '#000' : '#fff',
			'white-space': 'nowrap',
			transition: { duration: 0.3, delay: 0.1, type: 'spring', },
			background: datos.carpetas[idCarpeta]?.colorCarpeta,
			transform: 'scale(1)',
			fontSize:
				((longitudNombreColor >= 6 && longitudNombreColor <= 8) && ('20px')) ||
				((longitudNombreColor >= 9 && longitudNombreColor <= 12) && ('18px')) ||
				(longitudNombreColor >= 13 && '16px'),
			fontWeight: 800,

			display: 'grid'
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};

	return (
		<motion.h3 variants={ variants }
		initial={{
			...variants.visible,
			transform: 'scale(0)',}}
		animate="visible"
		whileTap="tap"
		onClick={() => {
			setAgrandar(!agrandar)
			}}
		>
			{nombreColorState}: { cantidad }
		</motion.h3>
	);
};
