export const ErrorPage = (): JSX.Element => {
  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
      <p className="font-bold text-4xl leading-12 text-center">
        Oops, no characters found
      </p>
    </div>
  );
};
