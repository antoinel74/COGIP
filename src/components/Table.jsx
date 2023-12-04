import React from "react";

/**
 *composants tables a l'état de squelette le style a utiliser pour les differentes pages logged out et logged in (ou autre manière de faire on verra bien) il faudra gérer les etats des composant en fonction de paramètre data, page ...
 * @returns différentes tables de données contacts, companies, invoices
 */
export const Table = () => {
  return (
    <>
      {/* table style log out */}
      <div className="overflow-x-auto max-w-6xl mx-auto flex flex-col">
        <table className="min-w-full table-fixed">
          <thead className="bg-yellow-400">
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                example
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                example
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                example
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                example
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                example
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
            <tr className="bg-gray-200">
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jacque@gmail.com
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                phoque off
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                25/09/1993
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* table style dashboard */}
      <div className="max-w-xl overflow-x-auto mx-auto flex flex-col">
        <table className="min-w-full table-fixed">
          <thead>
            <tr>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                name
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                phone
              </th>
              <th
                scope="col"
                className="py-3 px-6 text-xs font-bold tracking-wider text-left text-gray-900 uppercase"
              >
                email
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jean jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                0499 34 35 32
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jj-dubouchon@gmail.com
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jean jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                0499 34 35 32
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jj-dubouchon@gmail.com
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jean jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                0499 34 35 32
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jj-dubouchon@gmail.com
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jean jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                0499 34 35 32
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jj-dubouchon@gmail.com
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jean jacque
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                0499 34 35 32
              </td>
              <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                jj-dubouchon@gmail.com
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
