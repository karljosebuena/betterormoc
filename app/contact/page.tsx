'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { contactFormSchema, type ContactFormData } from '@/lib/schemas/contact'

export default function ContactPage() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message')
            }

            toast.success('Message sent successfully!', {
                description: "We'll get back to you within 24-48 hours.",
            })
            reset()
        } catch (error) {
            toast.error('Failed to send message', {
                description: error instanceof Error ? error.message : 'Please try again later.',
            })
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
                    <p className="text-lg text-blue-50">
                        Get in touch with the City Government of Ormoc
                    </p>
                </div>
            </div>

            <div className="container py-12">
                <div className="grid gap-8 lg:grid-cols-3">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Address</h3>
                                    <p className="text-sm text-gray-600">
                                        Ormoc City Hall
                                        <br />
                                        Ormoc City, Leyte
                                        <br />
                                        Philippines 6541
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="tel:0927-400-8033" className="hover:text-blue-900">
                                            0927-400-8033
                                        </a>
                                        <br />
                                        <a href="tel:0916-284-0885" className="hover:text-blue-900">
                                            0916-284-0885
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="mailto:info@ormoc.gov.ph" className="hover:text-blue-900">
                                            info@ormoc.gov.ph
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Office Hours</h3>
                                    <p className="text-sm text-gray-600">
                                        Monday - Friday
                                        <br />
                                        8:00 AM - 5:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                            <h2 className="mb-6 text-2xl font-bold text-gray-900">Send us a message</h2>

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                            Name *
                                        </label>
                                        <input
                                            {...register('name')}
                                            type="text"
                                            id="name"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                            placeholder="Your full name"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            {...register('email')}
                                            type="email"
                                            id="email"
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                                        Phone (Optional)
                                    </label>
                                    <input
                                        {...register('phone')}
                                        type="tel"
                                        id="phone"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                        placeholder="09XX XXX XXXX"
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                                        Subject *
                                    </label>
                                    <input
                                        {...register('subject')}
                                        type="text"
                                        id="subject"
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                        placeholder="What is this regarding?"
                                    />
                                    {errors.subject && (
                                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                                    )}
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                        Message *
                                    </label>
                                    <textarea
                                        {...register('message')}
                                        id="message"
                                        rows={6}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                    {errors.message && (
                                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="h-5 w-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
