import { clsx } from 'clsx';
import './spinner.css';

const bars = Array(12).fill(0);

export function Spinner({ color, size = 20 }: { color: string; size?: number }) {
	return (
		<div
			className="wrapper"
			style={{
				width: `${size}px`,
				height: `${size}px`,
				color: `${color}`
			}}
		>
			<div className="spinner">
				{bars.map((_, i) => (
					<div className="bar" key={`spinner-bar-${i}`} />
				))}
			</div>
		</div>
	);
}
