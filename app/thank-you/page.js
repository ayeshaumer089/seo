import PrivateDemoPage from "@/components/PrivateDemoPage";
import { noIndexRobots } from "@/data/site";

export const metadata = {
  title: "Thank You",
  description: "Thank you for contacting TechNest Academy.",
  robots: noIndexRobots,
};

export default function ThankYouPage() {
  return (
    <PrivateDemoPage
      title="Thank You"
      note="Demo thank-you page for robots meta practice."
    />
  );
}
