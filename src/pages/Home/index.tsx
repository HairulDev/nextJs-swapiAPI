import type { NextPage } from 'next';
import React, { useContext } from 'react';
import styled from 'styled-components';
import styles from '../../styles/Home.module.css';
import { MyContext } from 'context/MyContextProvider';
import Loader from '../../components/Loader';

const MainStyled = styled.main`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  padding: 4rem 0;
`;

interface Planet {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  gravity: string;
  surface_water: string;
  population: string;
  url: string;
  created: string;
  edited: string;
}

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
        {/* <h1 className="text-3xl font-bold underline">SWAPI</h1> */}

        <div className={styles.grid}>
          {isLoading ? (
            <Loader />
          ) : (
            <table className="table-auto border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-slate-600">Name</th>
                  <th className="px-4 py-2 border border-slate-600">Rotation period</th>
                  <th className="px-4 py-2 border border-slate-600">Orbital period</th>
                  <th className="px-4 py-2 border border-slate-600">Diameter</th>
                  <th className="px-4 py-2 border border-slate-600">Gravity</th>
                  <th className="px-4 py-2 border border-slate-600">Surface water</th>
                  <th className="px-4 py-2 border border-slate-600">Population</th>
                  <th className="px-4 py-2 border border-slate-600">Url</th>
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
                    <td className="border px-4 py-2 border border-slate-600">{planet.diameter}</td>
                    <td className="border px-4 py-2 border border-slate-600">{planet.gravity}</td>
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
          )}
        </div>

        {isModalOpen && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 text-center">
              <div
                className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
                aria-hidden="true"
                onClick={closeModal}
              ></div>

              <div className="inline-block max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="text-2xl font-bold mb-4">Detail Planet</div>

                <table className="table-auto border-collapse border border-slate-500">
                  <tbody>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Name</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.name}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Rotation period</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.rotation_period}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Orbital period</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.orbital_period}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Diameter</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.diameter}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Gravity</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.gravity}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Surface water</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.surface_water}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Population</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {detailPlanet.population}
                      </td>
                    </tr>
                    <tr>
                      <th className="px-4 py-2 border border-slate-600">Created</th>
                      <td className="border px-4 py-2 border border-slate-600">
                        {convertDateTime(detailPlanet.created)}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
