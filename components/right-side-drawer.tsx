'use client';

import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';

import { Separator } from './ui/separator';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export function RightSideDrawer() {
	const [showData, setShowData] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const allowUsers = ['einargudnig@gmail.com', 'user@example.com'];

	const formSchema = z.object({
		email: z.string()
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: ''
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		if (allowUsers.includes(values.email)) {
			console.log('User can see more data!');
			setShowData(true);
			setIsSuccess(true);
		}
		console.log(values);
	}

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="w-full h-48 flex justify-center items-center">
				<Sheet>
					<SheetTrigger asChild>
						<Button variant="outline">Open</Button>
					</SheetTrigger>
					<SheetContent>
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								<SheetHeader>
									<SheetTitle>Invite stakeholder</SheetTitle>
									<SheetDescription>
										Invite your stakeholder to the project. If he does not have
										an account you can send him an invite
									</SheetDescription>
									<Separator />
								</SheetHeader>
								<div className="mb-6 mt-4">
									<div>
										<FormField
											control={form.control}
											name="email"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Email</FormLabel>
													<FormControl>
														<Input
															placeholder="stakeholder@example.com"
															{...field}
														/>
													</FormControl>
												</FormItem>
											)}
										/>
									</div>
									{isSuccess ? (
										<div className="mt-4">
											<p className="text-green-300/50 text-sm">
												User was found!
											</p>
											<p className="mt-2 text-sm">
												You can add him to a project!
											</p>
										</div>
									) : null}
								</div>
								{showData ? null : (
									<SheetFooter>
										<div className="flex justify-between w-full">
											<SheetClose asChild>
												<Button>Cancel</Button>
											</SheetClose>
											<Button type="submit">Invite user</Button>
										</div>
									</SheetFooter>
								)}
							</form>
						</Form>
						{showData ? (
							<div>
								<div>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Select a fruit" />
										</SelectTrigger>
										<SelectContent>
											<SelectGroup>
												<SelectLabel>Fruits</SelectLabel>
												<SelectItem value="apple">Apple</SelectItem>
												<SelectItem value="banana">Banana</SelectItem>
												<SelectItem value="blueberry">Blueberry</SelectItem>
												<SelectItem value="grapes">Grapes</SelectItem>
												<SelectItem value="pineapple">Pineapple</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
								<div>
									<div>
										<Select>
											<SelectTrigger>
												<SelectValue placeholder="Select a fruit" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectLabel>Fruits</SelectLabel>
													<SelectItem value="apple">Apple</SelectItem>
													<SelectItem value="banana">Banana</SelectItem>
													<SelectItem value="blueberry">
														Blueberry
													</SelectItem>
													<SelectItem value="grapes">Grapes</SelectItem>
													<SelectItem value="pineapple">
														Pineapple
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</div>
								</div>
							</div>
						) : null}
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
