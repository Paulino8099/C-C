import { Cabecera } from './components/cabecera/Cabecera';
import { Apartado } from './components/cabecera/apartado/Apartado';
import { ModalConfirmacion } from './components/universal/modalConfirmacion/ModalConfirmacion';
import { ModalMenuColores } from './components/modalMenuColores/ModalMenuColores';
import StoreProvider from '../hooks/storeProvider';
import { motion } from 'framer-motion';
import { FondoOpacado } from './FondoOpacado';

export function App() {
	const variants = {
		hidden: {},
		visible: {
			width: '100vw',
			height: '100vh',

			display: 'grid'
		}
	};

	return (
		<StoreProvider>
			<motion.div variants={variants} initial="hidden" animate="visible">
				<FondoOpacado />
				<ModalMenuColores />
				<ModalConfirmacion />
				<Cabecera />
				<Apartado />
			</motion.div>
		</StoreProvider>
	);
}
