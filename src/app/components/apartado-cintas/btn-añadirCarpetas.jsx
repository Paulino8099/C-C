import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';
import { Button } from '../universal/Button';
import { motion } from 'framer-motion';
import { AiFillFolderAdd } from 'react-icons/ai';

export const BtnAñadirCarpetas = () => {
	const { datos, setDatos } = useContext(DatosContext);
	const variants = {
		hidden: {},
		visible: {
			'justify-self': 'flex-end',
			right: '5px',
			bottom: '5px',
			height: '40px',
			overflow: 'hidden',
			placeItems: 'center',
			position: 'absolute',
			transition: { duration: 0.3 },
			width: '150px',

			display: 'grid'
		}
	};

	function AñadiendoCarpetas() {
		datos.carpetas.push({
			colorCarpeta: '#000',
			id: datos.carpetas.length,
			nombreColor: 'Negro',
			cantidad: 1,
			idColor: ''
		});

		setDatos({
			...datos,
			carpetas: datos.carpetas
		});
	}

	function ActualizarScroll() {
		const scroll = document.getElementById('carpetas');

		scroll.scrollTop = scroll.scrollHeight;
	}

	return (
		<motion.div variants={variants} initial="hidden" animate="visible">
			<Button
				onclick={() => {
					ActualizarScroll();
					AñadiendoCarpetas();
				}}
			>
				<h3>Añadir</h3>
				<AiFillFolderAdd />
			</Button>
		</motion.div>
	);
};
