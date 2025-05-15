// FirstApp.jsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Import if not already imported globally

const AlgunaPrueba = () => {
  return <h1 className="text-center">Sistema de reserva</h1>;
};

export const FirstApp = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light">
      <div className="text-center p-4 border rounded shadow-sm bg-white">
        {AlgunaPrueba()}
        <p className="mt-2">Algun Business</p>
      </div>
    </div>
  );
};

export default FirstApp;