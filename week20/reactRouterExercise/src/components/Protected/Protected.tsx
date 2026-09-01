import type React from "react";
import { Navigate } from "react-router";

interface ProtectedProps {
	children: React.ReactNode;
}

const Protected: React.FC<ProtectedProps> = (children) => {
	const user = localStorage.getItem("user");

	if (!user) return <Navigate to={"/login"} />;

	return <>{children}</>;
};

export default Protected;
