import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Fingerprint, Bolt, Info, CircleUserRound, CircleDollarSign } from 'lucide-react';

export function TabsComponent() {
	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="w-full h-48 flex justify-center items-center">
				<Tabs defaultValue="general" className="w-[600px]">
					<TabsList className="grid w-full grid-cols-5">
						<TabsTrigger value="general">
							<div className="flex items-center">
								<Bolt color={'white'} size={20} />
							</div>
						</TabsTrigger>
						<TabsTrigger value="about">
							<Info color={'white'} size={20} />
							<p className="ml-2 text-white">About</p>
						</TabsTrigger>
						<TabsTrigger value="billing">
							<CircleDollarSign color={'white'} size={20} />
						</TabsTrigger>
						<TabsTrigger value="privacy">
							<Fingerprint color={'white'} size={20} />
						</TabsTrigger>
						<TabsTrigger value="profile">
							<CircleUserRound color={'white'} size={20} />
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
		</div>
	);
}
