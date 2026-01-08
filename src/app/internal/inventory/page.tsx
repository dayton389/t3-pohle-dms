// src/app/internal/inventory/page.tsx
"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

type FilterStatus = "ALL" | "AVAILABLE" | "PENDING" | "SOLD" | "ON_ORDER" | "SERVICE";
type ViewMode = "table" | "grid";

export default function InventoryPage() {
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  // Fetch inventory - we'll create this router next
  const { data: inventory, isLoading, error } = api.inventory.getAll.useQuery();

  // Filter inventory
  const filteredInventory = inventory?.filter((item) => {
    const matchesStatus = statusFilter === "ALL" || item.status === statusFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.stockNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.serialNumber?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-red-50 text-red-600 p-4 rounded-lg">
          Error loading inventory: {error.message}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <p className="text-gray-500">
            {filteredInventory?.length ?? 0} vehicles
          </p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          + Add Vehicle
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search stock #, brand, model, serial..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as FilterStatus)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        >
          <option value="ALL">All Status</option>
          <option value="AVAILABLE">Available</option>
          <option value="PENDING">Pending</option>
          <option value="SOLD">Sold</option>
          <option value="ON_ORDER">On Order</option>
          <option value="SERVICE">Service</option>
        </select>

        {/* View Toggle */}
        <div className="flex border border-gray-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setViewMode("table")}
            className={`px-4 py-2 ${viewMode === "table" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
          >
            ☰ Table
          </button>
          <button
            onClick={() => setViewMode("grid")}
            className={`px-4 py-2 ${viewMode === "grid" ? "bg-blue-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"}`}
          >
            ▦ Grid
          </button>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}

      {/* Table View */}
      {!isLoading && viewMode === "table" && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Vehicle
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock #
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredInventory?.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        🛒
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {item.year} {item.brand} {item.model}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.color} · {item.serialNumber ?? "No Serial"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-sm">{item.stockNumber}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{item.carType ?? "Golf Cart"}</div>
                    <div className="text-sm text-gray-500">{item.fuel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-semibold text-gray-900">
                      ${item.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={item.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.location ?? "—"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredInventory?.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              No vehicles found matching your criteria
            </div>
          )}
        </div>
      )}

      {/* Grid View */}
      {!isLoading && viewMode === "grid" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredInventory?.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gray-200 flex items-center justify-center text-4xl">
                🛒
              </div>

              <div className="p-4 space-y-3">
                {/* Status badge */}
                <div className="flex justify-between items-start">
                  <StatusBadge status={item.status} />
                  {item.azStreetLegal && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                      Street Legal
                    </span>
                  )}
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.year} {item.brand} {item.model}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.stockNumber} · {item.color}
                  </p>
                </div>

                {/* Details */}
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">{item.fuel}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {item.carType ?? "Golf Cart"}
                  </span>
                </div>

                {/* Price & Actions */}
                <div className="flex justify-between items-center pt-2 border-t">
                  <span className="text-lg font-bold text-gray-900">
                    ${item.price.toLocaleString()}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    AVAILABLE: "bg-green-100 text-green-800",
    PENDING: "bg-yellow-100 text-yellow-800",
    SOLD: "bg-gray-100 text-gray-800",
    ON_ORDER: "bg-blue-100 text-blue-800",
    SERVICE: "bg-orange-100 text-orange-800",
  };

  const labels: Record<string, string> = {
    AVAILABLE: "Available",
    PENDING: "Pending",
    SOLD: "Sold",
    ON_ORDER: "On Order",
    SERVICE: "In Service",
  };

  return (
    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${styles[status] ?? "bg-gray-100"}`}>
      {labels[status] ?? status}
    </span>
  );
}