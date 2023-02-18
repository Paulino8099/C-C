// react
import { listaOpciones } from './listaOpciones';
import { Opcion } from './Opcion';
import { motion } from 'framer-motion';

export const Opciones = () => {

	const variants = {
		hidden: {},
		visible: {
			listStyle: 'none',
			'margin-top': '75px',
			gap: '2vw',
			height: 'min-content',
			width: '100%',
			transition: { duration: 0.3, type: 'string'},

			display: 'grid'
		}
	};

	return (
		<motion.ul variants={variants} initial="origin" animate="visible">
			{listaOpciones.map((opcion) => (
				<Opcion icono={opcion.icono} nombreOpcion={opcion.nombreOpcion} id={opcion.id} key={opcion.id} />
			))}
		</motion.ul>
	);
};
