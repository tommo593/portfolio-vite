import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-mustard-yellow my-20 flex flex-col gap-2 text-center text-xl">
      Whoops, looks like we made a mistake!
      <Link to="/">
        <img src="home.svg" alt="Home Button" className="m-auto mt-8 max-h-8 justify-center" />
      </Link>
    </div>
  );
};

export default NotFound;
