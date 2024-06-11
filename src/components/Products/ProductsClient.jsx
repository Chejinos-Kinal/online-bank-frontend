import React from 'react';
import logo from '../../../src/assets/logo.jpeg';
import computer from '../../../src/assets/computer.jpg';

export const ProductsClient = () => {
  return (
    <div className="bg-custom-mint min-h-screen p-6">
      {/* <header className="flex items-center justify-between p-4"> */}
      {/* <div className="flex items-center">
          <img src="/path/to/logo.png" alt="Logo" className="h-12" />

        </div> */}
      <nav className="bg-custom-lightgray p-4 flex justify-between items-center">
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
            Cuenta
          </a>
          <a
            href="#"
            className="text-white bg-custom-pink px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Ver productos
          </a>
          <a
            href="#"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Depósitos
          </a>
          <a
            href="#"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Mi perfil
          </a>
        </div>
      </nav>
      {/*  </header> */}
      <main className="bg-custom-lightgray p-8 rounded-lg shadow-lg">
        <h1 className="text-custom-blue text-3xl font-semibold text-center mb-4">
          ¡Adquiere tus productos!
        </h1>
        <p className="text-center text-custom-blue mb-8">
          Navega entre los productos o servicios y escoge lo que más te
          interese.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {/* Repetir para cada producto */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={computer}
              alt="Producto"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-custom-lightgray">
              <h3 className="text-custom-blue text-lg font-semibold">
                COMPUTER
              </h3>
              <p className="text-sm">
                <span className="font-semibold">Nombre: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Descripción: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Tipo: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Precio: </span>Q5000.00
              </p>
              <button className="mt-4 w-full bg-custom-pink text-white py-2 px-4 rounded">
                COMPRAR
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={computer}
              alt="Producto"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-custom-mint">
              <h3 className="text-custom-blue text-lg font-semibold">
                COMPUTER
              </h3>
              <p className="text-sm">
                <span className="font-semibold">Nombre: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Descripción: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Tipo: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Precio: </span>Q5000.00
              </p>
              <button className="mt-4 w-full bg-custom-blue text-white py-2 px-4 rounded">
                COMPRAR
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={computer}
              alt="Producto"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-custom-lightgray">
              <h3 className="text-custom-blue text-lg font-semibold">
                COMPUTER
              </h3>
              <p className="text-sm">
                <span className="font-semibold">Nombre: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Descripción: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Tipo: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Precio: </span>Q5000.00
              </p>
              <button className="mt-4 w-full bg-custom-pink text-white py-2 px-4 rounded">
                COMPRAR
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src={computer}
              alt="Producto"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-custom-mint">
              <h3 className="text-custom-blue text-lg font-semibold">
                COMPUTER
              </h3>
              <p className="text-sm">
                <span className="font-semibold">Nombre: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Descripción: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Tipo: </span>Description
              </p>
              <p className="text-sm">
                <span className="font-semibold">Precio: </span>Q5000.00
              </p>
              <button className="mt-4 w-full bg-custom-blue text-white py-2 px-4 rounded">
                COMPRAR
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
