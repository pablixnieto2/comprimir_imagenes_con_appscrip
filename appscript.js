function compressImagesInFolder() {
  var folderId = 'YOUR_FOLDER_ID'; // Reemplaza 'YOUR_FOLDER_ID' con el ID de tu carpeta en Google Drive
  var destinationFolderId = 'DESTINATION_FOLDER_ID'; // Reemplaza 'DESTINATION_FOLDER_ID' con el ID de la carpeta donde deseas guardar las imágenes comprimidas
  var folder = DriveApp.getFolderById(folderId);
  var destinationFolder = DriveApp.getFolderById(destinationFolderId);
  var imagesJPEG = folder.getFilesByType(MimeType.JPEG);
  var imagesPNG = folder.getFilesByType(MimeType.PNG);

  // Procesar imágenes JPEG
  while (imagesJPEG.hasNext()) {
    var image = imagesJPEG.next();
    var fileName = image.getName();
    var imageBlob = image.getBlob();
    var compressedBlob = Utilities.newBlob(imageBlob.getBytes(), 'image/jpeg', fileName);
    destinationFolder.createFile(compressedBlob);
  }

  // Procesar imágenes PNG
  while (imagesPNG.hasNext()) {
    var image = imagesPNG.next();
    var fileName = image.getName();
    var imageBlob = image.getBlob();
    var compressedBlob = Utilities.newBlob(imageBlob.getBytes(), 'image/png', fileName);
    destinationFolder.createFile(compressedBlob);
  }
}
