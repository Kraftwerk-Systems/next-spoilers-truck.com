import useContactBarVisibility from "@/hooks/useContactBarVisibility";
import { Link } from "@/navigation";

export default function BrandBar() {
  const isInvisible = useContactBarVisibility();

  return (
    <div className={`BrandBar__wrapper ${isInvisible ? "BrandBar__wrapper--invisible" : ""}`}>
      <div className="BrandBar">
        <Link href="/#shop-highlights" className="BrandBar__item">
          Citroen
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          DAF
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Ford
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Fiat
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Hyundai
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          ISUZU
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          IVECO
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          KIA
        </Link>

        <Link
          href="/#shop-highlights"
          className="BrandBar__
        item"
        >
          MAN
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Mitsubishi
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Mercedes
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Nissan
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Opel
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Peugeout
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Piaggio
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Renault
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Scania
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Toyota
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          Volkswagen
        </Link>

        <Link href="/#shop-highlights" className="BrandBar__item">
          VOLVO
        </Link>
      </div>
    </div>
  );
}
