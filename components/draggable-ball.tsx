'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export function DraggableBall() {
	const boundingBox = useRef(null);
	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="sticky pl-2 pt-1">
				<p className="text-xs text-muted-foreground">Animations on the web #6</p>
			</div>
			<div ref={boundingBox} className="w-full h-48 flex justify-center items-center">
				<motion.div
					drag
					dragConstraints={boundingBox}
					dragMomentum={false}
					className="size-10 rounded-full bg-gray-300"
				/>
			</div>
		</div>
	);
}
