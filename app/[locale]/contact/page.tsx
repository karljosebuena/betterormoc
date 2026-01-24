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
        description:
          error instanceof Error ? error.message : 'Please try again later.',
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
            <div className="rounded-lg border border-red-200 bg-red-50 p-6 shadow-sm">
              <div className="mb-4 flex items-start gap-3">
                <div className="rounded-lg bg-red-100 p-3 text-red-900">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="mb-2 font-semibold text-red-900">
                    Emergency Hotlines
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div>
                      <p className="font-medium text-red-900">RESCUE</p>
                      <p>
                        <a
                          href="tel:09055705865"
                          className="hover:text-red-900"
                        >
                          0905 570 5865
                        </a>
                        {' • '}
                        <a
                          href="tel:09216714443"
                          className="hover:text-red-900"
                        >
                          0921 671 4443
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-red-900">DRRM OPCEN</p>
                      <p>
                        <a
                          href="tel:09982412991"
                          className="hover:text-red-900"
                        >
                          0998 241 2991
                        </a>
                        {' • '}
                        <a
                          href="tel:09774593460"
                          className="hover:text-red-900"
                        >
                          0977 459 3460
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-red-900">RAPID RESCUE</p>
                      <p>
                        <a
                          href="tel:09475071433"
                          className="hover:text-red-900"
                        >
                          0947 507 1433
                        </a>
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-red-900">
                        Bureau of Fire Protection
                      </p>
                      <p>
                        <a
                          href="tel:09151700910"
                          className="hover:text-red-900"
                        >
                          0915 170 0910
                        </a>
                        {' • '}
                        <a
                          href="tel:09072726943"
                          className="hover:text-red-900"
                        >
                          0907 272 6943
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-md">
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

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                  <Phone className="h-6 w-6" />
                </div>
                <div className="w-full">
                  <h3 className="mb-2 font-semibold text-gray-900">
                    Main Office
                  </h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>
                      <a
                        href="tel:+63535608140"
                        className="hover:text-blue-900"
                      >
                        GLOBE: (053) 560-8140
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+63538328888"
                        className="hover:text-blue-900"
                      >
                        PLDT: (053) 832-8888
                      </a>
                    </p>
                    <p>
                      <a
                        href="tel:+63532557395"
                        className="hover:text-blue-900"
                      >
                        ORTELCO: (053) 255-7395
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Email</h3>
                  <p className="text-sm text-gray-600">
                    <a
                      href="mailto:info@ormoc.gov.ph"
                      className="hover:text-blue-900"
                    >
                      info@ormoc.gov.ph
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-blue-200 hover:shadow-md">
              <div className="mb-4 flex items-start gap-3">
                <div className="rounded-lg bg-blue-100 p-3 text-blue-900">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">
                    Office Hours
                  </h3>
                  <p className="text-sm text-gray-600">
                    Monday - Friday
                    <br />
                    8:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-semibold text-gray-900">
                Police Stations & Law Enforcement
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-medium text-gray-900">OCPO Headquarters</p>
                  <a href="tel:09985986690" className="hover:text-blue-900">
                    0998 598 6690
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 1 (Cogon)
                  </p>
                  <a href="tel:09985986691" className="hover:text-blue-900">
                    0998 598 6691
                  </a>
                  {' • '}
                  <a href="tel:09354417443" className="hover:text-blue-900">
                    0935 441 7443
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 2 (Cagbuhangin)
                  </p>
                  <a href="tel:09985986693" className="hover:text-blue-900">
                    0998 598 6693
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 3 (Liloan)
                  </p>
                  <a href="tel:09989674958" className="hover:text-blue-900">
                    0998 967 4958
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 4 (Linao)
                  </p>
                  <a href="tel:09709250336" className="hover:text-blue-900">
                    0970 925 0336
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 5 (Dolores)
                  </p>
                  <a href="tel:09700613278" className="hover:text-blue-900">
                    0970 061 3278
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Police Station 6 (Ipil)
                  </p>
                  <a href="tel:09553627125" className="hover:text-blue-900">
                    0955 362 7125
                  </a>
                  {' • '}
                  <a href="tel:09700564173" className="hover:text-blue-900">
                    0970 056 4173
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Mobile Force Company
                  </p>
                  <a href="tel:09989674959" className="hover:text-blue-900">
                    0998 967 4959
                  </a>
                  {' • '}
                  <a href="tel:5616253" className="hover:text-blue-900">
                    561-6253
                  </a>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Coast Guard</p>
                  <a href="tel:09303135188" className="hover:text-blue-900">
                    0930 313 5188
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                Send us a message
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Name *
                    </label>
                    <input
                      {...register('name')}
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Email *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    placeholder="09XX XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Subject *
                  </label>
                  <input
                    {...register('subject')}
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Message *
                  </label>
                  <textarea
                    {...register('message')}
                    id="message"
                    rows={6}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    placeholder="How can we help you?"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
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
