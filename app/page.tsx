"use client";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-4">
      <h1>Stripe Payments</h1>
      <a
        href="https://buy.stripe.com/test_5kAdT1fIq59faWc9AA"
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        Buy Now
      </a>
    </main>
  );
}
