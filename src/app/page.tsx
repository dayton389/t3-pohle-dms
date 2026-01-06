"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export default function Home() {
  const [output, setOutput] = useState<string>("");

  const { data: carts, refetch } = api.inventory.getAll.useQuery();

  const seedMutation = api.inventory.seed.useMutation({
    onSuccess: (data) => {
      setOutput(JSON.stringify(data, null, 2));
      refetch();
    },
  });

  const handleSeed = () => {
    seedMutation.mutate();
  };

  // Calculate totals
  const calculateTotal = (cart: (typeof carts)[number]) => {
    const partsTotal = cart.installedParts.reduce(
      (sum, ip) => sum + ip.chargedPrice * ip.quantity,
      0
    );
    return cart.basePrice + partsTotal;
  };

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Golf Cart DMS Test</h1>

      <button
        onClick={handleSeed}
        disabled={seedMutation.isPending}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        {seedMutation.isPending ? "Creating..." : "Create Test Cart with Parts"}
      </button>

      {output && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Last Created:</h2>
          <pre className="bg-gray-800 p-4 rounded overflow-auto text-sm">
            {output}
          </pre>
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold mb-4">All Carts ({carts?.length ?? 0})</h2>
        {carts?.map((cart) => (
          <div key={cart.id} className="bg-gray-800 p-4 rounded mb-4">
            <h3 className="text-lg font-medium">
              {cart.year} {cart.make} {cart.model}
            </h3>
            <p>Base Price: ${cart.basePrice}</p>
            <p className="mt-2 font-medium">Installed Parts:</p>
            <ul className="ml-4">
              {cart.installedParts.map((ip) => (
                <li key={ip.id}>
                  {ip.part.name} - ${ip.chargedPrice} (qty: {ip.quantity})
                </li>
              ))}
            </ul>
            <p className="mt-2 text-green-400 font-bold">
              Total Value: ${calculateTotal(cart)}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}