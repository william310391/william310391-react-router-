import {useNavigate,Link, Outlet} from 'react-router-dom';

export default function Dashboard() {
    const navigate=useNavigate();
const handleclick =() =>{
    navigate('/');
}

  return (
      <div>
          <h1>Dashboard</h1>
          <button onClick={handleclick}>Logout</button>
          <br />
          <Link to="welcome">welcome</Link>
          <br />
          <Link to="goodbye">goodbye</Link>
          <br />
          <Outlet />
      </div>
  )
}
