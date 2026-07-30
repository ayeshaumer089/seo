import PrivateDemoPage from "@/components/PrivateDemoPage";
import { privateRobots } from "@/data/site";

export const metadata = {
  title: "Dashboard",
  description: "Your TechNest Academy learning dashboard.",
  robots: privateRobots,
};

export default function DashboardPage() {
  return (
    <PrivateDemoPage
      title="Dashboard"
      note="Demo dashboard for robots meta practice."
    />
  );
}
