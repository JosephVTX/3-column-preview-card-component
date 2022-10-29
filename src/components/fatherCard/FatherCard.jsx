import { Card } from "../card/Card"
import iconCar1 from "./img/icon-sedans.svg"
import iconCar2 from "./img/icon-suvs.svg"
import iconCar3 from "./img/icon-luxury.svg"

export const FatherCard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 mt-10 mb-10">

        <Card title="SEDANS" iconCar={iconCar1} btnTextColor=" text-[hsl(31,77%,52%)]" bgCard="xl:rounded-l-[10px] bg-[hsl(31,77%,52%)]" contentCard={"Choose a sedan for its affordability excellent fuel economy. Idel for curising in the city or on your next road trip."}/>
        <Card title="SUVS" iconCar={iconCar2} btnTextColor="text-[hsl(184,100%,22%)]" bgCard="bg-[hsl(184,100%,22%)]" contentCard={"Take an SUV for its spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures."}/>
        <Card title="LUXURY" iconCar={iconCar3} btnTextColor="text-[hsl(179,100%,13%)]" bgCard="xl:rounded-r-[7px] bg-[hsl(179,100%,13%)]" contentCard={"Cruise in the best card brands without tghe bloated rices. Enjoy the enhanced comfort of a luxury rental and arrive in style"}/>

    </div>
  )
}