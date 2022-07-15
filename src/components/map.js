import Carta from "./carta";

const Mapeo = () => {
  const users = [
    {
      id: 1,
      tipo: "Gasolina",
      precio: 2.1,
    },
    {
      id: 2,
      tipo: "Diesel",
      precio: 28,
    },
  ];

  const usersForEached = users.forEach((user) => {
    return { ...user, name: user.tipo.toUpperCase() };
  });
  console.log(usersForEached);

  const usersMapped = users.map((user) => {
    return { ...user, name: user.tipo.toUpperCase() };
  });
  //console.log(usersMapped);
  return (
    <>
      {users.map((user) => {
        const vocalTipo = user.tipo.toLocaleUpperCase();
        return (
        <Carta key={user.id} tipo={vocalTipo} precio={user.precio} />
       )
      })}
    </>
  );
};

export default Mapeo;