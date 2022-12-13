export const Carne = () => {
  return (
    <div className="shadow-md max-w-xs mx-auto text-center">
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" alt="John" className="pt-4 w-1/2"/>
        <h1>{name}</h1>
        <p className="outline-none py-2 text-black font-bold bg-orange-500 text-center cursor-pointer w-full text-lg">Información personal</p>
        <p> <b>Identificación :</b> {identification}</p>
        <p> <b>Edad :</b>  {age}</p>
        <p> <b>Sexo :</b> {sexo}</p>
        <p><b>Barrio :</b>  {neighborhood}</p>
        <p className="outline-none py-2 text-black font-bold bg-orange-500 text-center cursor-pointer w-full text-lg">Información familiar</p>
        <p><b>Madre :</b> {motherName}</p>
        <p><b>Padre :</b>  {fatherName}</p>
        <p><b>Tutor :</b>  {leader}</p>
        <p><button>Imprimir</button></p>
</div>
  )
}
