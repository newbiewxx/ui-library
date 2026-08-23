export const useStyle = () => {
  const fontSize = value => {
    if (!value) return {};

    // only digital value
    const reg = /^\d+$/;
    if (reg.test(value)) {
      return { fontSize: value + "px" };
    } else {
      return { fontSize: value };
    }
  };

  const color = value => {
    if (!value) return {};

    return { color: value };
  };

  return {
    fontSize,
    color,
  };
};
