const API =
  "https://youtube-v31.p.rapidapi.com/channels?part=snippet%2Cstatistics&id=UCPJpuHMAgMpbXfatzbqCAww";

const content = null || document.getElementById('content');

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "36fe670373msh366e3b072e9aab0p10b6e1jsn9e3972b6f9f9",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const info = await fetchData(API);
    let view = `
            ${info.items.map(
              (elem) => `
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${elem.snippet.thumbnails.high.url}" alt="Nada" class="w-full">
                </div>
                    <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${elem.snippet.title}
                    </h3>
                </div>
            </div>
            `
            )}
            
        `;
        content.innerHTML = view;
  } catch (error){
    console.log(error);
  }
})();
