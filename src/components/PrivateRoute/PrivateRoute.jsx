import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "../../lib/appRoutes";

export default function PrivateRoute({ user }) {
  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
}
