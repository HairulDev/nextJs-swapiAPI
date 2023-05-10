import { FC, useContext } from 'react';
import { MyContext } from '../../context/MyContextProvider';

const Pagination: FC = () => {
  const { planets, currentPage, handleClick }: any = useContext(MyContext);

  return (
    <div className="flex justify-center ">
      <ul className="flex">
        <li
          className={`inline-block px-3 py-1 mr-2 ${
            !planets.previous
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-gray-900 text-white'
          }`}
        >
          <button
            className="blue-glassmorphism"
            type="button"
            disabled={!planets.previous}
            onClick={() => handleClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        <li
          className={`inline-block px-3 py-1 ${
            !planets.next
              ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
              : 'bg-gray-900 text-white'
          }`}
        >
          <button
            type="button"
            disabled={!planets.next}
            onClick={() => handleClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
