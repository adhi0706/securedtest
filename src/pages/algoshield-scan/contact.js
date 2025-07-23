import ContactUs from "../../AlgoShield/pages/contactUs/ContactUs";
import { NoSidebarLayout } from "../../AlgoShield/components/sidebar/Layout";
import AlgoShield from "../../AlgoShield";

export default function ContactPage() {
  return (
    <AlgoShield>
      <NoSidebarLayout>
        <ContactUs />
      </NoSidebarLayout>
    </AlgoShield>
  );
} 