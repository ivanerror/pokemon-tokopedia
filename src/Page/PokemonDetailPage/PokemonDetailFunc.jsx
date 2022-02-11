import { usePokedex, usePokedexUpdate } from "../../Context/PokedexProvider";
import Swal from "sweetalert2";
import { Color } from "../../Component/styles";

const PokemonDetailFunc = () => {
  const pokedex = usePokedex();
  const setPokedex = usePokedexUpdate();

  const handleCatchPokemon = (pokemon) => {
    if (Math.random() > 0.5) {
      Swal.fire({
        title: "You caught a pokemon!",
        text: "You can now catch it in the pokedex",
        icon: "success",
        confirmButtonText: "Cool",
        confirmButtonColor: Color.red,
      }).then((res) => {
        Swal.fire({
          title: "Name your pokemon!",
          input: "text",
          confirmButtonText: "Submit",
          confirmButtonColor: Color.red,
          preConfirm: (nickname) => {
            const nickNameList = pokedex.map((pokemon) => pokemon.nickname);

            if (nickNameList.includes(nickname)) {
              // if nickname is already taken
              return Swal.showValidationMessage(
                `${nickname} is already taken!`
              );
            }
            if (nickname.length < 4) {
              return Swal.showValidationMessage(`${nickname} is too short!`);
            }

            if (nickname.length > 10) {
              return Swal.showValidationMessage(`${nickname} is too long!`);
            }

            return nickname;
          },
          allowOutsideClick: false,
        }).then((result) => {
          setPokedex([
            ...pokedex,
            {
              name: pokemon.name,
              nickname: result.value,
              image: pokemon.sprites.front_default,
            },
          ]);
        });
      });
    } else {
      Swal.fire({
        title: "You missed!",
        text: "You can try again later",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  };

  return { handleCatchPokemon };
};

export default PokemonDetailFunc;
