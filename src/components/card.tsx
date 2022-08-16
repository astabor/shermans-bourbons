import * as React from "React";

type CardProps = {
  title: string;
  url: string;
  photo: string;
};

const Card = ({ title, url, photo }: CardProps) => {
  return (
    <>
      <div className="centered-container">
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            </p>
          </div>
          <div>
            <img className="w-[600px] h-[480px]" src={photo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
