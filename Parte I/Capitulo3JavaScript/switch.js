const extension = ".md";

switch (extension) {
    case ".doc":
        console.log("Documento do Word");
    case".pdf":
    case ".md": 
        console.log("Ele imprimi o caso que ele bater, e todos os outros casos abaixo dele, mesmo que não bata.");
    case ".svg":
        console.log("Parabens pode abrir este arquivo");
        break;
    default:
        console.log("Não é um arquivo válido");
    }