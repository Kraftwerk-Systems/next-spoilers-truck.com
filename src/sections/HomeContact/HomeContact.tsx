import ContactCard from "@/components/ContactCard/ContactCard";
import Map from "@/components/Map/Map";
import MessageBox from "@/components/MessageBox/MessageBox";

export default function HomeContact({ locale }: { locale: string }) {
  return (
    <section className="HomeContact" id="contact">
      <ContactCard />
      <Map />
      <MessageBox locale={locale} />
    </section>
  );
}
