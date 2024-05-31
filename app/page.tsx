import { ThemeToggle } from '@/components/theme-toggle';
import { ComponentContainer } from '@/components/component-container';

import { RightSideDrawer } from '@/components/right-side-drawer';
import { FirstAnimation } from '@/components/first-animation';
import { LayoutAnimation } from '@/components/layout-animations';
import { SharedLayoutAnimation } from '@/components/shared-layout-animations';
import { LoginLinkButton } from '@/components/login-link-button';
import { FakeDrawer } from '@/components/fake-drawer';
import { DraggableBall } from '@/components/draggable-ball';
import { DraggableBall2 } from '@/components/draggable-ball2';

export default function Home() {
	return (
		<section className="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
			<div className="flex items-center justify-between">
				<div className="flex flex-col w-full">
					<div className="flex justify-between mt-2">
						<h1 className="md:text-2xl font-bold">Crafting</h1>
						<ThemeToggle />
					</div>
					<div className="my-4 p-4">
						<p className="text-sm">
							I have seen a lot of cool components floating around twitter, here I
							will recreate them to my best ability.
						</p>
						<p className="text-sm mt-2">
							Where I can I will link to the tweet/original source
						</p>
					</div>

					{/* <div className="mt-4">
						<TabsComponent />
					</div> */}
					<div className="mt-4">
						<RightSideDrawer />
					</div>
					<div className="mt-4">
						<FirstAnimation />
					</div>
					<div className="mt-4">
						<LayoutAnimation />
					</div>
					<div className="mt-4">
						<SharedLayoutAnimation />
					</div>
					<div className="mt-4">
						<LoginLinkButton />
					</div>
					<div className="mt-4">
						<FakeDrawer />
					</div>
					<div className="mt-4">
						<DraggableBall />
					</div>
					<div className="mt-4">
						<DraggableBall2 />
					</div>
				</div>
			</div>
		</section>
	);
}
