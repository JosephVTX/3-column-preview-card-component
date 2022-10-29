export const Card = ({title = "SEDANS", iconCar, contentCard, bgCard, btnTextColor}) => {
  return (
    <div className={`h-[31.25rem] w-[21.875rem] ${bgCard} flex flex-col justify-between py-20 px-10 text-white`}>
        <div className="h-[1.875rem] w-[1.875rem">
            <img src={iconCar}  />
        </div>

        <h2 className="font-big-shoulders-display text-[34px]">{title}</h2>

        <p>
            {contentCard}
        </p>

        <button className={`box-border w-[12rem] bg-white rounded-full ${btnTextColor} px-10 py-4 hover:bg-transparent hover:text-white hover:border`}>Learn More</button>
    </div>
  )
}