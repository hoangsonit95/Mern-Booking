import './list.scss';
import Sidebar from '../../../components/sidebar/Sidebar';
import Navbar from '../../../components/navbar/Navbar';
import Datatable from '../../../components/datatable/Datatable';
import { useLocation } from 'react-router-dom';

const ListHotel = ({ columns }) => {
  return (
    <div className='list'>
      <Sidebar />
      <div className='listContainer'>
        <Navbar />
        <Datatable columns={columns} />
      </div>
    </div>
  );
};

export default ListHotel;