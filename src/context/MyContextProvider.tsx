import React, { createContext, FC, useEffect, useState } from 'react';
import Axios from 'axios';

const API = Axios.create({ baseURL: 'https://swapi.dev/api' });

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
  created: string;
  url: string;
}

interface PlanetResult {
  count: number;
  next: string | null;
  previous: string | null;
  results: Planet[];
}

interface ContextProps {
  planets: PlanetResult;
  currentPage: number;
  handleClick: (currentPage: number) => void;
  isLoading: boolean;
  handleDetailPlanet: (url: string) => void;
  detailPlanet: Planet | null;
  closeModal: () => void;
  isModalOpen: boolean;
  convertDateTime: (dateString: string) => string;
}

const defaultContext: ContextProps = {
  planets: {
    count: 0,
    next: null,
    previous: null,
    results: [],
  },
  currentPage: 1,
  handleClick: () => {},
  isLoading: false,
  handleDetailPlanet: () => {},
  detailPlanet: null,
  closeModal: () => {},
  isModalOpen: false,
  convertDateTime: () => '',
};

export const MyContext = createContext(defaultContext);

const MyContextProvider: FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [detailPlanet, setDetailPlanet] = useState<Planet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [planets, setPlanets] = useState<PlanetResult>(defaultContext.planets);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const { data } = await API.get<PlanetResult>(`/planets/?page=${currentPage}`);
      setPlanets(data);
      setIsLoading(false);
    };

    fetchData();
  }, [currentPage]);

  const handleClick = (page: number) => setCurrentPage(page);

  const handleDetailPlanet = async (url: string) => {
    setIsLoading(true);
    const { data } = await API.get<Planet>(url);
    setDetailPlanet(data);
    setIsLoading(false);
    setIsModalOpen(true);
  };

  const convertDateTime = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1;
    const year = date.getUTCFullYear();
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    return `${day}-${month}-${year} / ${hours}:${minutes}:${seconds}`;
  };

  const closeModal = () => setIsModalOpen(false);

  const contextValue: ContextProps = {
    planets,
    currentPage,
    handleClick,
    isLoading,
    handleDetailPlanet,
    detailPlanet,
    closeModal,
    isModalOpen,
    convertDateTime,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};

export default MyContextProvider;
