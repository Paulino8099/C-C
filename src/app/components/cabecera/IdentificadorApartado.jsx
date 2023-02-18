import { useContext, useEffect } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../universal/Button';

export const IdentificadorApartado = () => {
	const { datos } = useContext(DatosContext);
	const [nombre, setNombre] = useState('Cintas')

	useEffect(() => {
		setNombre(datos.identificadorApartado)
	}, [datos.identificadorApartado])

	const spanVariants = {
		hidden: {},
		visible: {
			bottom: '5px',
			height: '30px',
			left: '5px',
			placeItems: 'center',
			position: 'absolute',
			transition: { duration: 0.1 },
			width: '75px',

			display: 'grid'
		}
	};

	return (
		<motion.div variants={spanVariants} initial="visible" animate="visible">
			<Button>
				<h3>{nombre }</h3>
			</Button>
		</motion.div>
	);
};
