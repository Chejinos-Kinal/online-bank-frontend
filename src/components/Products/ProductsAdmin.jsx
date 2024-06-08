import React from 'react';
import logo from '../../../src/assets/logo.jpeg';
export const ProductsAdmin = () => {
  return (
    <div className="bg-custom-mint min-h-screen p-6">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-4" />{' '}
          {/* Ajusta la ruta del logo */}
          <span className="text-black text-lg font-bold">CASHFLOW</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Usuarios
          </a>
          <a
            href="#"
            className="text-white bg-custom-pink px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Productos
          </a>
          <a
            href="#"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Cuentas
          </a>
          <a
            href="#"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Mi perfil
          </a>
        </div>
      </header>
      <main className="bg-custom-lightgray p-8 rounded-lg shadow-lg">
        <h2 className="text-custom-blue text-2xl font-semibold mb-4">
          Gestiona la información de los productos
        </h2>
        <form className="grid grid-cols-2 gap-6 mb-8">
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="productName"
            >
              Nombre del producto
            </label>
            <input
              type="text"
              id="productName"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Zapatos Tallmen"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="description"
            >
              Descripción
            </label>
            <input
              type="text"
              id="description"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Zapatos de talla 43 para hombre, formales."
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="type"
            >
              ¿Producto o Servicio?
            </label>
            <select
              id="type"
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Producto</option>
              <option>Servicio</option>
            </select>
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="price"
            >
              Precio del producto
            </label>
            <input
              type="text"
              id="price"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Q400.00"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="soldCount"
            >
              No. de veces del producto vendido
            </label>
            <input
              type="text"
              id="soldCount"
              className="w-full p-2 border border-gray-300 rounded bg-black text-white"
              defaultValue="7 veces"
              readOnly
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="creationDate"
            >
              Fecha de Creación
            </label>
            <input
              type="text"
              id="creationDate"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="Here we have a calendar"
            />
          </div>
          <div className="col-span-1">
            <label
              className="block text-custom-blue font-semibold mb-2"
              htmlFor="modificationDate"
            >
              Fecha de Modificación
            </label>
            <input
              type="text"
              id="modificationDate"
              className="w-full p-2 border border-gray-300 rounded"
              defaultValue="email@janesfakedomain.net"
            />
          </div>
        </form>
        <div className="flex space-x-4">
          <button className="bg-custom-blue text-white py-2 px-4 rounded">
            Agregar
          </button>
          <button className="bg-custom-lightblue text-white py-2 px-4 rounded">
            Editar
          </button>
          <button className="bg-custom-pink text-white py-2 px-4 rounded">
            Eliminar
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-custom-blue text-2xl font-semibold mb-4">
            Lista de usuarios
          </h2>
          <table className="w-full bg-white rounded-lg shadow-lg">
            <thead>
              <tr className="bg-custom-lightgray text-left">
                <th className="py-2 px-4">Nombre/s</th>
                <th className="py-2 px-4">Descripción</th>
                <th className="py-2 px-4">DPI</th>
                <th className="py-2 px-4">Tipo (Servicio/Producto)</th>
                <th className="py-2 px-4">Precio</th>
                <th className="py-2 px-4">Stock</th>
                <th className="py-2 px-4">Vendido</th>
                <th className="py-2 px-4">Fecha de Creación</th>
                <th className="py-2 px-4">Modificación</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over your data here */}
              <tr>
                <td className="py-2 px-4">Row 1</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">123</td>
                <td className="py-2 px-4">456</td>
              </tr>
              {/* Repeat for each row */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};
