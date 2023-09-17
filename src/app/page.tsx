import BestSellers from "@/components/sharing/BestSellers";
import Brand from "@/components/sharing/Brand";
import Header from "@/components/sharing/Header";
import TopSelections from "@/components/sharing/TopSelections";
import TheEasyWayToOrder from "@/components/sharing/TheEasyWayToOrder";
import SubscribeOurNewsLater from "@/components/sharing/SubscribeOurNewsLater";

export default function Home() {
  return (
    <>
      <Header />
      <Brand />
      <TopSelections />
      <BestSellers />
      <TheEasyWayToOrder />
      <SubscribeOurNewsLater />
    </>
  )
}
