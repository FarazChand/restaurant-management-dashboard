import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="flex items-center bg-gray-100">
        <div className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-600">
              Fresh ingredients. Great food.
            </p>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
              Good food brings people together.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Experience thoughtfully prepared dishes, warm hospitality, and
              an atmosphere made for gathering with the people who matter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reservations"
                className="rounded-md bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Reserve a Table
              </Link>

              <Link
                href="/menu"
                className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-900 transition hover:bg-gray-50"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              From our kitchen
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              Featured dishes
            </h2>

            <p className="mt-4 text-gray-600">
              A few favourites from our menu, prepared with quality
              ingredients and plenty of care.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg border">
              <div className="aspect-[4/3] bg-gray-200" />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">
                    Truffle Parmesan Fries
                  </h3>

                  <span className="font-medium">$12</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Crispy fries finished with parmesan, herbs, and truffle
                  seasoning.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border">
              <div className="aspect-[4/3] bg-gray-200" />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">
                    Classic Cheeseburger
                  </h3>

                  <span className="font-medium">$18</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  House-seasoned beef, aged cheddar, lettuce, tomato, and
                  our signature sauce.
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-lg border">
              <div className="aspect-[4/3] bg-gray-200" />

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold">
                    Chocolate Lava Cake
                  </h3>

                  <span className="font-medium">$10</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Warm chocolate cake with a rich molten centre and vanilla
                  ice cream.
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/menu"
              className="font-medium underline underline-offset-4"
            >
              View the full menu →
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-100 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="aspect-[4/3] rounded-lg bg-gray-200" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Our story
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              A neighbourhood restaurant built around good food.
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              What started as a simple idea has grown into a place where
              friends, families, and neighbours can come together over food.
              Our kitchen focuses on familiar favourites, seasonal
              ingredients, and dishes that keep people coming back.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block font-medium underline underline-offset-4"
            >
              Learn more about us →
            </Link>
          </div>
        </div>
      </section>

       {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Why dine with us
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              More than just a meal
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-xl font-semibold">Quality Ingredients</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Carefully selected ingredients prepared with attention to
                detail.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold">Warm Hospitality</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Friendly service and a welcoming atmosphere from the moment
                you arrive.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold">Made to Gather</h3>
              <p className="mt-3 leading-7 text-gray-600">
                A comfortable space for casual dinners, celebrations, and
                everything in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-black py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Ready for your next meal?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-300">
            Join us for dinner and see what makes our restaurant special.
          </p>

          <Link
            href="/reservations"
            className="mt-8 inline-block rounded-md bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </>
  );
}
