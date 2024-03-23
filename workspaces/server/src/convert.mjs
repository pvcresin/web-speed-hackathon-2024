import { globby } from 'globby';
import sharp from 'sharp';

// jpgのfileパスを受け取り、96x96にリサイズして拡張子だけ変えて保存する関数
export async function convertToWebp(filePath) {
  const newFile = filePath.replace(/\.jpg$/, '.avif');
  await sharp(filePath).resize(96, 96).toFile(newFile);
}

const paths = await globby('workspaces/server/seeds/images/*.jpg', { absolute: true, onlyFiles: true });

console.log(paths);

await Promise.all(paths.map(convertToWebp));
