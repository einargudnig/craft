'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

export function DraggableBall() {
	const boundingBox = useRef(null);
	return (
		<div className="border border-1 rounded-md bg-black/60">
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
