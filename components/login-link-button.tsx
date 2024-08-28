'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export function LoginLinkButton() {
	const [buttonState, setButtonState] = useState('idle');

	const buttonCopy = {
		idle: 'Send me a login link',
		// loading: <ClipLoader color={'white'} loading />,
		loading: 'Loading...',
		success: 'Login link sent'
	};

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="sticky pl-2 pt-1">
				<p className="text-xs text-muted-foreground">Animations on the web #4</p>
			</div>
			<div className="w-full h-48 flex justify-center items-center">
				<button
					disabled={buttonState === 'loading'}
					className="rounded-lg font-semibold text-[13px] bg-blue-500 overflow-hidden h-8 w-[148px] px-2 shadow"
					onClick={() => {
						if (buttonState === 'success') return;

						setButtonState('loading');
						setTimeout(() => {
							setButtonState('success');
						}, 1750);

						setTimeout(() => {
							setButtonState('idle');
						}, 3500);
					}}
				>
					<AnimatePresence mode="popLayout" initial={false}>
						<motion.span
							className="text-white font-bold w-full"
							transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
							initial={{ opacity: 0, y: -25 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 25 }}
							key={buttonState}
						>
							{buttonCopy[buttonState as keyof typeof buttonCopy]}
						</motion.span>
					</AnimatePresence>
				</button>
			</div>
		</div>
	);
}
