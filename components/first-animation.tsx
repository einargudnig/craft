'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

export function FirstAnimation() {
	const [shouldAnimate, setShouldAnimate] = useState(false);

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="w-full h-48 flex justify-center items-center">
				<div className="mx-4 flex flex-col items-center">
					<Button variant="outline" onClick={() => setShouldAnimate((s) => !s)}>
						Animate
					</Button>
					<div className="h-16" />
					<motion.div
						className="w-12 h-12 bg-yellow-300 rounded-md"
						animate={{ scale: shouldAnimate ? 1.5 : 1, y: shouldAnimate ? -40 : 0 }}
					/>
				</div>
			</div>
		</div>
	);
}
