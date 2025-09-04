import LinioMainCarrousel from "@/components/organisms/LinioMainCarrousel";
import CategoriesLinio from "@/components/organisms/CategoriesLinio";
import Image from "next/image";
import LastSeen from "@/components/organisms/LastSeenLinio";
import DiscountsTeconology from "@/components/organisms/DiscountsTecnologyLinio";

export default function Home() {
  return (
    <><LinioMainCarrousel /><CategoriesLinio /> <LastSeen /> <DiscountsTeconology /> </>
  );
}
