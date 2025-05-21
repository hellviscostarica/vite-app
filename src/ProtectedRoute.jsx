import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(undefined); // undefined = loading, null = not logged in

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe(); // clean up listener
  }, []);

  if (user === undefined) {
    // Still checking user status
    return <div>Loading...</div>;
  }

  if (!user) {
    // Not logged in
    return <Navigate to="/" />;
  }

  return children; // Render protected component
}

export default ProtectedRoute;