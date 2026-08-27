export const useStyle = () => {
  const reg = /^\d+$/;
  const fontSize = value => {
    if (!value) return {};

    // only digital value

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

  const width = value => {
    if (!value) return {};
    const targetValue = reg.test(value) ? value + "px" : value;
    return { width: targetValue };
  };

  const height = value => {
    if (!value) return {};
    const targetValue = reg.test(value) ? value + "px" : value;
    return { height: targetValue };
  };

  return {
    fontSize,
    color,
    width,
    height
  };
};
