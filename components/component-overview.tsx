import Link from 'next/link';

export function ComponentOverview() {
	return (
		<div className="top-0 left-0 absolute z-10 opacity-10 hover:opacity-100 p-4 border border-1 rounded-md">
			<div className="flex flex-col">
				<div className="flex flex-col">
					<div className="my-2">
						<p className="font-mono">Backlog</p>
					</div>
					<ul className="text-sm"></ul>
				</div>
				<div className="flex flex-col">
					<div className="my-2">
						<p className="font-mono">Todo</p>
					</div>
					<ul className="text-sm">
						<li>
							<ListItemWithLink
								href="https://x.com/wickedmishra/status/1826273055653453853"
								text="Family's fluid bottom"
							/>
						</li>
					</ul>
					<ul className="text-sm"></ul>
				</div>
				<div className="flex flex-col">
					<div className="my-2">
						<p className="font-mono">In progress</p>
					</div>
					<ul className="text-sm">
						<li>Drawer #1</li>
					</ul>
				</div>
				<div className="flex flex-col">
					<div className="my-2">
						<p className="font-mono">Done</p>
					</div>
					<ul className="text-sm">
						<li>Animations on the web #1</li>
						<li>Animations on the web #2</li>
						<li>Animations on the web #3</li>
						<li>Animations on the web #4</li>
						<li>Animations on the web #5</li>
						<li>Animations on the web #6</li>
						<li>Animations on the web #7</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

function ListItemWithLink({ href, text }: { href: string; text: string }) {
	return (
		<Link href={href} className="hover:text-cyan">
			{text}
		</Link>
	);
}
