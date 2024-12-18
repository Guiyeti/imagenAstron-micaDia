"use strict";

        document.addEventListener('DOMContentLoaded', () => {
            var contenedor = document.getElementById("container");
            var claveAPI = "9jPVQCO2GrSKQnEnxdIppe0FF2tCaOUFvfDz59VR";
            var apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${claveAPI}`;

            fetch(apiUrl)
                .then((respuesta) => {
                    if (!respuesta.ok) {
                        throw new Error("La solicitud no fue exitosa");
                    }
                    return respuesta.json();
                })
                .then((datos) => {
                    if (datos.media_type === "video") {
                        var contenedorVideo = document.createElement("iframe");
                        contenedorVideo.src = datos.url;
                        contenedorVideo.width = "500";
                        
                        contenedor.appendChild(contenedorVideo);
                        
                    } else {
                        var contenedorImagen = document.createElement("img");
                        contenedorImagen.src = datos.url;
                        contenedorImagen.alt = datos.title;
                        
                        contenedor.appendChild(contenedorImagen);
                        
                    }
                })
                .catch((error) => {
                    console.error('Error al obtener los datos:', error);
                });
        });