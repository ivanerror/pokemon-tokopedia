const fetchMoreConf = (limit, nextOffset) => {
  return {
    variables: { limit: limit, offset: nextOffset },
    updateQuery: (pv, { fetchMoreResult }) => {
      if (!fetchMoreResult) {
        return pv;
      }

      const resValue = {
        pokemons: {
          ...fetchMoreResult.pokemons,
          results: [
            ...pv.pokemons.results,
            ...fetchMoreResult.pokemons.results,
          ],
        },
      };

      return resValue;
    },
  };
};

export default fetchMoreConf;
