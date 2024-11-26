interface LoadingProps {
  isLoading: boolean;
}

const Loader: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <>
          <div className="flex flex-col items-center justify-center">
            <figure>
              <img src="/images/back_immo.svg" width={250} />
            </figure>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 30"
              width="300"
              height="30"
              className="mb-4"
            >
              {/* Barre de fond */}
              <rect
                x="0"
                y="0"
                width="300"
                height="30"
                rx="15"
                fill="#E5E5E5"
              />
              {/* Barre de chargement */}
              <rect
                x="0"
                y="0"
                width="300"
                height="30"
                rx="15"
                fill="#22C55E"
                className="loading-bar"
              />
            </svg>
            <p className="text-gray-600 text-lg font-medium">
              Chargement du bien en cours...
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Loader;
