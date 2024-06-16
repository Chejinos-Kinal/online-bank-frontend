import React from 'react';
import account from '../../../src/assets/account.jpeg';
import logo from '../../../src/assets/logo.jpeg';

import { Link } from 'react-router-dom';

export const HomePageClient = () => {
  return (
    <div className="bg-custom-mint min-h-screen flex flex-col">
      <nav className="bg-custom-lightgray p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-4" />{' '}
          {/* Ajusta la ruta del logo */}
          <span className="text-black text-lg font-bold">CASHFLOW</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-white bg-custom-pink px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Cuenta
          </a>
          <Link
            to="/productsClient/showProducts"
            className="text-black px-4 py-2 rounded hover:bg-custom-lightblue hover:text-white"
          >
            Ver productos
          </Link>
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

      <div className="flex-grow container mx-auto p-8 flex flex-col md:flex-row justify-center items-center">
        <div className="bg-custom-mint p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 flex-grow md:h-full">
          <h1 className="text-custom-lightblue text-4xl font-bold mb-2 text-center">
            Cuenta
          </h1>
          <p className="text-custom-pink mb-6 text-center">
            Gestiona tu información bancaria.
          </p>

          <form>
            <div className="mb-4">
              <label htmlFor="account-number" className="block text-black mb-2">
                No. de Cuenta
              </label>
              <input
                type="text"
                id="account-number"
                className="w-full px-4 py-2 border rounded focus:outline-none"
                value="123666098765"
                readOnly
              />
            </div>

            <div className="mb-4">
              <label htmlFor="balance" className="block text-black mb-2">
                Saldo disponible
              </label>
              <button className="w-full bg-custom-lightblue text-white px-4 py-2 rounded">
                Este dato es obtenido automáticamente.
              </button>
            </div>

            <div className="mb-4">
              <label htmlFor="account-type" className="block text-black mb-2">
                Tipo de cuenta
              </label>
              <input
                type="text"
                id="account-type"
                className="w-full px-4 py-2 border rounded focus:outline-none"
                value="Monetaria"
                readOnly
              />
            </div>

            <div className="flex justify-center">
              <button className="bg-custom-blue text-white px-4 py-2 rounded hover:bg-custom-darkgray">
                Guardar cambios
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 md:mt-0 flex-grow md:max-h-[32rem]">
          {' '}
          {/* Ajusta la altura máxima según sea necesario */}
          <img
            src={account}
            alt="Graph"
            className="w-full h-full max-h-[32rem] rounded-lg shadow-lg object-cover"
          />{' '}
          {/* Ajusta la ruta de la imagen */}
        </div>
      </div>
    </div>
  );
};
