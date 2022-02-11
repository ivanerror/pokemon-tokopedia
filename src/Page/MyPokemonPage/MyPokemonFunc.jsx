import { useState, useEffect } from "react";
import { Color } from "../../Component/styles";
import Swal from "sweetalert2";
import { usePokedex, usePokedexUpdate } from "../../Context/PokedexProvider";

const MyPokemonFunc = () => {
  const [checked, setChecked] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [selectedPokemonGroup, setSelectedPokemonGroup] = useState([]);
  const pokedex = usePokedex();
  const setPokedex = usePokedexUpdate();

  const groupMyPokemonByName = (pokedex) => {
    const group_to_values = pokedex.reduce(function (obj, item) {
      obj[item.name] = {
        image: item.image,
        nickname: obj[item.name] ? obj[item.name].nickname : [],
      };
      obj[item.name].nickname = [...obj[item.name].nickname, item.nickname];
      return obj;
    }, {});

    const groups = Object.keys(group_to_values).map(function (key) {
      return {
        name: key,
        nickname: group_to_values[key].nickname,
        image: group_to_values[key].image,
      };
    });

    return groups;
  };

  const groupedPokedex = groupMyPokemonByName(pokedex);

  const handlePokemonGroup = () => {
    let tempPokemonGroup = [...selectedPokemonGroup];

    groupedPokedex.forEach((pokemon) => {
      if (pokemon.nickname.every((x) => [...selectedPokemon].includes(x))) {
        tempPokemonGroup = [...tempPokemonGroup, pokemon.name];
      } else {
        tempPokemonGroup = tempPokemonGroup.filter((x) => x !== pokemon.name);
      }
    });

    return tempPokemonGroup;
  };

  useEffect(() => {
    if (selectedPokemon.length === pokedex.length && pokedex.length > 0) {
      setChecked(true);
    } else {
      setChecked(false);
    }

    setSelectedPokemonGroup(handlePokemonGroup);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedPokemon, pokedex]);

  const handleReleaseButton = () => {
    if (selectedPokemon.length > 0) {
      Swal.fire({
        title: "Are you sure want to release this selection?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: Color.red,
        confirmButtonText: "Yes, release it!",
      }).then((result) => {
        if (result.value) {
          setPokedex(
            pokedex.filter((x) => !selectedPokemon.includes(x.nickname))
          );
        }
      });
    }
  };

  const handleReleasePokemon = (nickname) => {
    Swal.fire({
      title: `Are you sure want to release this pokemon ${nickname}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: Color.red,
      confirmButtonText: "Yes, release it!",
    }).then((result) => {
      if (result.value) {
        setPokedex(pokedex.filter((x) => x.nickname !== nickname));
        setSelectedPokemon(selectedPokemon.filter((x) => x !== nickname));
      }
    });
  };

  const handleSelectPokemon = (value, nickname) => {
    if (selectedPokemon.includes(nickname)) {
      setSelectedPokemon(selectedPokemon.filter((name) => name !== nickname));
    } else {
      setSelectedPokemon([...selectedPokemon, value.target.value]);
    }
  };

  const handleSelectPokemonGroup = (pokemon) => {
    if (selectedPokemonGroup.includes(pokemon.name)) {
      setSelectedPokemon([
        ...selectedPokemon.filter((name) => !pokemon.nickname.includes(name)),
      ]);
      setSelectedPokemonGroup(
        selectedPokemonGroup.filter((name) => name !== pokemon.name)
      );
    } else {
      setSelectedPokemonGroup([...selectedPokemonGroup, pokemon.name]);
      setSelectedPokemon([
        ...new Set([...selectedPokemon, ...pokemon.nickname]),
      ]);
    }
  };

  const handleSelectAll = () => {
    if (checked) {
      setSelectedPokemon([]);
      setSelectedPokemonGroup([]);
    } else {
      setSelectedPokemon(pokedex.map((x) => x.nickname));
      setSelectedPokemonGroup(pokedex.map((x) => x.name));
    }
    setChecked(!checked);
  };

  return {
    handleReleasePokemon,
    handleSelectPokemon,
    handleSelectPokemonGroup,
    handleSelectAll,
    handleReleaseButton,
    groupedPokedex,
    selectedPokemon,
    selectedPokemonGroup,
    checked,
  };
};

export default MyPokemonFunc;
