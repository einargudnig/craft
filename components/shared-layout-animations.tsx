'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function SharedLayoutAnimation() {
	const [showSecond, setShowSecond] = useState(false);
	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="sticky pl-2 pt-1">
				<p className="text-xs text-muted-foreground">Animations on the web #3</p>
			</div>
			<div className="w-full h-48 flex justify-center items-center">
				<div className="mx-4 flex flex-col items-center">
					<motion.button
						className="h-10 px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
						layout
						onClick={() => setShowSecond((s) => !s)}
					>
						Animate
					</motion.button>

					{showSecond ? (
						<motion.div
							layoutId="rectangle"
							className="h-24 w-24 bg-[#fad658] rounded-md"
							style={{ borderRadius: 12 }}
						/>
					) : (
						<motion.div
							layoutId="rectangle"
							className="h-12 w-12 bg-[#fad658] rounded-md"
							style={{ borderRadius: 12 }}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
