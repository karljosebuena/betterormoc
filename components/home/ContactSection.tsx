import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export function ContactSection() {
    return (
        <section id="contact" className="section bg-white">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">Get in Touch</h2>
                    <p className="mx-auto max-w-2xl text-lg text-gray-600">
                        We&apos;re here to serve you
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* Contact Information */}
                    <div className="space-y-6">
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-blue-900">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Address</h3>
                                    <p className="text-sm text-gray-600">
                                        Ormoc City Hall, Ormoc City, Leyte
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-blue-900">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Phone</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="tel:0927-400-8033" className="hover:text-blue-900">
                                            0927-400-8033
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-blue-900">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email</h3>
                                    <p className="text-sm text-gray-600">
                                        <a href="mailto:info@ormoc.gov.ph" className="hover:text-blue-900">
                                            info@ormoc.gov.ph
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="rounded-lg bg-green-100 p-3 text-blue-900">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Office Hours</h3>
                                    <p className="text-sm text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-8">
                        <h3 className="mb-6 text-xl font-bold text-gray-900">Send us a message</h3>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-blue-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
