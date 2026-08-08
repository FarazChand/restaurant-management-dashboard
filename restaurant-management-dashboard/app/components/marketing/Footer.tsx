export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-bold">Restaurant</h2>
            <p className="mt-3 text-sm text-gray-400">
              Good food. Great atmosphere. Memorable experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Hours</h3>
            <p className="mt-3 text-sm text-gray-400">Monday - Sunday</p>
            <p className="text-sm text-gray-400">11:00 AM - 10:00 PM</p>
          </div>

          <div>
            <h3 className="font-semibold">Contact</h3>
            <p className="mt-3 text-sm text-gray-400">123 Restaurant Street</p>
            <p className="text-sm text-gray-400">(555) 123-4567</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2026 Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
