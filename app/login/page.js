import PrivateDemoPage from "@/components/PrivateDemoPage";
import { privateRobots } from "@/data/site";

export const metadata = {
  title: "Login",
  description: "Sign in to your TechNest Academy account.",
  robots: privateRobots,
};

export default function LoginPage() {
  return (
    <PrivateDemoPage
      title="Login"
      note="Demo login screen for robots meta practice."
    />
  );
}
