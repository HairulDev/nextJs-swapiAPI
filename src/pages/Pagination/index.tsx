import { FC, useContext } from 'react';
import { MyContext } from '../../context/MyContextProvider';
import styles from '../../styles/Home.module.css';

const Pagination: FC = () => {
  const { planets, currentPage, handleClick }: any = useContext(MyContext);

  return (
    <div className="flex justify-center py-8">
      <button
        type="button"
        className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white p-3 rounded-full cursor-pointer
          ${
            !planets.previous
              ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed mr-2'
              : 'bg-[#2952e3] hover:bg-[#2546bd]  mr-2'
          }
        `}
        disabled={!planets.previous}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>
      <button
        type="button"
        className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-white p-3 rounded-full cursor-pointer
          ${
            !planets.next
              ? 'bg-gray-500 hover:bg-gray-500 cursor-not-allowed'
              : 'bg-[#2952e3] hover:bg-[#2546bd]'
          }
        `}
        disabled={!planets.next}
        onClick={() => handleClick(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
