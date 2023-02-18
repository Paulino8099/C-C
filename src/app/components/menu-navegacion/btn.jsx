import { motion } from 'framer-motion';
import { useContext } from 'react';
import { DatosContext } from '../../../hooks/storeProvider';

//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????
//?????????????????????????????????????????????????????????????????

export const Btn = () => {
	const { datos, setDatos } = useContext(DatosContext);

	const variants = {
		hidden: {},
		div: {
			zIndex: 100,
			gap: '33%',
			height: '40px',
			position: 'absolute',
			rigth: '4px',
			top: '4px',
			transform: 'scale(1)',
			transition: { duration: 0.2 },
			width: '40px',

			'flex-direction': 'column',
			display: 'flex'
		},
		span1: {
			borderRadius: '5px',
			'margin-left': '2px',
			background: datos.menuNavegacion ? 'var(--color-6)' : 'var(--color-1)',
			transform: datos.menuNavegacion ? 'translate(0, 18px) rotateZ(45deg)' : 'translate(0px, 0px) rotateZ(0deg)',
			height: '5px',
			width: '35px',
			transition: { duration: 0.2 }
		},
		span2: {
			borderRadius: '5px',
			'margin-left': '2px',
			background: datos.menuNavegacion ? 'var(--color-6)' : 'var(--color-1)',
			transform: datos.menuNavegacion ? 'rotateZ(45deg)' : 'rotateZ(0deg)',
			height: '5px',
			width: '35px',
			transition: { duration: 0.2 }
		},
		span3: {
			borderRadius: '5px',
			'margin-left': '2px',
			background: datos.menuNavegacion ? 'var(--color-6)' : 'var(--color-1)',
			transform: datos.menuNavegacion
				? 'translate(0, -18px) rotateZ(-45deg)'
				: 'translate(0, -0px) rotateZ(0deg)',
			height: '5px',
			width: '35px',
			transition: { duration: 0.2 }
		},
		tap: {
			transform: 'scale(0.9)',
			transition: { duration: 0.1 }
		}
	};

	function onclick() {
		setDatos({
			...datos,
			menuNavegacion: !datos.menuNavegacion,
			fondoOpacado: !datos.menuNavegacion,
			accionFondoOpacado: () => {
				setDatos({
					...datos,
					menuNavegacion: false,
					fondoOpacado: false
				});
			}
		});
	}

	return (
		<motion.div variants={variants} initial="hidden" animate="div" whileTap="tap" onClick={onclick}>
			<motion.span variants={variants} animate="span1" />
			<motion.span variants={variants} hidden="hidden" animate="span2" />
			<motion.span variants={variants} hidden="hidden" animate="span3" />
		</motion.div>
	);
};
