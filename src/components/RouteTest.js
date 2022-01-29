import { Link } from 'react-router-dom';

const RouteTest = () => {
  return (
    <>
      <Link to={'/'}>HOME</Link>
      <br />
      <Link to={'/diary/1'}>DIARY</Link>
      <br />
      <Link to={'/new'}>NEW</Link>
      <br />
      <Link to={'/edit?id=10&mode=dark'}>EDIT</Link>
    </>
  );
};

export default RouteTest;
