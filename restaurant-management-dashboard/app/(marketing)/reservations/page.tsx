import Link from "next/link";

export default function ReservationsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Reservations
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            Reserve your table
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Choose a date and time below and we'll have a table ready for you.
          </p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <form className="space-y-8">
            {/* Date / Time / Guests */}
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label
                  htmlFor="date"
                  className="mb-2 block text-sm font-medium"
                >
                  Date
                </label>

                <input
                  id="date"
                  name="date"
                  type="date"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="time"
                  className="mb-2 block text-sm font-medium"
                >
                  Time
                </label>

                <input
                  id="time"
                  name="time"
                  type="time"
                  required
                  className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="guests"
                  className="mb-2 block text-sm font-medium"
                >
                  Guests
                </label>

                <select
                  id="guests"
                  name="guests"
                  required
                  defaultValue="2"
                  className="w-full rounded-md border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-black"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9">9 Guests</option>
                  <option value="10">10 Guests</option>
                </select>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-semibold">
                Your information
              </h2>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Smith"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium"
                  >
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="md:col-span-2">
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
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-medium"
                  >
                    Special Requests
                    <span className="ml-1 font-normal text-gray-500">
                      (optional)
                    </span>
                  </label>

                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    placeholder="Birthday celebration, dietary requirements, accessibility needs, etc."
                    className="w-full resize-none rounded-md border border-gray-300 px-4 py-3 outline-none transition focus:border-black"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-black px-6 py-3.5 font-medium text-white transition hover:bg-gray-800"
              >
                Request Reservation
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Submitting a reservation request does not guarantee a table.
                We'll confirm your reservation by email or phone.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Restaurant Information */}
      <section className="border-t bg-gray-50 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Monday - Sunday
              <br />
              11:00 AM - 10:00 PM
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              123 Restaurant Street
              <br />
              Toronto, ON
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Need help?</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Call us at
              <br />
              (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      {/* Menu CTA */}
      <section className="py-16 text-center">
        <p className="text-gray-600">
          Want to see what we're serving?
        </p>

        <Link
          href="/menu"
          className="mt-3 inline-block font-medium underline underline-offset-4"
        >
          Explore our menu →
        </Link>
      </section>
    </div>
  );
}