import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import styles from '../styles/Home.module.css';

import Axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
const API = Axios.create({ baseURL: 'https://swapi.dev/api' });

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
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

interface PlanetResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

const Home: NextPage = () => {
  const [planets, setPlanets] = useState<PlanetResult>({
    count: 0,
    next: null,
    previous: null,
    results: []
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await API.get<PlanetResult>(`/planets`);
      setPlanets(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <MainStyled>
        <h1 className="text-3xl font-bold underline">SWAPI</h1>

        <div className={styles.grid}>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Rotation period</th>
                <th className="px-4 py-2">Orbital period</th>
                <th className="px-4 py-2">Diameter</th>
                <th className="px-4 py-2">Climate</th>
                <th className="px-4 py-2">Gravity</th>
                <th className="px-4 py-2">Terrain</th>
                <th className="px-4 py-2">Surface water</th>
                <th className="px-4 py-2">Population</th>
                <th className="px-4 py-2">Residents</th>
                <th className="px-4 py-2">Films</th>
              </tr>
            </thead>
            <tbody>
              {planets.results.map((planet: Planet, index: number) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{planet.name}</td>
                  <td className="border px-4 py-2">{planet.rotation_period}</td>
                  <td className="border px-4 py-2">{planet.orbital_period}</td>
                  <td className="border px-4 py-2">{planet.diameter}</td>
                  <td className="border px-4 py-2">{planet.climate}</td>
                  <td className="border px-4 py-2">{planet.gravity}</td>
                  <td className="border px-4 py-2">{planet.terrain}</td>
                  <td className="border px-4 py-2">{planet.surface_water}</td>
                  <td className="border px-4 py-2">{planet.population}</td>
                  <td className="border px-4 py-2">
                    {planet.residents.map((resident, index) => (
                      <div key={index}>{resident}</div>
                    ))}
                  </td>
                  <td className="border px-4 py-2">
                    {planet.films.map((film, index) => (
                      <div key={index}>{film}</div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MainStyled>
    </div>
  );
};

export default Home;
