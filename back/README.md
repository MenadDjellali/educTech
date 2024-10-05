# EducTech backend node

## Description du projet

**Eductech** est une platefome similaire à udemy, coursera qui consiste à mettre des cours en ligns.

## Prérequis

- MacOs : https://code.visualstudio.com/docs/setup/mac
- Windows : https://code.visualstudio.com/docs/setup/windows
- Linux : https://code.visualstudio.com/docs/setup/linux
- Installer l'application Expo sur votre smartphone

## Pour lancer le back :

1. Ouvrez votre projet dans VSCode :
    ```bash
    code .
    ```
   (Assurez-vous d'avoir lancé Docker Desktop)

2. Ouvrez le projet dans un container :
    - Utilisez `Ctrl + Shift + P` et sélectionnez `Dev Containers: Reopen in container`
    - Cela va créer tous les containers nécessaires pour le projet

### Pour installer toutes les dépendances :

1. Installez les dépendances :
    ```bash
    npm install
    ```

2. Démarrez le projet :
    ```bash
    npm start
    ```

3. Ouvrez le navigateur et allez sur localhost:8000.

4. Vous pouvez vous connecter à la base de donnée via adminer sur localhost:8081.

psql -U user 
\l
\c educTech
\dn
SET search_path TO "educTech_data";
\dt "educTech_data".*

\d "Course"
\d maTable