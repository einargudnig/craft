'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export function LayoutAnimation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="w-full h-48 flex justify-center items-center">
				<motion.div
					onClick={() => setIsOpen((s) => !s)}
					className="bg-teal-100 rounded-md border-2 border-teal-700"
					style={
						isOpen
							? { position: 'fixed', inset: 0, width: '100%', height: '100%' }
							: { width: '25%', height: '25%' }
					}
					layout
				></motion.div>
			</div>
		</div>
	);
}
