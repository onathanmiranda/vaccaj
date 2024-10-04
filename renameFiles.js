const fs = require('fs');
const path = require('path');

// Função para renomear arquivos
function renameFilesInDirectory(directoryPath) {
  // Lê o conteúdo do diretório
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.error('Erro ao ler o diretório:', err);
    }

    // Percorre cada arquivo no diretório
    files.forEach((file) => {
      const oldFilePath = path.join(directoryPath, file);

      // Verifica se o item é um arquivo
      if (fs.lstatSync(oldFilePath).isFile()) {
        // Substitui "baritoni" por "baritono"
        let newFileName = file.replace(/baritoni/g, 'baritono');

        // Substitui "altto" ou "alto" por "contralto"
        newFileName = newFileName.replace(/altto|contrcontralto/g, 'contralto');
        
        newFileName = newFileName.replace(/sopraano/g, 'soprano');
        newFileName = newFileName.replace(/vocalises/g, 'vocalizes');
        
        // Se o nome foi modificado, faz a renomeação
        if (newFileName !== file) {
          const newFilePath = path.join(directoryPath, newFileName);
          
          // Renomeia o arquivo
          fs.rename(oldFilePath, newFilePath, (err) => {
            if (err) {
              console.error('Erro ao renomear o arquivo:', err);
            } else {
              console.log(`Renomeado: ${file} -> ${newFileName}`);
            }
          });
        }
      }
    });
  });
}

// Caminho da pasta que deseja escanear
const directoryPath = './public/recordings'; // Substitua pelo caminho da sua pasta

// Executa a função
renameFilesInDirectory(directoryPath);