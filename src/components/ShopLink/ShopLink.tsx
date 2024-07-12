import { Link } from "@/navigation";
import simpleGlobe from "@/assets/icons/simple-globe.svg";
import Image from "next/image";

export default function ShopLink({ title, url }: any) {
  return (
    <Link href={url} className="ShopLink">
      <Image width={32} height={32} src={simpleGlobe} alt="language" />
      <span className="ShopLink__url">{title}</span>
    </Link>
  );
}
