import type { NextPage } from 'next';
import React, { useContext } from 'react';
import styles from '../../styles/Home.module.css';
import { MyContext } from 'context/MyContextProvider';
import Loader from '../../components/Loader';
import { Planet } from '../../context/Interface';
import { MainStyled } from '../styled';

const Home: NextPage = () => {
  const {
    planets,
    isLoading,
    handleDetailPlanet,
    detailPlanet,
    isModalOpen,
    closeModal,
    convertDateTime
  }: any = useContext(MyContext);
  console.log('isModalOpen', isModalOpen);

  return (
    <div className={styles.container}>
      <MainStyled>
        <div className="p-5 flex flex-col flex-1 items-center justify-start w-full">
          <div className={styles.grid}>
            {isLoading ? (
              <Loader />
            ) : (
              <div className={`w-full px-2 py-2 ${styles.glassmorphism}`}>
                <table className="table-auto border-collapse border border-slate-500 bg-transparent text-gray-200 text-sm">
                  <caption className="caption-top mb-2 text-2sm font-bold ">Planets</caption>
                  <thead>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Name</th>
                      <th className="px-4 py-2 border border-slate-600">Rotation period</th>
                      <th className="px-4 py-2 border border-slate-600">Orbital period</th>
                      <th className="px-4 py-2 border border-slate-600">Diameter</th>
                      <th className="px-4 py-2 border border-slate-600">Gravity</th>
                      <th className="px-4 py-2 border border-slate-600">Surface water</th>
                      <th className="px-4 py-2 border border-slate-600">Population</th>
                      <th className="px-4 py-2 border border-slate-600">Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planets.results.map((planet: Planet, index: number) => (
                      <tr key={index}>
                        <td className="border px-4 py-2 border border-slate-600">{planet.name}</td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.rotation_period}
                        </td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.orbital_period}
                        </td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.diameter}
                        </td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.gravity}
                        </td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.surface_water}
                        </td>
                        <td className="border px-4 py-2 border border-slate-600">
                          {planet.population}
                        </td>
                        <td
                          className="border px-4 py-2 border border-slate-600"
                          onClick={() => handleDetailPlanet(planet.url)}
                        >
                          Detail
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
              <div
                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                aria-hidden="true"
                onClick={closeModal}
              ></div>

              <div
                className={`inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl ${styles.glassmorphism}`}
              >
                <div className="text-2sm font-bold mb-4 text-white">Detail Planet</div>

                <table className="table-auto border-collapse border border-slate-500 text-gray-200 text-sm">
                  <tbody>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Name</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.name}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Rotation period</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.rotation_period}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Orbital period</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.orbital_period}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Diameter</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.diameter}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Gravity</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.gravity}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Surface water</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.surface_water}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Population</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.population}
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border border-slate-600">Created</td>
                      <td className="border px-4 py-2 border border-slate-600">
                        {convertDateTime(detailPlanet.created)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-5">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </MainStyled>
    </div>
  );
};

export default Home;
