import Link from "next/link";

const menuCategories = [
  {
    name: "Starters",
    items: [
      {
        name: "Truffle Parmesan Fries",
        description:
          "Crispy fries finished with parmesan, herbs, and truffle seasoning.",
        price: "$12",
      },
      {
        name: "Crispy Calamari",
        description:
          "Lightly seasoned calamari served with lemon and house marinara.",
        price: "$16",
      },
      {
        name: "Burrata & Tomatoes",
        description:
          "Creamy burrata with heirloom tomatoes, basil, and olive oil.",
        price: "$15",
      },
    ],
  },
  {
    name: "Mains",
    items: [
      {
        name: "Classic Cheeseburger",
        description:
          "House-seasoned beef, aged cheddar, lettuce, tomato, and signature sauce.",
        price: "$18",
      },
      {
        name: "Chicken Alfredo",
        description:
          "Grilled chicken breast with fettuccine, parmesan, and creamy Alfredo sauce.",
        price: "$24",
      },
      {
        name: "Grilled Salmon",
        description:
          "Atlantic salmon served with seasonal vegetables and roasted potatoes.",
        price: "$28",
      },
    ],
  },
  {
    name: "Desserts",
    items: [
      {
        name: "Chocolate Lava Cake",
        description:
          "Warm chocolate cake with a rich molten centre and vanilla ice cream.",
        price: "$10",
      },
      {
        name: "New York Cheesecake",
        description:
          "Classic baked cheesecake served with seasonal berries.",
        price: "$9",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our menu
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight">
            Good food, made with care.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Explore our selection of dishes made with quality ingredients and
            served fresh from our kitchen.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          {menuCategories.map((category) => (
            <div key={category.name} className="mb-16 last:mb-0">
              <h2 className="border-b pb-4 text-3xl font-bold">
                {category.name}
              </h2>

              <div className="divide-y">
                {category.items.map((item) => (
                  <article
                    key={item.name}
                    className="flex gap-6 py-6"
                  >
                    <div className="h-24 w-24 shrink-0 rounded-md bg-gray-200" />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold">
                          {item.name}
                        </h3>

                        <span className="shrink-0 font-semibold">
                          {item.price}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Make your evening special
          </h2>

          <p className="mt-4 text-gray-300">
            Reserve a table and enjoy your next meal with us.
          </p>

          <Link
            href="/reservations"
            className="mt-7 inline-block rounded-md bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-200"
          >
            Reserve a Table
          </Link>
        </div>
      </section>
    </div>
  );
}