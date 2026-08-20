export default function ContactPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Contact
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            We'd love to hear from you.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, special request, or just want to say hello?
            Get in touch with our team.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2">
          {/* Information */}
          <div>
            <h2 className="text-3xl font-bold">
              Get in touch
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              We're happy to answer questions about reservations, menu items,
              private events, or anything else you need.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="font-semibold">
                  Address
                </h3>

                <p className="mt-2 text-gray-600">
                  123 Restaurant Street
                  <br />
                  Toronto, ON
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Phone
                </h3>

                <p className="mt-2 text-gray-600">
                  (555) 123-4567
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Email
                </h3>

                <p className="mt-2 text-gray-600">
                  hello@restaurant.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Hours
                </h3>

                <p className="mt-2 text-gray-600">
                  Monday - Sunday
                  <br />
                  11:00 AM - 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="How can we help?"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Your message..."
                  className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-black px-6 py-3.5 font-medium text-white transition hover:bg-gray-800"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}