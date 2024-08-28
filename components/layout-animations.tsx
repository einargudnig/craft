'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function LayoutAnimation() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="sticky pl-2 pt-1">
				<p className="text-xs text-muted-foreground">Animations on the web #2</p>
			</div>
			<div className="w-full h-48 flex justify-center items-center">
				<motion.div
					onClick={() => setIsOpen((s) => !s)}
					className="bg-teal-100 rounded-md border-2 border-teal-700 z-30"
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
