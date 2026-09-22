import type React from "react";
import { Navigate } from "react-router";
import { useCurrentUserStore } from "../../store/currentUsername";

interface ProtectedProps {
	children: React.ReactNode;
}
export default function Protected({ children }: ProtectedProps) {
	const username = useCurrentUserStore((s) => s.currentUser);
	if (username === "guest") {
		return <Navigate to={"/"} />;
	}
	return children;
}
