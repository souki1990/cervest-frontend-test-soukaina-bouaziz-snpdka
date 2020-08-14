
const getData = async () => {

  try {
    const response = await fetch(
      'https://gist.githubusercontent.com/fedo/bb1f80ccc87a125f24d35e8a1e879cfe/raw/be78163a65b7c19eecfd54680465da5091d35d4a/data.json'
    );

    if (!response.ok) {
      throw { error: response.statusText };
    }
    let data = await response.json();
    console.log("data",data)
    return data;
  } catch (error) {
    console.log(error);
    return { error: error };
  }
};

export { getData };
