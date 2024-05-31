'use client';

import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import useMeasure from 'react-use-measure';

export function FakeDrawer() {
	const [showExtraContent, setShowExtraContent] = useState(false);
	const [elementRef, bounds] = useMeasure();

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="w-full h-[384px] flex justify-center items-center">
				<div className="flex flex-col items-center justify-start">
					<Button variant="outline" onClick={() => setShowExtraContent((b) => !b)}>
						Toggle height
					</Button>

					<motion.div
						className="bg-white rounded-md w-[320px] flex flex-col gap-2 overflow-hidden mt-10"
						animate={{ height: bounds.height }}
					>
						<div ref={elementRef} className="px-[13px] py-4">
							<h1 className="font-semibold text-black">Fake Family Drawer</h1>

							<p className="text-[#63635d]">
								This is a fake family drawer. Animating height is tricky, but
								satisfying when it works.
							</p>
							{showExtraContent ? (
								<p className="text-[#63635d] mt-1">
									This extra content will change the height of the drawer. Some
									even more content to make the drawer taller and taller and
									taller...
								</p>
							) : null}
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
