// arquivos mjs e cjs podem ser importados e exportados de formas diferentes, dependendo do tipo de arquivo. Arquivos mjs usam a sintaxe de módulos ES6, enquanto arquivos cjs usam a sintaxe de módulos CommonJS. A escolha entre os dois tipos de arquivos depende do ambiente em que o código será executado e das preferências do desenvolvedor.

// É possível combinar amabos os tipos de arquivos em um mesmo projeto, mas é importante estar ciente das diferenças na sintaxe de importação e exportação para evitar erros de compatibilidade.

import { sayHello } from './utils.mjs'; // importando a função sayHello do arquivo utils.mjs
import { sayGoodbye } from './utils.cjs'; // importando a função sayGoodbye do arquivo utils.cjs

sayHello();
sayGoodbye();

// módulos ESM são assíncronos, o que significa que eles podem ser carregados e executados de forma assíncrona, permitindo que o código continue a ser executado enquanto os módulos são carregados. Isso pode melhorar o desempenho do aplicativo, especialmente em aplicativos grandes com muitos módulos.

// para importa módulos de forma assíncrona, usando a função import() que retorna uma promise que é resolvida quando o módulo é carregado e executado. Isso permite que o código continue a ser executado enquanto o módulo é carregado, melhorando o desempenho do aplicativo.

const { sayGoodbye } = require('')

// módulos CommonJS são síncronos, o que significa que eles são carregados e executados de forma síncrona, bloqueando a execução do código até que o módulo seja carregado. Isso pode levar a problemas de desempenho em aplicativos grandes com muitos módulos.