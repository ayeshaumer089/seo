import PrivateDemoPage from "@/components/PrivateDemoPage";
import { privateRobots } from "@/data/site";

export const metadata = {
  title: "Admin",
  description: "TechNest Academy admin panel.",
  robots: privateRobots,
};

export default function AdminPage() {
  return (
    <PrivateDemoPage
      title="Admin Panel"
      note="Demo admin panel for robots meta practice."
    />
  );
}
