import React from "react";
/**
 * Premier essai de carte pour les tableau du dashboard restructuration a voir le titre devra surement etre passer par le tableau la séparation également a retravailler
 *
 */
export const Card = () => {
  return (
    <>
    {/* premier essai premiere carte du dashboard */}
        <div className="max-w-xl bg-white rounded-md flex flex-col justify-center items-start p-4">
      {/* dynamic title component import */}
      <h2>Titre</h2>
      <span></span>
      <div>
        {/* table component import */}
        <div className="max-w-lg overflow-x-auto flex flex-col">
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
      </div>
    </div>
    </>
  );
};
