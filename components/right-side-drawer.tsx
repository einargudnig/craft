'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/components/ui/sheet';
// import { Toast,  } from './ui/toast';

import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Control, FieldValues, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Separator } from './ui/separator';

const projects = [
	{
		id: 1,
		name: 'project 1',
		tasks: [
			{
				id: 1,
				name: 'task 1'
			},
			{
				id: 1,
				name: 'task 1'
			},
			{ id: 1, name: 'task 1' }
		]
	},
	{
		id: 2,
		name: 'project 2',
		tasks: [
			{
				id: 1,
				name: 'task 1'
			},
			{
				id: 1,
				name: 'task 1'
			},
			{ id: 1, name: 'task 1' }
		]
	},
	{
		id: 3,
		name: 'project 3',
		tasks: [
			{
				id: 1,
				name: 'task 1'
			},
			{
				id: 1,
				name: 'task 1'
			},
			{ id: 1, name: 'task 1' }
		]
	},
	{
		id: 4,
		name: 'project 4',
		tasks: [
			{
				id: 1,
				name: 'task 1'
			},
			{
				id: 1,
				name: 'task 1'
			},
			{ id: 1, name: 'task 1' }
		]
	}
];

export function RightSideDrawer() {
	const [showData, setShowData] = useState(false);
	const [showTopFooter, setShowTopFooter] = useState(true);
	const [isSuccess, setIsSuccess] = useState(false);
	const [sendInvite, setSendInvite] = useState(false);
	const [selectedProject, setSelectedProject] = useState('');

	const allowUsers = ['einargudnig@gmail.com', 'user@example.com'];

	const formSchema = z.object({
		email: z.string(),
		selectedProject: z.string()
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: '',
			selectedProject: selectedProject
		}
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		if (allowUsers.includes(values.email)) {
			console.log('User can see more data!');
			setShowData(true);
			setIsSuccess(true);
			setShowTopFooter(false);
			console.log('values in happy path', { values });
		} else {
			console.log('User not found, send him invite');
			setSendInvite(true);
			setShowTopFooter(false);
		}
	}

	// trigger a toast after 2 seconds with email send text. close the drawer
	function sendEmail() {
		setTimeout(() => console.log('timer'), 1000);
	}

	return (
		<div className="border border-1 rounded-md bg-black/60">
			<div className="sticky pl-2 pt-1">
				<p className="text-xs text-muted-foreground">Drawer #1</p>
			</div>
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
															type="email"
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
												Start by selecting project below!
											</p>
										</div>
									) : null}
									{sendInvite ? (
										<>
											<div className="mt-6">
												<p className="text-sm">
													The user you searched for was not found. Do you
													want to send him an email and invite him to
													create an account?
												</p>
											</div>
											<SheetFooter className="mt-6">
												<div className="flex justify-between w-full">
													<SheetClose asChild>
														<Button variant={'outline'}>Cancel</Button>
													</SheetClose>
													<Button>Send email</Button>
												</div>
											</SheetFooter>
										</>
									) : null}
								</div>
								{showTopFooter ? (
									<SheetFooter>
										<div className="flex justify-between w-full">
											<SheetClose asChild>
												<Button variant={'outline'}>Cancel</Button>
											</SheetClose>
											<Button type="submit">Search for user</Button>
										</div>
									</SheetFooter>
								) : null}

								{showData ? (
									<div>
										<FormField
											control={
												form.control as unknown as Control<FieldValues>
											}
											name="selectedProject"
											render={({ field }) => (
												<FormItem>
													<FormLabel>Projects</FormLabel>
													<Select
														onValueChange={field.onChange}
														defaultValue={field.value}
													>
														<FormControl>
															<SelectTrigger>
																<SelectValue placeholder="Select a project..." />
															</SelectTrigger>
														</FormControl>
														<SelectContent>
															{projects.map((project) => (
																<SelectItem
																	key={project.id}
																	value={project.name}
																	onSelect={() =>
																		setSelectedProject(
																			project.name
																		)
																	}
																>
																	{project.name}
																</SelectItem>
															))}
														</SelectContent>
													</Select>
												</FormItem>
											)}
										/>

										<SheetFooter className="mt-4">
											<div className="flex justify-between w-full">
												<SheetClose asChild>
													<Button variant={'outline'}>Cancel</Button>
												</SheetClose>
												{selectedProject ? (
													<Button type="submit">
														Invite user to project
													</Button>
												) : null}
											</div>
										</SheetFooter>
									</div>
								) : null}
							</form>
						</Form>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	);
}
