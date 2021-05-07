const fetchData = async (endpoint, options) => {
  try {
    const response = await fetch(endpoint, options);
    if (response.status > 199 && response.status < 300) {
      const result = await response.json();
      return result;
    }

    const { status, statusText } = response;
    throw new Error(`status: ${status} statusText: ${statusText}`);
  } catch(err) {
    throw err;
  }
};

export default fetchData;
