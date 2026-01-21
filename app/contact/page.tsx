'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise((resolve) => setTimeout(resolve, 1500))

        setSubmitStatus('success')
        setIsSubmitting(false)
        setFormData({ name: '', email: '', subject: '', message: '' })

        setTimeout(() => setSubmitStatus('idle'), 5000)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-gradient-to-br from-green-600 to-green-800 py-16 text-white">
                <div className="container">
                    <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
                    <p className="text-lg text-green-50">
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
                                <div className="rounded-lg bg-green-100 p-3 text-green-600">
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
                                <div className="rounded-lg bg-green-100 p-3 text-green-600">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Phone</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="tel:0927-400-8033" className="hover:text-green-600">
                                            0927-400-8033
                                        </a>
                                        <br />
                                        <a href="tel:0916-284-0885" className="hover:text-green-600">
                                            0916-284-0885
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-green-600">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="mailto:info@ormoc.gov.ph" className="hover:text-green-600">
                                            info@ormoc.gov.ph
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-start gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-green-600">
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

                            {submitStatus === 'success' && (
                                <div className="mb-6 rounded-lg bg-green-50 p-4 text-green-800">
                                    <p className="font-medium">Message sent successfully!</p>
                                    <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                            Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="What is this regarding?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-8 py-3 font-semibold text-white transition-colors hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
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
