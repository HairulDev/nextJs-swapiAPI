import type { NextPage } from 'next';
import Home from './Home';
import Pagination from './Pagination';

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <Pagination />
    </>
  );
};

export default Index;
