import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 50,
    quantity: 1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 100,
    quantity: 2,
  },
];

const addresses = [
  {
    id: 1,
    name: "Deepak Kalaal",
    street: "11th route",
    city: "Gurgaon",
    pincode: 11108,
    state: "Delhi",
    phone: 13446434232,
  },
  {
    id: 2,
    name: "Dolly",
    street: "420th street",
    city: "Nashik",
    pincode: 12348,
    state: "Maharashtra",
    phone: 7647673753,
  },
];

function Checkout() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: 'United States',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      country: 'United States',
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
    });
    setSelectedAddress(null);
  };

  const calculateTotal = () => {
    return products.reduce((acc, product) => acc + product.price * product.quantity, 0).toFixed(2);
  };

  return (
    <div className="grid grid-cols-1 ml-5 gap-x-8 gap-y-10 lg:grid-cols-4">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">Country</label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      value={formData.country}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="streetAddress"
                      type="text"
                      autoComplete="street-address"
                      value={formData.streetAddress}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">City</label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      value={formData.city}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">State</label>
                  <div className="mt-2">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">Postal code</label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postalCode"
                      type="text"
                      autoComplete="postal-code"
                      value={formData.postalCode}
                      onChange={handleFormChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Address</h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">Choose from existing Address.</p>

              <ul>
                {addresses.map((address) => (
                  <li key={address.id} className="flex justify-between gap-x-6 py-5">
                    <div className="flex min-w-0 gap-x-4">
                      <input
                        name="address"
                        type="radio"
                        value={address.id}
                        checked={selectedAddress === address.id}
                        onChange={handleAddressChange}
                        className="h-4 w-4 border-gray-300 text-indigo-600 border-solid border-2 border-gray-200 focus:ring-indigo-600"
                      />
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">{address.street}</p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">PinCode: {address.pincode}</p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">Phone: {address.phone}</p>
                      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <p className="text-sm leading-6 text-gray-900">{address.city}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">Payment Methods</legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">Choose one.</p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="cash"
                        name="payments"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="cash" className="block text-sm font-medium leading-6 text-gray-900">
                        Cash
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="card"
                        name="payments"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label htmlFor="card" className="block text-sm font-medium leading-6 text-gray-900">
                        Cards
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${calculateTotal()}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleReset}
                  className="flex items-center justify-center rounded-md border border-transparent bg-gray-200 px-6 py-3 text-base font-medium text-gray-900 shadow-sm hover:bg-gray-300"
                >
                  Reset
                </button>
                <Link
                  to="/pay"
                  className="ml-4 flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                  Place Order
                </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
