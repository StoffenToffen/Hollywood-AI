const fetchData = async <T>(resource: string, id?: string): Promise<T> => {
  try {
    const response = await fetch(
      `https://advanced-internship-api-production.up.railway.app/${resource}${id ? `/${id}` : ""}`,
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch ${resource}: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { fetchData };
