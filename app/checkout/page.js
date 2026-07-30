import PrivateDemoPage from "@/components/PrivateDemoPage";
import { noIndexRobots } from "@/data/site";

export const metadata = {
  title: "Checkout",
  description: "Complete your TechNest Academy checkout.",
  robots: noIndexRobots,
};

export default function CheckoutPage() {
  return (
    <PrivateDemoPage
      title="Checkout"
      note="Demo checkout page for robots meta practice."
    />
  );
}
