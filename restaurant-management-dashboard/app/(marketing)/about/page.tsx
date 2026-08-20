import Link from "next/link";

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            About us
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            Food, people, and good times.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We're a neighbourhood restaurant built around simple food,
            genuine hospitality, and bringing people together.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] rounded-lg bg-gray-200" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our story
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              It started with a love of good food.
            </h2>

            <div className="mt-6 space-y-4 leading-7 text-gray-600">
              <p>
                Our restaurant was created with a simple idea: great food
                doesn't need to be complicated. It needs quality ingredients,
                thoughtful preparation, and people who care about what they
                serve.
              </p>

              <p>
                Over the years, we've built a place where our guests can
                enjoy familiar favourites alongside new dishes inspired by
                the seasons.
              </p>

              <p>
                Whether you're joining us for a quick lunch, a family dinner,
                or a special celebration, our goal is the same — make you
                feel welcome and give you something worth coming back for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              What matters to us
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Our values
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold">
                Quality
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We believe good dishes start with good ingredients. We focus
                on quality from the kitchen to the table.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold">
                Hospitality
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                Every guest should feel comfortable, appreciated, and taken
                care of from the moment they walk through our doors.
              </p>
            </article>

            <article className="rounded-lg bg-white p-8">
              <h3 className="text-xl font-semibold">
                Community
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                We're proud to be part of the neighbourhood and believe
                restaurants are at their best when they bring people together.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-4xl font-bold">
            Come join us.
          </h2>

          <p className="mt-4 text-gray-300">
            We'd love to have you at our table.
          </p>

          <Link
            href="/reservations"
            className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
}