'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const formSchema = z.object({
    fullName: z.string().min(2, {
        message: "Full name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    company: z.string().min(2, {
        message: "Company name must be at least 2 characters.",
    }),
    message: z.string().min(10, {
        message: "Message must be at least 10 characters.",
    }),
})

export default function ContactUsForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            company: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            console.log(values)
            setIsSubmitting(false)
        }, 2000)
    }

    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark-100 dark:text-light-900">Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} className="bg-light-800 dark:bg-dark-200 text-dark-100 dark:text-light-900" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark-100 dark:text-light-900">Email address</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="john@example.com" {...field} className="bg-light-800 dark:bg-dark-200 text-dark-100 dark:text-light-900" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark-100 dark:text-light-900">Company</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Acme Inc." {...field} className="bg-light-800 dark:bg-dark-200 text-dark-100 dark:text-light-900" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-dark-100 dark:text-light-900">Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter your message here" {...field} className="bg-light-800 dark:bg-dark-200 text-dark-100 dark:text-light-900" />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full bg-primary-500 hover:bg-primary-100 text-light-900" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </Form>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
                <div className="flex -space-x-4 mb-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <Avatar key={i}>
                            <AvatarImage src={`https://i.pravatar.cc/100?img=${i}`} />
                            <AvatarFallback>U{i}</AvatarFallback>
                        </Avatar>
                    ))}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-dark-100 dark:text-light-900">Every AI is used by thousands of users</h2>
                <p className="text-light-500 dark:text-light-700">
                    With lots of AI applications around, Everything AI stands out with its state of the art capabilities.
                </p>
            </div>
        </div>
    )
}