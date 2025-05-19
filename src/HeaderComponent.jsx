// FirstApp.jsx
import 'bootstrap/dist/css/bootstrap.min.css';

const AlgunaPrueba = () => {
  return <h1 className="text-center fs-4 fs-md-3">Sistema de reserva</h1>;
};

export const FirstApp = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light px-3">
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <div className="text-center p-4 border rounded shadow-sm bg-white">
          <AlgunaPrueba />
          <p className="mt-2 fs-6 text-muted">Algun Business</p>
        </div>
      </div>
    </div>
  );
};

export default FirstApp;