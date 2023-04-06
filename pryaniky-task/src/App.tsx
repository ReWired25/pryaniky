import { AppRoutes } from './components/AppRoutes';
import { ToastContainer } from 'react-toastify';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AppRoutes />
      </LocalizationProvider>
      <ToastContainer />
    </>
  );
}

export default App;
