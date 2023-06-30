import {useEffect, useState} from "react";
import {IsLogged} from "./IsLogged.ts";
import {Navigate} from "react-router-dom";

interface ProtectedRouteProps {
    element: JSX.Element;
}

function PrivateRoute({ element }: ProtectedRouteProps) {
    const [isLogged, setIsLogged] = useState<boolean | null>(null);

    useEffect(() => {
        IsLogged().then((logged) => {
            setIsLogged(logged as boolean);
        });
    }, []);

    if (isLogged === null) {
        // Votre gestion de chargement ou d'attente
        return null;
    } else if (isLogged) {
        return element;
    } else {
        return <Navigate to="/login" replace />;
    }
}

export default PrivateRoute;