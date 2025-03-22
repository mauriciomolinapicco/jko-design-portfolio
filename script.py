import os
import re

def obtener_imagenes_usadas(html_file):
    # Lee el archivo HTML
    with open(html_file, 'r', encoding='utf-8') as f:
        contenido = f.read()

    # Usa una expresión regular para encontrar todas las rutas de imágenes .webp
    imagenes_en_html = re.findall(r'["\'](.*?\.webp)["\']', contenido)

    expr = 'src="'
    res = set()
    for image in imagenes_en_html:
        posicion = image.find(expr)
        if posicion != -1:
            res.add(image[posicion + len(expr):])
    return res

def eliminar_imagenes_no_usadas(directorio, imagenes_usadas):
    # Recorre los archivos del directorio
    for archivo in os.listdir(directorio):
        if archivo.endswith('.webp') and archivo not in imagenes_usadas:
            print(archivo)
            # ruta_imagen = os.path.join(directorio, archivo)
            # print(f"Eliminando imagen no utilizada: {ruta_imagen}")
            # os.remove(ruta_imagen)

# Ruta al archivo HTML y al directorio de imágenes
html_file = 'portfolio.html'
directorio_imagenes = 'static/portfolio'

# Obtén las imágenes usadas del archivo HTML
imagenes_usadas = obtener_imagenes_usadas(html_file)


# Elimina las imágenes no utilizadas
eliminar_imagenes_no_usadas(directorio_imagenes, imagenes_usadas)
